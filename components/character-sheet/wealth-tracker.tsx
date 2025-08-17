import { useState } from "react";
import Clock from "../clock";
import { BuildupCheckboxes } from "../buildup-checkboxes";
import { Button } from "../ui/button";

export default function WealthTracker({
  title = "Wealth",
  initialWealth,
  currency,
  maxCurrency,
  maxWealth,
  onChangeCurrency,
  onChangeWealth,
  onChange,
}: {
  title?: string;
  initialWealth: number;
  currency: number;
  maxCurrency: number;
  maxWealth: number;
  onChangeCurrency: (n: number) => void;
  onChangeWealth: (n: number) => void;
  onChange: () => void;
}) {
  const [wealth, setWealth] = useState<number>(initialWealth);

  const handleChangeCurrency = (n: number) => {
    onChangeCurrency(n);
    onChange();
  };

  const handleIncrementLifestyle = () => {
    if (currency < maxCurrency) {
      console.error("currency must be maxed out before advancing lifestyle");
    }
    onChangeCurrency(0);
    const newLifestyle = Math.min(maxWealth, wealth + 1);
    setWealth(newLifestyle);
    onChangeWealth(newLifestyle);
    onChange();
  };

  const handleDecramentLifestyle = () => {
    if (currency > 0) {
      console.error("currency must be zero before reducing lifestyle");
    }
    onChangeCurrency(maxCurrency);
    const newLifestyle = Math.max(0, wealth - 1);
    setWealth(newLifestyle);
    onChangeWealth(newLifestyle);
    onChange();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center flex-wrap gap-4">
        <span className="font-cyber">{title}</span>
        <Clock
          width={35}
          height={35}
          max={maxWealth}
          current={wealth}
          clickable={false}
        />
        <BuildupCheckboxes
          clearPosition="start"
          current={currency}
          max={maxCurrency}
          onChange={handleChangeCurrency}
        />
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            className="text-muted-foreground text-center"
            disabled={currency > 0}
            onClick={handleDecramentLifestyle}
          >
            -
          </Button>
          <span className="font-cyber text-xs">lifestyle</span>
          <Button
            variant="ghost"
            className="text-muted-foreground text-center"
            disabled={currency < maxCurrency}
            onClick={handleIncrementLifestyle}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
