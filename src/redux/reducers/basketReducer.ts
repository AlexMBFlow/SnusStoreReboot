import { ADD_SNUS_ON_BASKET } from "../utils/actionTypes";
import { REMOVE_SNUS_ON_BASKET } from "../utils/actionTypes";
import type { Snus } from "../snusStore/snusType";

type basket = {
    snusBasket: Array<Snus> | Array<any>;
    totalPrice: number;
}

type basketAction = {
    type: string;
    item?: any;
}

const initialState: basket = {
    snusBasket: [],
    totalPrice: 0
}

export const basketReducer = (state = initialState, action: basketAction) => {
    switch (action.type) {
        case ADD_SNUS_ON_BASKET:
            return {...state, snusBasket: [...state.snusBasket, action.item], totalPrice: state.totalPrice + action.item.price}
        case REMOVE_SNUS_ON_BASKET:
            return {...state, snusBasket: state.snusBasket.filter( (el: Snus) => el.id !== action.item.id), totalPrice: state.totalPrice - action.item.price}
        default:
            return state
    }
}