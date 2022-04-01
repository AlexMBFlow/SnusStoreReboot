//import { snusStore } from "../snusStore/snusStore";
import { GET_SNUS_FROM_FETCH } from "../utils/actionTypes";
import type { Snus } from "../snusStore/snusType";

type snusStoreType = {
    snusItems: Snus[]
}

type snusReducerACType = {
    type: string
}

//const initialState: snusStoreType = {...snusStore}
const initialState: snusStoreType = {
    snusItems: []
}

export const snusReducer = (state = initialState, action/* : snusReducerACType */) => {
    switch (action.type) {
        case GET_SNUS_FROM_FETCH:
            return { ...state, snusItems: action.data.snusItems}
        case "SNUS_SEARCH_TEST":
            return { ...state}
        default:
            return state
    }
}

//P.S. на данный момент этот редюсер бесполезен, он ничего не делает, только расшаривает объект со всем снюсом