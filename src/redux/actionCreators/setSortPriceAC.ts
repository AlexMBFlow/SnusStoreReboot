import { SET_SORT_PRICE_SELECT }from "../utils/actionTypes";

export const setSortPriceAC = (sort) => {
    return {
        type: SET_SORT_PRICE_SELECT,
        sort: sort
    }
}