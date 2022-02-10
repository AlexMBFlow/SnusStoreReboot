import { SEARCH_SNUS_INPUT } from "../utils/actionTypes"

type basket = {
    type: string
    value?: string
}

type input = {
    value: undefined | string
}

const initialState: input = {
    value: undefined
}

export const inputReducer = (state = initialState, action: basket) => {
    switch (action.type) {
        case SEARCH_SNUS_INPUT:
            return {...state, value: action.value}
        default:
            return state
    }
}