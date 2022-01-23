import { CHANGE_CHECKED_LIST } from "../../utils/actionTypes";
import type { checkList, saturationList } from "./checkedListTypes"

export const checkedListAC = (list: saturationList): checkList => {
    return {
        type: CHANGE_CHECKED_LIST,
        list: list
    }
}