import { ORDER_IS_LOADING, ORDER_IS_DISABLED, TEXT_IS_ORDERED } from "../../utils/actionTypes";
import type { isLoading, isDisabled, setButtonTextType } from "./orderTypes";

export const isLoadingAC = (isLoading: boolean): isLoading => {
    return {
        type: ORDER_IS_LOADING,
        isLoading: isLoading
    }
}

export const isDisabledAC = (isDisabled: boolean): isDisabled => {
    return {
        type: ORDER_IS_DISABLED,
        isDisabled: isDisabled
    }
}

export const setButtonTextAC = (text: string): setButtonTextType => {
    return {
        type: TEXT_IS_ORDERED,
        text: text
    }
}