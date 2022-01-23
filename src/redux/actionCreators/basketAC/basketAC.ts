import { ADD_SNUS_ON_BASKET } from "../../utils/actionTypes";
import { REMOVE_SNUS_ON_BASKET } from "../../utils/actionTypes";
import type { basketTypes } from "./basketTypes";
import type { Snus } from "../../snusStore/snusType";

export const basketAddAC = (item: Snus): basketTypes => {
    return {
        type: ADD_SNUS_ON_BASKET,
        item: item
    }
}

export const basketRemoveAC = (item: Snus): basketTypes => {
    return {
        type: REMOVE_SNUS_ON_BASKET,
        item: item
    }
}

