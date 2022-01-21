import { SET_SHOW_BASKET } from "../utils/actionTypes";

const initialState = {
    isModalVisible: false
}

export const showBasket = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_BASKET:
            return {...state, isModalVisible: action.isModalVisible}
        default:
            return state
    }
}