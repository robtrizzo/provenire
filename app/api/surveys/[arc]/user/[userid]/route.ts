import { checkAuth } from "@/lib/auth";
import { Survey } from "@/types/survey";
import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ arc: string; userid: string }> }
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;
  try {
    const arc = (await params).arc;
    if (!arc) {
      return NextResponse.json({ error: "must provide arc" }, { status: 400 });
    }
    const userid = (await params).userid;
    if (!userid) {
      return NextResponse.json(
        { error: "must provide userid" },
        { status: 400 }
      );
    }
    if (userid !== session?.user?.id && session?.user?.role !== "admin") {
      return NextResponse.json(
        { error: "User ID in URL must match authenticated user" },
        { status: 403 }
      );
    }
    const surveyKey = `survey:${arc}:${userid}`;
    const surveyData = (await redis.get(surveyKey)) as Survey | null;
    if (!surveyData) {
      return NextResponse.json({ error: "Survey not found" }, { status: 404 });
    }
    if (
      surveyData.user !== session?.user?.id &&
      session?.user?.role !== "admin"
    ) {
      return NextResponse.json(
        { error: "User ID in survey does not match authenticated user" },
        { status: 403 }
      );
    }
    return NextResponse.json({ survey: surveyData });
  } catch (error) {
    console.error("Error getting survey", error);
    return NextResponse.json(
      { error: "Error getting survey" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ arc: string; userid: string }> }
) {
  const { session, error } = await checkAuth("player");
  if (error) return error;

  try {
    const arc = (await params).arc;
    if (!arc) {
      return NextResponse.json({ error: "must provide arc" }, { status: 400 });
    }
    const userid = (await params).userid;
    if (!userid) {
      return NextResponse.json(
        { error: "must provide userid" },
        { status: 400 }
      );
    }
    if (userid !== session?.user?.id && session?.user?.role !== "admin") {
      return NextResponse.json(
        { error: "User ID in URL must match authenticated user" },
        { status: 403 }
      );
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
      message: "Survey updated successfully",
      survey: surveyData,
    });
  } catch (error) {
    console.error("Error updating survey", error);
    return NextResponse.json(
      { error: "Failed to update survey" },
      { status: 500 }
    );
  }
}
