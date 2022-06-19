import { SET_SHOW_BASKET, SET_SHOW_ORDER } from "../utils/actionTypes";

type defaultState = {
    isBasketVisible: boolean
    isOrderVisible: boolean
}

type basketAction = {
    type: string
    isBasketVisible?: boolean
    isOrderVisible?: boolean
}

const initialState: defaultState = {
    isBasketVisible: false,
    isOrderVisible: false
}

export const showBasket = (state = initialState, action: basketAction) => {
    switch (action.type) {
        case SET_SHOW_BASKET:
            return {...state, isBasketVisible: action.isBasketVisible}
        case SET_SHOW_ORDER:
        return {...state, isOrderVisible: action.isOrderVisible}
        default:
            return state
    }
}