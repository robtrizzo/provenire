import { Roll, RollType } from "@/types/roll";

const nightshiftCharacters = [
  "Bessemer",
  "Twenty-One",
  "Aika Drak",
  "Lilya Amati",
  "Von",
];

export function rollsByCharacterTransform(rolls: Roll[]) {
  const counts: Record<string, number> = {};

  for (const roll of rolls) {
    const charName = roll.charName;
    counts[charName] = (counts[charName] || 0) + 1;
  }

  return Object.entries(counts).map(([charName, numRolls]) => ({
    charName,
    numRolls,
    fill: nightshiftCharacters.includes(charName)
      ? "var(--color-nightshift)"
      : "var(--color-dayshift)",
  }));
}

export function diceByColorAndShiftTransform(rolls: Roll[]) {
  let redDiceD = 0;
  let blueDiceD = 0;
  let redDiceN = 0;
  let blueDiceN = 0;

  for (const roll of rolls) {
    if (nightshiftCharacters.includes(roll.charName)) {
      if (Array.isArray(roll.redDice)) {
        redDiceN += roll.redDice.length;
      }
      if (Array.isArray(roll.blueDice)) {
        blueDiceN += roll.blueDice.length;
      }
    } else {
      if (Array.isArray(roll.redDice)) {
        redDiceD += roll.redDice.length;
      }
      if (Array.isArray(roll.blueDice)) {
        blueDiceD += roll.blueDice.length;
      }
    }
  }

  return {
    nightshift: [
      { color: "red", total: redDiceD, fill: "var(--color-red)" },
      { color: "blue", total: blueDiceD, fill: "var(--color-blue)" },
    ],
    dayshift: [
      { color: "red", total: redDiceN, fill: "var(--color-red)" },
      { color: "blue", total: blueDiceN, fill: "var(--color-blue)" },
    ],
  };
}

export function rollsByColorTransform(rolls: Roll[]) {
  let redDice = 0;
  let blueDice = 0;

  for (const roll of rolls) {
    if (Array.isArray(roll.redDice)) {
      redDice += roll.redDice.length;
    }
    if (Array.isArray(roll.blueDice)) {
      blueDice += roll.blueDice.length;
    }
  }

  return [
    { color: "red", total: redDice, fill: "#fb2c36" },
    { color: "blue", total: blueDice, fill: "#2b7fff" },
  ];
}

export function rollsByNumberTransform(rolls: Roll[]) {
  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (const roll of rolls) {
    // Count in redDice
    if (Array.isArray(roll.redDice)) {
      for (const die of roll.redDice) {
        if (counts[die] !== undefined) counts[die]++;
      }
    }
    // Count in blueDice
    if (Array.isArray(roll.blueDice)) {
      for (const die of roll.blueDice) {
        if (counts[die] !== undefined) counts[die]++;
      }
    }
  }

  // Return as array of {number, count}
  return Object.entries(counts).map(([number, count]) => ({
    number: Number(number),
    count,
    fill: `var(--chart-${number})`,
  }));
}

export function rollsByNumberAndColorTransform(rolls: Roll[]) {
  const redCounts: Record<number, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };
  const blueCounts: Record<number, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  for (const roll of rolls) {
    if (Array.isArray(roll.redDice)) {
      for (const die of roll.redDice) {
        if (redCounts[die] !== undefined) redCounts[die]++;
      }
    }
    if (Array.isArray(roll.blueDice)) {
      for (const die of roll.blueDice) {
        if (blueCounts[die] !== undefined) blueCounts[die]++;
      }
    }
  }

  // Return as array of {number, red, blue}
  return [1, 2, 3, 4, 5, 6].map((number) => ({
    number,
    red: redCounts[number],
    blue: blueCounts[number],
  }));
}

export function rollsByNumberOfDiceTransform(rolls: Roll[]) {
  // Key: number of dice, Value: number of rolls with that many dice
  const counts: Record<number, number> = {};

  for (const roll of rolls) {
    const totalDice = roll.numRed + roll.numBlue;
    if (!counts[totalDice]) counts[totalDice] = 0;
    counts[totalDice]++;
  }

  // Return as array of {numDice, count}
  return Object.entries(counts)
    .map(([numDice, count]) => ({
      numDice: Number(numDice),
      count,
      fill: `var(--chart-${numDice})`,
    }))
    .sort((a, b) => a.numDice - b.numDice);
}

export function rollsByNumberOfDiceByShiftTransform(rolls: Roll[]) {
  // Separate counts for nightshift and dayshift
  const nightshiftCounts: Record<number, number> = {};
  const dayshiftCounts: Record<number, number> = {};

  for (const roll of rolls) {
    const totalDice = roll.numRed + roll.numBlue;

    if (nightshiftCharacters.includes(roll.charName)) {
      nightshiftCounts[totalDice] = (nightshiftCounts[totalDice] || 0) + 1;
    } else {
      dayshiftCounts[totalDice] = (dayshiftCounts[totalDice] || 0) + 1;
    }
  }

  // Get all unique dice counts across both shifts
  const allDiceCounts = new Set([
    ...Object.keys(nightshiftCounts).map(Number),
    ...Object.keys(dayshiftCounts).map(Number),
  ]);

  // Combine into [{number, dayshift, nightshift}]
  return Array.from(allDiceCounts)
    .sort((a, b) => a - b)
    .map((numDice) => ({
      number: numDice,
      dayshift: dayshiftCounts[numDice] || 0,
      nightshift: nightshiftCounts[numDice] || 0,
    }));
}

export function rollsByResultTransform(rolls: Roll[]) {
  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (const roll of rolls) {
    counts[roll.resultDie]++;
  }

  // Return as array of {number, count}
  return Object.entries(counts).map(([number, count]) => ({
    number: Number(number),
    count,
    fill: `var(--chart-${number})`,
  }));
}

export function rollsByResultAndTypeTransform(rolls: Roll[]) {
  const transformedRolls = [
    {
      number: 1,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 2,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 3,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 4,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 5,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 6,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
  ];

  for (const roll of rolls) {
    const result = roll.resultDie;
    const type = roll.type;

    if (result < 1 || result > 6) continue; // Skip invalid results

    const entry = transformedRolls[result - 1];
    if (type === "action") {
      entry.action++;
    } else if (type === "resist") {
      entry.resist++;
    } else if (type === "project") {
      entry.project++;
    } else if (type === "fortune") {
      entry.fortune++;
    }
  }

  return transformedRolls.map((entry) => ({
    number: entry.number,
    action: entry.action,
    resist: entry.resist,
    project: entry.project,
    fortune: entry.fortune,
  }));
}

export function diceByTypeTransform(rolls: Roll[]) {
  const transformedRolls = [
    {
      number: 1,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 2,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 3,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 4,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 5,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
    {
      number: 6,
      action: 0,
      resist: 0,
      project: 0,
      fortune: 0,
    },
  ];

  for (const roll of rolls) {
    const type = roll.type;

    for (const die of roll.redDice || []) {
      const entry = transformedRolls[die - 1];
      if (type === "action") {
        entry.action++;
      } else if (type === "resist") {
        entry.resist++;
      } else if (type === "project") {
        entry.project++;
      } else if (type === "fortune") {
        entry.fortune++;
      }
    }

    for (const die of roll.blueDice || []) {
      const entry = transformedRolls[die - 1];
      if (type === "action") {
        entry.action++;
      } else if (type === "resist") {
        entry.resist++;
      } else if (type === "project") {
        entry.project++;
      } else if (type === "fortune") {
        entry.fortune++;
      }
    }
  }

  return transformedRolls.map((entry) => ({
    number: entry.number,
    action: entry.action,
    resist: entry.resist,
    project: entry.project,
    fortune: entry.fortune,
  }));
}

export function actionRollsByResultTransform(rolls: Roll[]) {
  const transformedRolls = [
    { result: "fail", count: 0, fill: "var(--color-fail)" },
    { result: "partial", count: 0, fill: "var(--color-partial)" },
    { result: "success", count: 0, fill: "var(--color-success)" },
    { result: "critical", count: 0, fill: "var(--color-critical)" },
  ];

  for (const roll of rolls) {
    if (roll.type !== "action") continue; // Only consider action rolls

    switch (roll.result) {
      case "failure": {
        transformedRolls[0].count++;
        break;
      }
      case "partial": {
        transformedRolls[1].count++;
        break;
      }
      case "success": {
        transformedRolls[2].count++;
        break;
      }
      case "crit": {
        transformedRolls[3].count++;
        break;
      }
      default: {
        console.warn(`Unknown action roll result: ${roll.result}`);
        break;
      }
    }
  }

  return transformedRolls;
}

export function actionRollsbyResultAndShiftTransform(rolls: Roll[]) {
  const transformedRolls = [
    { result: "fail", dayshift: 0, nightshift: 0, fill: "var(--color-fail)" },
    {
      result: "partial",
      dayshift: 0,
      nightshift: 0,
      fill: "var(--color-partial)",
    },
    {
      result: "success",
      dayshift: 0,
      nightshift: 0,
      fill: "var(--color-success)",
    },
    {
      result: "critical",
      dayshift: 0,
      nightshift: 0,
      fill: "var(--color-critical)",
    },
  ];

  for (const roll of rolls) {
    if (roll.type !== "action") continue; // Only consider action rolls

    const shiftIndex = nightshiftCharacters.includes(roll.charName) ? 1 : 0;

    switch (roll.result) {
      case "failure": {
        transformedRolls[0][shiftIndex === 1 ? "nightshift" : "dayshift"]++;
        break;
      }
      case "partial": {
        transformedRolls[1][shiftIndex === 1 ? "nightshift" : "dayshift"]++;
        break;
      }
      case "success": {
        transformedRolls[2][shiftIndex === 1 ? "nightshift" : "dayshift"]++;
        break;
      }
      case "crit": {
        transformedRolls[3][shiftIndex === 1 ? "nightshift" : "dayshift"]++;
        break;
      }
      default: {
        console.warn(`Unknown action roll result: ${roll.result}`);
        break;
      }
    }
  }

  return transformedRolls;
}

export function rollsByActionTransform(rolls: Roll[]) {
  const counts: Record<string, { dayshift: number; nightshift: number }> = {};

  for (const roll of rolls) {
    const actions = roll.tag?.split(" | ");
    const isNightshift = nightshiftCharacters.includes(roll.charName);
    for (const action of actions || []) {
      if (!action) continue;
      if (!counts[action]) counts[action] = { dayshift: 0, nightshift: 0 };
      if (isNightshift) {
        counts[action].nightshift++;
      } else {
        counts[action].dayshift++;
      }
    }
  }

  // convert to [{action, total, dayshift, nightshift}]
  return Object.entries(counts)
    .map(([action, { dayshift, nightshift }]) => ({
      action,
      dayshift,
      nightshift,
      total: dayshift + nightshift,
    }))
    .sort((a, b) => b.total - a.total);
}

export function rollsByActtionAndTypeTransform(rolls: Roll[], type: RollType) {
  const counts: Record<string, { dayshift: number; nightshift: number }> = {};

  for (const roll of rolls) {
    if (roll.type !== type) continue; // Only consider rolls of the specified type
    const actions = roll.tag?.split(" | ");
    const isNightshift = nightshiftCharacters.includes(roll.charName);
    for (const action of actions || []) {
      if (!action) continue;
      if (!counts[action]) counts[action] = { dayshift: 0, nightshift: 0 };
      if (isNightshift) {
        counts[action].nightshift++;
      } else {
        counts[action].dayshift++;
      }
    }
  }

  // convert to [{action, total, dayshift, nightshift}]
  return Object.entries(counts)
    .map(([action, { dayshift, nightshift }]) => ({
      action,
      dayshift,
      nightshift,
      total: dayshift + nightshift,
    }))
    .sort((a, b) => b.total - a.total);
}
