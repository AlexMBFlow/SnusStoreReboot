import { ADD_SNUS_ON_BASKET } from "../utils/actionTypes";
import { REMOVE_SNUS_ON_BASKET } from "../utils/actionTypes";

const initialState = {
    snusBasket: [],
    totalPrice: 0
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SNUS_ON_BASKET:
            return {...state, snusBasket: [...state.snusBasket, action.item], totalPrice: state.totalPrice + action.item.price}
        case REMOVE_SNUS_ON_BASKET:
            return {...state, snusBasket: state.snusBasket.filter( el => el.id !== action.item.id), totalPrice: state.totalPrice - action.item.price}
        default:
            return state
    }
}