import {StringUnion} from "@/lib/utils";

const RollType = StringUnion('action', 'fortune', 'resist', 'project');
export type RollType = typeof RollType.type;

const RollResult = StringUnion('failure', 'partial', 'success', 'crit');
export type RollResult = typeof RollResult.type;

const RollEffect = StringUnion('reduced', 'normal', 'improved');
export type RollEffect = typeof RollEffect.type;

export type Roll = {
    redDice: number[];
    blueDice: number[];
    numRed: number;
    numBlue: number;
    type: RollType;
    effect: RollEffect;
    result: RollResult;
    resultDie: number;
    timestamp?: string;
}

export function validateRoll(roll: Roll) {
    console.log(roll);
    const valid = (roll.redDice && roll.redDice.length > 0) ||
        (roll.blueDice && roll.blueDice.length > 0);
    if (!valid) {
        throw (new Error('Rolls require at least 1 die roll'));
    }
    RollType.assert(roll.type);
    RollResult.assert(roll.result);
    RollEffect.assert(roll.effect);
    return roll;
}

export function blueHigher(roll: Roll): boolean {
    // crits are intersting and blueHigher refers to 2+ 6s on blues
    return roll.result === 'crit' ? roll.blueDice.filter(d => d === 6).length >= 2 : Math.max(...roll.blueDice) >= Math.max(...roll.redDice);
}