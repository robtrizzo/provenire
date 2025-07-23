import { TypographyP } from "@/components/ui/typography";
export default function HostAGathering() {
  return (
    <div>
      <TypographyP>
        During downtime, you may host a gathering for close friends, teammates,
        and family. Each teammate chooses if they wish to invest a downtime
        activity to attend. Take <b>1 stress</b> for each teammate who
        doesn&apos;t come. Regardless of if anyone comes, <b>+1 heat</b>.
      </TypographyP>
      <TypographyP>
        Each teammate who does come may make a <b>fortune roll</b> and reduce
        that much <b>stress</b>, or mark <b>+1 xp</b> if they were already at{" "}
        <b>0 stress</b>.
      </TypographyP>
    </div>
  );
}
