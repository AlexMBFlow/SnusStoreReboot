import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { showBasketAC } from "../../../redux/actionCreators/showBasketAC/showBasketAC";
import { BasketItem } from "./BasketItem/BasketItem";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import { getLocalStorage } from "../../../redux/utils/localStorageManager/getLocalStorage";
import { getLocalStorageAC } from "../../../redux/actionCreators/getLocalStorageAC/getLocalStorageAC";
import "./Basket.css";

export const Basket = () => {
    const dispatch = useDispatch()
/*     useEffect( () => {
        const storage = getLocalStorage()
        dispatch(getLocalStorageAC(storage))
    }) */
    let navigate = useNavigate()
    const { isModalVisible } = useTypedSelector(state => state.showBasket)
    const { snusBasket } = useTypedSelector(state => state.basketReducer)
    const { totalPrice } = useTypedSelector(state => state.basketReducer)
    const [onHover, setOnHover] = useState(false)

    const handleOnMouseEnter = () => {
        setOnHover(true)
    }

    const handleOnMouseLeave = () => {
        setOnHover(false)
    }

    const showModal = () => {
        dispatch(showBasketAC(true));
    };

    const handleOk = () => {
        dispatch(showBasketAC(false));
        navigate("../order");
    };

    const handleCancel = () => {
        dispatch(showBasketAC(false));
    };
    return (
        <div className="catalog-basket">
            <div className="basket-ico" onClick={showModal}>
                <ShoppingCartOutlined
                    className={
                        onHover ? "basket-hover" : ""
                    }
                    style={
                        onHover ? { color: "blue" } : { color: "black" }
                    }
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                />
            </div>

            <Modal okText={"Оформить заказ"} cancelText="Закрыть корзину" title="Корзина" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                {snusBasket.length === 0 ? ""
                    :
                    <div className="basket-item-info">
                        <div className="basket-item-avatar-info">Вид:</div>
                        <div className="basket-item-name-info">Название:</div>
                        <div className="basket-item-taste-info">Вкус:</div>
                        <div className="basket-item-price-info">Цена:</div>
                    </div>

                }
                {snusBasket.length === 0 ?
                    <div className="basket-empty">Корзина пуста &#128546;</div>
                    :
                    snusBasket.map(snusBasket => (
                        <BasketItem snusBasket={snusBasket} key={uuidv4()} />
                    ))
                }
                {snusBasket.length === 0 ?
                    ""
                    :
                    <div className="basket-total-price">
                        <div className="basket-total-price-inner">
                            {totalPrice} ₽
                        </div>
                        <div className="basket-total-price-number">Итого:
                        </div>
                    </div>}
            </Modal>
        </div>
    )
}