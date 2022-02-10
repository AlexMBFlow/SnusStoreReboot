import { SET_SHOW_BASKET } from "../utils/actionTypes";

type defaultState = {
    isModalVisible: boolean
}

type basketAction = {
    type: string
    isModalVisible?: boolean
}

const initialState: defaultState = {
    isModalVisible: false
}

export const showBasket = (state = initialState, action: basketAction) => {
    switch (action.type) {
        case SET_SHOW_BASKET:
            return {...state, isModalVisible: action.isModalVisible}
        default:
            return state
    }
}