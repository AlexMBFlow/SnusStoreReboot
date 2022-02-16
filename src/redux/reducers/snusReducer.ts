import { snusStore } from "../snusStore/snusStore";
import type { Snus } from "../snusStore/snusType";

type snusStoreType = {
    snusItems: Snus[]
}

type snusReducerACType = {
    type: string
}

const initialState: snusStoreType = {...snusStore}

export const snusReducer = (state = initialState, action: snusReducerACType) => {
    switch (action.type) {
        case "ADD":
            return { ...state}
        case "SNUS_SEARCH_TEST":
            return { ...state}
        default:
            return state
    }
}

//P.S. на данный момент этот редюсер бесполезен, он ничего не делает, только расшаривает объект со всем снюсом