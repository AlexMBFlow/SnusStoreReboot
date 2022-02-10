import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as basketAC from "../actionCreators/basketAC/basketAC"
import * as checkedListAC from "../actionCreators/checkedListAC/checkedListAC"
import * as inputAC from "../actionCreators/inputAC/inputAC"
import * as priceSliderAC from "../actionCreators/priceSliderAC/priceSliderAC"
import * as setCheckAllAC from "../actionCreators/setCheckAllAC/setCheckAllAC"
import * as setIndeterminateAC from "../actionCreators/setIndeterminateAC/setIndeterminateAC"
import * as setSortPriceAC from "../actionCreators/setSortPriceAC/setSortPriceAC"
import * as showBasketAC from "../actionCreators/showBasketAC/showBasketAC"

/* export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
 */

export const useBasketAC = () => {
    const dispatch = useDispatch()
    return bindActionCreators(basketAC, dispatch)
}

export const useCheckedListAC = () => {
    const dispatch = useDispatch()
    return bindActionCreators(checkedListAC, dispatch)
}

export const useInputAC = () => {
    const dispatch = useDispatch()
    return bindActionCreators(inputAC, dispatch)
}

export const usePriceSliderACAC = () => {
    const dispatch = useDispatch()
    return bindActionCreators(priceSliderAC, dispatch)
}

export const useSetCheckAllAC = () => {
    const dispatch = useDispatch()
    return bindActionCreators(setCheckAllAC, dispatch)

}

export const useSetIndeterminateAC = () => {
    const dispatch = useDispatch()
    return bindActionCreators(setIndeterminateAC, dispatch)
}

export const useSetSortPriceAC = () => {
    const dispatch = useDispatch()
    return bindActionCreators(setSortPriceAC, dispatch)
}

export const useShowBasketAC = () => {
    const dispatch = useDispatch()
    return bindActionCreators(showBasketAC, dispatch)
}
