import {StringUnion} from "@/lib/utils";

const RollType = StringUnion('action', 'fortune', 'resist', 'project');
export type RollType = typeof RollType.type;

const RollResult = StringUnion('failure', 'partial', 'success', 'crit');
export type RollResult = typeof RollResult.type;

const RollEffect = StringUnion('reduced', 'normal');
export type RollEffect = typeof RollEffect.type;

export type Roll = {
    red: number[];
    blue: number[];
    untyped: number[];
    type: RollType;
    effect: RollEffect;
    result: RollResult;
}

export function jsonToRoll(json: string): Roll {
    const roll = JSON.parse(json) as Roll;
    const valid = (roll.red && roll.red.length > 0) ||
        (roll.blue && roll.blue.length > 0) ||
        (roll.untyped && roll.untyped.length > 0);
    if (!valid) {
        throw (new Error('Rolls require at least 1 die roll'));
    }
    RollType.assert(roll.type);
    RollResult.assert(roll.result);
    RollEffect.assert(roll.effect);
    return roll;
}