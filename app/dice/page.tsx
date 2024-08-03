'use client';
import { useEffect, useRef } from 'react';
import { Dice } from '@/components/dice/diceBox';
import { TypographyH1 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

export default function Page() {
  const diceInit = useRef(false); // @3d-dice init not idempotent, so we need to track if it's already initialized

  useEffect(() => {
    if (diceInit.current) return;
    // initialize the Dice Box outside of the component
    Dice.init().then(() => {
      // clear dice on click anywhere on the screen
      document.addEventListener('mousedown', () => {
        const diceBoxCanvas = document.getElementById('dice-canvas');
        if (
          diceBoxCanvas &&
          window.getComputedStyle(diceBoxCanvas).display !== 'none'
        ) {
          Dice.hide().clear();
        }
      });
    });
    Dice.onRollComplete = (results) => {
      console.log(results);
    };
    diceInit.current = true;
  }, []);

  const rollDice = () => {
    Dice.show().roll('2d6');
  };

  return (
    <div className="p-8">
      <TypographyH1>Dice</TypographyH1>
      <Button onClick={rollDice} className="mt-4">
        Roll
      </Button>
    </div>
  );
}
