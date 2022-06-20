import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { showBasketAC } from "../actionCreators/showBasketAC/showBasketAC";

const basketActions = {
    showBasketAC
}

export const useActions = () => {
    const dispatch = useDispatch()
    
    return bindActionCreators(basketActions, dispatch)
}

