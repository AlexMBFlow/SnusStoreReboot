import { ORDER_IS_LOADING, ORDER_IS_DISABLED, TEXT_IS_ORDERED } from "../utils/actionTypes";

type defaultState = {
    isLoading: boolean
    isDisabled: boolean
    buttonText: string
}

type orderAction = {
    type: string
    isLoading?: boolean
    isDisabled?: boolean
    text: string
}

const initialState: defaultState = {
    isLoading: false,
    isDisabled: false,
    buttonText: "Отправить",
}

export const orderReducer = (state = initialState, action: orderAction) => {
    switch (action.type) {
        case ORDER_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case ORDER_IS_DISABLED:
            return {...state, isDisabled: action.isDisabled}
        case TEXT_IS_ORDERED:
            return {...state, buttonText: action.text}
        default:
            return state
    }
}