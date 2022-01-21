import { CHANGE_CHECKED_LIST } from "../utils/actionTypes";

export const checkedListAC = (list) => {
    return {
        type: CHANGE_CHECKED_LIST,
        list: list
    }
}