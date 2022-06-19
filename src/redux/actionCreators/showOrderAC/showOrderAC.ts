import { SET_SHOW_ORDER } from "../../utils/actionTypes";
import type { TShowOrder } from "./showOrderTypes";

export const showOrderAC = (value: boolean): TShowOrder => {
    return {
        type: SET_SHOW_ORDER,
        isOrderVisible: value
    }
}