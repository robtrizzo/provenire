'use cleint';
import { useEffect, useRef } from 'react';
import DiceBox from '@3d-dice/dice-box';

const useDice = () => {
  const diceInit = useRef(false); // @3d-dice init not idempotent, so we need to track if it's already initialized
  const Dice = useRef(null);

  useEffect(() => {
    if (diceInit.current) return;
    const Dice = new DiceBox({
      id: 'dice-canvas', // canvas element id
      container: '#dice-arena', // container element id
      assetPath: '/assets/dice-box/',
      startingHeight: 8,
      throwForce: 6,
      spinForce: 5,
      lightIntensity: 0.9,
      gravity: 6,
    });
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
    Dice.onRollComplete = (results: any) => {
      console.log(results);
    };
    diceInit.current = true;
    Dice.current = Dice;
  }, []);

  const rollDice = (notation: string) => {
    if (!Dice.current) return;
    Dice.current.show().roll(notation);
  };
  return rollDice;
};

export default useDice;
