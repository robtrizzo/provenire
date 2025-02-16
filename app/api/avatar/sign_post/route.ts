import { auth } from "@/auth";
import { checkUserAuthenticated, checkUserRole } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";
import { NextApiRequest } from "next";
import { getQSParamFromURL } from "@/lib/utils";
import { Conditions } from "@aws-sdk/s3-presigned-post/dist-types/types";

export async function GET(request: NextApiRequest) {
  const session = await auth();

  const unauthenticatedResponse = checkUserAuthenticated(session);
  if (unauthenticatedResponse) {
    return unauthenticatedResponse;
  }

  const unauthorizedResponse = checkUserRole(session, ["admin", "player"]);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const region = process.env.AWS_REGION;
  if (!region) {
    console.error("AWS_REGION missing");
    return NextResponse.json(
      { error: "Error creating presigned upload link" },
      { status: 500 }
    );
  }

  const client = new S3Client({ region });
  const Bucket = process.env.AWS_IMAGE_BUCKET_NAME;
  if (!Bucket) {
    console.error("AWS_IMAGE_BUCKET_NAME missing");
    return NextResponse.json(
      { error: "Error creating presigned upload link" },
      { status: 500 }
    );
  }

  const characterName = getQSParamFromURL("name", request.url);
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
