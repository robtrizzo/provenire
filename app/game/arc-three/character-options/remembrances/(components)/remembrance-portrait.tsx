import Image, { ImageProps } from "next/image";

export default function RemembrancePortrait(
  props: Omit<ImageProps, "src" | "alt"> & { img: string },
) {
  const { img } = props;
  if (!img) {
    return null;
  }
  const src = `${
    process.env.NEXT_PUBLIC_S3_BUCKET
  }/era3/crucible/${img.toLowerCase()}.png`;
  return <Image {...props} src={src} alt={img} />;
}
