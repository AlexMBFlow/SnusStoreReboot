import { SET_INDETERMINATE }from "../utils/actionTypes"
export const setIndeterminateAC = (indeterminate) => {
    return {
        type: SET_INDETERMINATE,
        indeterminate: indeterminate
    }
}