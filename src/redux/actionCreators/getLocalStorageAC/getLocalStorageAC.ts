import { SET_ON_BASKET_FROM_LOCALSTORAGE } from "../../utils/actionTypes";
import type { LocalStorageTypes } from "./getLocalStorageTypes";

export const getLocalStorageAC = (storage: string[]): LocalStorageTypes  => {
    return {
        type: SET_ON_BASKET_FROM_LOCALSTORAGE,
        storage: storage
    }
}