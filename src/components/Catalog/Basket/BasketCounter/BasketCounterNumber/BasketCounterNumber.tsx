import React from "react";
import "./BasketCounterNumber.css";

export const BasketCounterNumber = (props) => {
    return (
        <>
            <div className="basket-counter-wrap">
                <div className="basket-counter">{props.counter}</div>
            </div>
        </>
    )
}