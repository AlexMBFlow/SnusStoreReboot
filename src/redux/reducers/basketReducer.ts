import { ADD_SNUS_ON_BASKET } from "../utils/actionTypes";
import { REMOVE_SNUS_ON_BASKET } from "../utils/actionTypes";
import { SET_ON_BASKET_FROM_LOCALSTORAGE } from "../utils/actionTypes";
import type { Snus } from "../snusStore/snusType";

type basket = {
    snusBasket: Array<Snus> | Array<any>;
    totalPrice: number;
}

type basketAction = {
    type: string;
    item?: any;
    storage: string[]
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
            return {...state, snusBasket: state.snusBasket.filter( (el: Snus) => el._id !== action.item._id), totalPrice: state.totalPrice - action.item.price}
        case SET_ON_BASKET_FROM_LOCALSTORAGE:
            return {...state, snusBasket: action.storage}
        default:
            return state
    }
}