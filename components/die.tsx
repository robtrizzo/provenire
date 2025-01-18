import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";
export function Die({ roll, className }: { roll: number; className?: string }) {
  switch (roll) {
    case 1:
      return <Dice1 className={className} />;
    case 2:
      return <Dice2 className={className} />;
    case 3:
      return <Dice3 className={className} />;
    case 4:
      return <Dice4 className={className} />;
    case 5:
      return <Dice5 className={className} />;
    case 6:
      return <Dice6 className={className} />;
    default:
      return null;
  }
}
