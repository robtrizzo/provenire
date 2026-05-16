import { TypographyP } from "@/components/ui/typography";
export default function Husk() {
  return (
    <>
      <TypographyP>
        Never a pleasant sensation, but in a pinch you can spent{" "}
        <b className="text-blue-500">1 Water</b> to dissolve a small portion of
        your body into dust to avoid a lethal blow or escape binds. If you
        rematerialize it quickly enough, you won't lose the limb or whatever
        else was attached to what you dissolved.
      </TypographyP>
      <TypographyP>
        If you also have <b>Shroud</b> and <b>Billow</b> you can spend{" "}
        <b className="text-blue-500">1 Water</b> to rapidly demateralize and
        remateralize anywhere in the cloud, but leaving behind a passably
        convincing (though stationary) husk of your body where you were.
      </TypographyP>
    </>
  );
}
