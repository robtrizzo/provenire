import { TypographyP } from "@/components/ui/typography";
export default function ManyPassions() {
  return (
    <div>
      <TypographyP>
        Gain an additional xp trigger:{" "}
        <i>
          Did you use deception, violence, kindness,{" "}
          <span className="text-muted-foreground">AND</span> ingenuity?
        </i>
      </TypographyP>
    </div>
  );
}
