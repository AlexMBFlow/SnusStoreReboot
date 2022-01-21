import { SET_CHECK_ALL }from "../utils/actionTypes";

export const setCheckAllAC = (checkAll) => {
    return {
        type: SET_CHECK_ALL,
        checkAll: checkAll
    }
}