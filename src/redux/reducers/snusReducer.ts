import { GET_SNUS_FROM_FETCH } from "../utils/actionTypes";
import type { Snus } from "../snusStore/snusType";

type snusStoreType = {
    snusItems: Snus[]
}

type snusReducerACType = {
    type: string
    data: Snus[]
}

const initialState: snusStoreType = {
    snusItems: []
}

export const snusReducer = (state = initialState, action: snusReducerACType) => {
    switch (action.type) {
        case GET_SNUS_FROM_FETCH:
            return { ...state, snusItems: action.data}
        default:
            return state
    }
}