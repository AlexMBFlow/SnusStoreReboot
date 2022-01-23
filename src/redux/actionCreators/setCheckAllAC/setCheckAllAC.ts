import { SET_CHECK_ALL } from "../../utils/actionTypes";
import type { setCheckAll } from "./setCheckAllTypes";

export const setCheckAllAC = (checkAll: boolean): setCheckAll => {
    return {
        type: SET_CHECK_ALL,
        checkAll: checkAll
    }
}