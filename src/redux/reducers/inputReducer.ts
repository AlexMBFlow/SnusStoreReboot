import { SEARCH_SNUS_INPUT } from "../utils/actionTypes"

const initialState = {
    value: undefined
}

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SNUS_INPUT:
            return {...state, value: action.value}
        default:
            return state
    }
}