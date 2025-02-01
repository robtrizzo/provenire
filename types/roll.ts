import {StringUnion} from "@/lib/utils";

const RollType = StringUnion('action', 'fortune', 'resist', 'project');
export type RollType = typeof RollType.type;

const RollResult = StringUnion('failure', 'partial', 'success', 'crit');
export type RollResult = typeof RollResult.type;

const RollEffect = StringUnion('reduced', 'normal', 'improved');
export type RollEffect = typeof RollEffect.type;

export type Roll = {
    charName: string;
    userId: string;
    index: number; // Used to mark rolls with a unique number if we need to remove rolls here and in the overall list
    redDice: number[];
    blueDice: number[];
    numRed: number;
    numBlue: number;
    type: RollType;
    effect: RollEffect;
    result: RollResult;
    resultDie: number;
    private: boolean;
    timestamp?: string;
    tag?: string;       // tag is effectively a description of the roll
}

export function validateRoll(roll: Roll) {
    let valid = (roll.redDice && roll.redDice.length > 0) ||
        (roll.blueDice && roll.blueDice.length > 0);
    valid = valid && roll.userId !== "" && roll.userId !== undefined;
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