import { TypographyP } from "@/components/ui/typography";
export default function Shroud() {
  return (
    <>
      <TypographyP>
        You may spend <b className="text-blue-500">1 Water</b> to expel a cloud
        of ash and dust. You may choose for it to be any or all of:{" "}
        <i>obscuring</i>, <i>choking</i>, <i>scalding</i>, and <i>staining</i>.
      </TypographyP>
      <TypographyP>
        Strong wind, rain, or a similar force can disperse the cloud.
      </TypographyP>
    </>
  );
}
