import { SET_INDETERMINATE } from "../../utils/actionTypes";
import type { setIndeterminate } from "./setIndeterminateTypes";

export const setIndeterminateAC = (indeterminate: boolean): setIndeterminate => {
    return {
        type: SET_INDETERMINATE,
        indeterminate: indeterminate
    }
}