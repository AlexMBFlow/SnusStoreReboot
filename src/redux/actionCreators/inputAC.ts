import { SEARCH_SNUS_INPUT }from "../utils/actionTypes"

export const inputAC = (value) => {
    return {
        type: SEARCH_SNUS_INPUT,
        value: value
    }
}