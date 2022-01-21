import { ADD_SNUS_ON_BASKET } from "../utils/actionTypes";
import { REMOVE_SNUS_ON_BASKET } from "../utils/actionTypes";
import type { actionType } from "../actionCreatorsTypes/BasketTypes";
import type { Snus } from "../snusStore/snusType";

export const basketAddAC = (item: Snus): actionType => {
    return {
        type: ADD_SNUS_ON_BASKET,
        item: item
    }
}

export const basketRemoveAC = (item: Snus): actionType => {
    return {
        type: REMOVE_SNUS_ON_BASKET,
        item: item
    }
}

