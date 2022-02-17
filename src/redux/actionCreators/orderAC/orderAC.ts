import { ORDER_IS_LOADING, ORDER_IS_DISABLED } from "../../utils/actionTypes";
import type { isLoading, isDisabled } from "./orderTypes";

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