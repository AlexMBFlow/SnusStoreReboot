import React from "react";
import { BasketCounterNumber } from "./BasketCounterNumber/BasketCounterNumber";
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';


export const BasketCounter = (): React.ReactElement<HTMLDivElement, any> => {
    const { snusBasket } = useTypedSelector(state => state.basketReducer)
    return (
        <>
            {!!snusBasket.length && <BasketCounterNumber counter={snusBasket.length} />}
        </>
    )
}