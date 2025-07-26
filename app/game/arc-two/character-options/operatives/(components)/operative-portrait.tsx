import Image, { ImageProps } from "next/image";

export default function OpPortrait(
  props: Omit<ImageProps, "src" | "alt"> & { name: string }
) {
  const { name } = props;
  if (!name) {
    return null;
  }
  const src = `${
    process.env.NEXT_PUBLIC_S3_BUCKET
  }/era3/arc2/operatives/named/${name.toLowerCase()}.png`;
  return <Image {...props} src={src} alt={name} />;
}
