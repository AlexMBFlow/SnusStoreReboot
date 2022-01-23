import { SET_SELECTED_PRICE_SLIDER } from "../../utils/actionTypes";
import type { priceSlider } from "./priceSliderTypes";

export const priceSliderAC = (selectedPrice: number[]): priceSlider => {
    return {
        type: SET_SELECTED_PRICE_SLIDER,
        selectedPrice: selectedPrice
    }
}