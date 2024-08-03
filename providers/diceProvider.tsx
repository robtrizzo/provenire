'use cleint';
import DiceBox from '@3d-dice/dice-box';
import DiceContext from '@/contexts/diceContext';

export default function DiceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
  Dice.init();
  Dice.onRollComplete = (results: any) => {
    console.log(results);
  };

  return (
    <DiceContext.Provider
      value={{
        rollDice: (notation: string) => {
          if (!Dice.current) return;
          Dice.current.show().roll(notation);
        },
      }}
    >
      {children}
    </DiceContext.Provider>
  );
}
