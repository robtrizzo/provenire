'use client';
import { createContext } from 'react';

const DiceContext = createContext({
  rollDice: (notation: string) => {},
});

export default DiceContext;
