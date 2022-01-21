import { SET_SELECTED_PRICE_SLIDER }from "../utils/actionTypes";

export const priceSliderAC = (selectedPrice) => {
    return {
        type: SET_SELECTED_PRICE_SLIDER,
        selectedPrice: selectedPrice
    }
}