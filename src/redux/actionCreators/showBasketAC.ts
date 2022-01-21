import { SET_SHOW_BASKET }from "../utils/actionTypes";

export const showBasketAC = (value) => {
    return {
        type: SET_SHOW_BASKET,
        isModalVisible: value
    }
}