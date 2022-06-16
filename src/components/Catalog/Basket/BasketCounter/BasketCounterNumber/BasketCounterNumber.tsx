import React, {FC} from "react";
import "./BasketCounterNumber.css";

interface ICounter {
    counter: number
}

export const BasketCounterNumber: FC<ICounter> = (props: ICounter): React.ReactElement<HTMLDivElement> => {
    return (
        <>
            <div className="basket-counter-wrap">
                <div className="basket-counter">{props.counter}</div>
            </div>
        </>
    )
}