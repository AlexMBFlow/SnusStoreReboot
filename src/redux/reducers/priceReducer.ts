import { SET_SELECTED_PRICE_SLIDER } from "../utils/actionTypes";
import { SET_SORT_PRICE_SELECT } from "../utils/actionTypes";

type defaultState = {
    defaultPrice: number[]
    selectedPrice: number[]
    min: number
    max: number
    sort: null | string
}

type priceAction = {
    type: string
    selectedPrice?: number[]
    sort?: string
}

const initialState: defaultState = {
    defaultPrice: [100, 650],
    selectedPrice: [100, 650],
    min: 100,
    max: 650,
    sort: null
}

export const priceReducer = (state = initialState, action: priceAction) => {
    switch(action.type) {
        case SET_SELECTED_PRICE_SLIDER:
            return {...state, selectedPrice: action.selectedPrice}
        case SET_SORT_PRICE_SELECT:
            return {...state, sort: action.sort}
        default:
            return state
    }
}