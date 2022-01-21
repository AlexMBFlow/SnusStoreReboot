import { CHANGE_CHECKED_LIST }from "../utils/actionTypes";
import { SET_INDETERMINATE }from "../utils/actionTypes";
import { SET_CHECK_ALL } from "../utils/actionTypes";

const initialState = {
    defaultCheckedList: ["Средний", "Крепкий", "Очень крепкий"],
    plainOptions: ["Легкий", "Средний", "Крепкий", "Очень крепкий"],
    indeterminate: true,
    checkAll: false
}

export const nicotineReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CHECKED_LIST:
            return {...state, defaultCheckedList: action.list}
        case SET_INDETERMINATE:
            return {...state, indeterminate: action.indeterminate}
        case SET_CHECK_ALL:
            return {...state, checkAll: action.checkAll}
        default:
            return state
    }
}