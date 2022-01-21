import { snusStore } from "../snusStore/snusStore";

const initialState = {...snusStore}

export const snusReducer = (state = initialState, action) => {
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