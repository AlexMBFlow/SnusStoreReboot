import { USER_IS_ORDERED } from './../../utils/actionTypes';
import type { step } from "./stepsTypes";


export const stepsAC: Function = (value: step) => {
    return {
        type: USER_IS_ORDERED,
        step: value
    }
}