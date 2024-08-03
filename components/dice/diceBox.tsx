'use client';
import DiceBox from '@3d-dice/dice-box';

const Dice = new DiceBox({
  id: 'dice-canvas', // canvas element id
  container: 'dice-arena', // container element id
  assetPath: '/assets/dice-box/',
  startingHeight: 8,
  throwForce: 6,
  spinForce: 5,
  lightIntensity: 0.9,
  gravity: 6,
});

export { Dice };
