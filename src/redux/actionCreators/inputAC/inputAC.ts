import { SEARCH_SNUS_INPUT } from "../../utils/actionTypes"
import type { inputAction } from "./inputTypes"

export const inputAC = (value: string | number): inputAction => {
    return {
        type: SEARCH_SNUS_INPUT,
        value: value
    }
}