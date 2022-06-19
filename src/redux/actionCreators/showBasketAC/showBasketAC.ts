import { SET_SHOW_BASKET } from "../../utils/actionTypes";
import { showBasket } from "./showBasketTypes";



export const showBasketAC = (value): showBasket => {
    return {
        type: SET_SHOW_BASKET,
        isBasketVisible: value
    }
}