/* import { useDispatch } from "react-redux";
import { getLocalStorageAC } from "../../actionCreators/getLocalStorageAC/getLocalStorageAC";
import { bindActionCreators } from 'redux';
 */
export const getLocalStorage = () => {
    const result = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        result.push(key)
    }
    return result
}

/* export const useLocalStorage = () => {
    const dispatch = useDispatch()
    return bindActionCreators(getLocalStorageAC, dispatch)
} */