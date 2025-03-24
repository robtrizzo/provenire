import { StringUnion } from "@/lib/utils";

const RollType = StringUnion('action', 'fortune', 'resist', 'project');
export type RollType = typeof RollType.type;

const RollResult = StringUnion('failure', 'partial', 'success', 'crit');
export type RollResult = typeof RollResult.type;

const RollEffect = StringUnion('reduced', 'normal', 'improved');
export type RollEffect = typeof RollEffect.type;

export type Roll = {
    charName: string;
    userid: string;
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
    valid = valid && roll.userid !== "" && roll.userid !== undefined;
    if (!valid) {
        throw (new Error('Rolls require at least 1 die roll'));
    }
    RollType.assert(roll.type);
    RollResult.assert(roll.result);
    RollEffect.assert(roll.effect);
    return roll;
}

export function blueHigher(roll: Roll): boolean {
    if (roll.result === 'crit') {
        return roll.blueDice.filter(d => d === 6).length >= 1;
    }

    // crit won't be used but lets us use RollResult
    const categories = {
        red: { "failure": 0, "partial": 0, "success": 0, "crit": 0 },
        blue: { "failure": 0, "partial": 0, "success": 0, "crit": 0 },
    };

    const countDie = (die: number): RollResult => {
        switch (die) {
            case 1:
            case 2:
            case 3:
                return "failure";
            case 4:
            case 5:
                return "partial";
            case 6:
                return "success";
            default:
                return "failure"; // shouldn't happen
        }
    }

    roll.redDice.forEach((die) => {
        categories.red[countDie(die)]++;
    });

    roll.blueDice.forEach((die) => {
        categories.blue[countDie(die)]++;
    });

    if (categories.blue.success >= 1) {
        return true;
    } else if (categories.red.success >= 1) {
        return false
    }
    if (categories.blue.partial >= 1) {
        return true;
    } else if (categories.red.partial >= 1) {
        return false
    }
    return categories.blue.failure >= 1;
}

export function stressFromResist(roll: Roll): number {
    let stress: number;
    switch (roll.result) {
        case "failure":
            stress = blueHigher(roll) ? 2 : 3;
            break;
        case "partial":
            stress = blueHigher(roll) ? 1 : 2;
            break;
        case "success":
            stress = blueHigher(roll) ? 0 : 1;
            break;
        case "crit":
            stress = -1;
            break;
    }
    return stress;
}

export function ticksFromProject(roll: Roll): number[] {
    const ticks = [];
    switch (roll.result) {
        case "failure":
            ticks.push(0, 1, 1);
            break;
        case "partial":
            ticks.push(1, 2, 3);
            break;
        case "success":
            ticks.push(2, 3, 5);
            break;
        case "crit":
            ticks.push(3, 5, 7);
            break;
    }
    return ticks;
}

export function resultsMessage(roll: Roll): string {
    const blueIsHigher = blueHigher(roll);
    let resultText = "";
    switch (roll.type) {
        case "resist":
            const stress = stressFromResist(roll);
            switch (stress) {
                case -1:
                    resultText = "Crit! Clear 1 stress.";
                    break;
                case 0:
                    resultText = `${roll.result === "crit" ? "Crit! " : ""
                    }Take no stress.`;
                    break;
                default:
                    resultText = `Take ${stress} stress.`;
                    break;
            }
            break;
        case "project":
            switch (roll.result) {
                case "crit":
                    resultText = `Crit! ${blueIsHigher ? "" : "(but take reduced effect)"
                    }`;
                    break;
                case "success":
                    resultText = `Hit${blueIsHigher ? "." : ", and take reduced effect"
                    }`;
                    break;
                case "partial":
                    resultText = `Partial hit${blueIsHigher ? "." : ", and take reduced effect"
                    }`;
                    break;
                case "failure":
                    resultText = `Miss${blueIsHigher ? "." : ", and take reduced effect"
                    }`;
                    break;
            }
            break;
        default:
            switch (roll.result) {
                case "crit":
                    resultText = "Crit! Succeed with improved effect.";
                    break;
                case "failure":
                    resultText = "Miss. Suffer the consequences.";
                    break;
                case "partial":
                    resultText = `Partial hit. Succeed, but suffer the consequences${roll.effect ? "" : " and take reduced effect"
                    }.`;
                    break;
                case "success":
                    resultText = `Hit! Succeed${roll.effect ? "" : ", but take reduced effect"
                    }.`;
                    break;
            }
    }
    return resultText;
}