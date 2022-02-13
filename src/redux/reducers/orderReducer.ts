import { ORDER_FETCHING } from "../utils/actionTypes";

type defaultState = {
    isLoading: boolean
}

type orderAction = {
    type: string
    isLoading: boolean
}

const initialState: defaultState = {
    isLoading: false
}

export const orderReducer = (state = initialState, action: orderAction) => {
    switch(action.type) {
        case ORDER_FETCHING: 
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}