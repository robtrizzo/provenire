import { checkAuth } from "@/lib/auth";
import { Survey } from "@/types/survey";
import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis";
import { getAllSurveysForArc } from "@/handlers/surveys";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ arc: string }> }
) {
  const { error } = await checkAuth("admin");
  if (error) return error;

  try {
    const arc = (await params).arc;
    if (!arc) {
      return NextResponse.json({ error: "must provide arc" }, { status: 400 });
    }
    const surveys = await getAllSurveysForArc(arc);
    if (!surveys || surveys.length === 0) {
      return NextResponse.json(
        { message: "No surveys found for this arc" },
        { status: 404 }
      );
    }
    return NextResponse.json({ surveys });
  } catch (error) {
    console.error("Error getting surveys", error);
    return NextResponse.json(
      { error: "Error getting surveys" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ arc: string }> }
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  try {
    const arc = (await params).arc;
    if (!arc) {
      return NextResponse.json({ error: "must provide arc" }, { status: 400 });
    }
    const surveyData = (await request.json()) as Survey;
    if (!surveyData) {
      return NextResponse.json(
        { error: "Invalid survey data" },
        { status: 400 }
      );
    }
    if (surveyData.arc !== arc) {
      return NextResponse.json(
        { error: "arc in URL must match arc in survey data" },
        { status: 400 }
      );
    }
    if (!surveyData.user) {
      return NextResponse.json(
        { error: "User ID is required in survey data" },
        { status: 400 }
      );
    }
    if (surveyData.user !== session?.user?.id) {
      return NextResponse.json(
        { error: "User ID in survey data must match authenticated user" },
        { status: 403 }
      );
    }
    await redis.set(
      `survey:${arc}:${surveyData.user}`,
      JSON.stringify(surveyData)
    );
    return NextResponse.json({
      message: "Survey created successfully",
      survey: surveyData,
    });
  } catch (error) {
    console.error("Error creating survey", error);
    return NextResponse.json(
      { error: "Failed to create survey" },
      { status: 500 }
    );
  }
}
