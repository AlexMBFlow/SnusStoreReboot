import { CHANGE_CHECKED_LIST } from "../../utils/actionTypes";
//import { Dispatch } from "redux"
import type { checkList, saturationList } from "./checkedListTypes";

export const checkedListAC = (list: saturationList): checkList => {
    return {
        type: CHANGE_CHECKED_LIST,
        list: list
    }
}

/* export const checkedListAC = (list: saturationList): checkList => {
    return dispatch()
} */