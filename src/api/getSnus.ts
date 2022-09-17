import { AppDispatch } from '../redux/store';
import { GET_SNUS_FROM_FETCH } from "../redux/utils/actionTypes";

export const getSnus = async (): Promise<(dispatch: AppDispatch) => void> => {
    return dispatch => {
        fetch("http://localhost:5000/api/snus").then(res => res.json()).then(json => {
            const parse = JSON.parse(json)
            return dispatch({
                type: GET_SNUS_FROM_FETCH,
                data: parse
            })
        })
    }
}