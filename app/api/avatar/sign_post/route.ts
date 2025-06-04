import { checkAuth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { region, Bucket, client } from "@/lib/s3";
import { getQSParamFromURL } from "@/lib/utils";
import { Conditions } from "@aws-sdk/s3-presigned-post/dist-types/types";

export async function GET(request: NextRequest) {
  const { error } = await checkAuth("player");
  if (error) return error;

  if (!region) {
    return NextResponse.json(
      { error: "Error creating presigned upload link" },
      { status: 500 }
    );
  }

  if (!Bucket) {
    return NextResponse.json(
      { error: "Error creating presigned upload link" },
      { status: 500 }
    );
  }

  const characterName = getQSParamFromURL("name", request);
  if (!characterName) {
    return NextResponse.json(
      { error: "missing character name" },
      { status: 400 }
    );
  }

  const Key = `pc-art/${characterName}`;

  const Conditions: Conditions[] = [
    ["content-length-range", 0, 10000000], // content length restrictions: 0-10MB
    ["starts-with", "$Content-Type", "image/"], // content type restriction
    ["starts-with", "$key", "pc-art/"],
  ];

  const Fields = {
    acl: "bucket-owner-full-control",
  };

  const data = await createPresignedPost(client, {
    Bucket,
    Key,
    Conditions,
    Fields,
    Expires: 600,
  });

  return NextResponse.json(data);
}
