import { S3Client } from "@aws-sdk/client-s3";

export const region = process.env.AWS_REGION;
if (!region) {
  console.error("AWS_REGION missing");
}
export const Bucket = process.env.AWS_IMAGE_BUCKET_NAME;
if (!region) {
  console.error("AWS_IMAGE_BUCKET_NAME missing");
}
export const client = new S3Client({ region });
