import { SET_SORT_PRICE_SELECT } from "../../utils/actionTypes";
import type { setSortPrice } from "./setSortPriceTypes";

export const setSortPriceAC = (sort: string): setSortPrice => {
    return {
        type: SET_SORT_PRICE_SELECT,
        sort: sort
    }
}