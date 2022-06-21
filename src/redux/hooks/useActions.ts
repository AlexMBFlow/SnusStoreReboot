import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { bindActionCreators } from "redux";
//import { showBasketAC } from "../actionCreators/showBasketAC/showBasketAC";
import { allAC } from '../actionCreators/allAC';



export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    return bindActionCreators(allAC, dispatch)
}