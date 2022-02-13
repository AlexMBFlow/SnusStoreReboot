import { ORDER_FETCHING } from "../../utils/actionTypes";
import type { Order } from "./orderTypes";

export const orderAC = (isLoading: boolean): Order => {
    return {
        type: ORDER_FETCHING,
        isLoading: isLoading
    }
}