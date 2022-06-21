import React, { useState, useEffect, FC } from 'react';
import { Drawer, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { BasketItem } from "./BasketItem/BasketItem";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
/* import { getLocalStorage } from "../../../redux/utils/localStorageManager/getLocalStorage";
import { getLocalStorageAC } from "../../../redux/actionCreators/getLocalStorageAC/getLocalStorageAC"; */
import { BasketCounter } from './BasketCounter/BasketCounter';
import { Order } from '../../Order/Order';
import { useActions} from '../../../redux/hooks/useActions';
import "./Basket.css";

export const Basket: FC = () => {
    const { showBasketAC, showOrderAC } = useActions()
    const [onHover, setOnHover] = useState<boolean>(false)

    const { isBasketVisible, isOrderVisible } = useTypedSelector(state => state.showBasket)
    const { snusBasket } = useTypedSelector(state => state.basketReducer)
    const { totalPrice } = useTypedSelector(state => state.basketReducer)

    const showBasket = () => {
        showBasketAC(true)
    };

    const onClose = () => {
        showBasketAC(false)
    };

    const showChildrenDrawer = () => {
        showOrderAC(true)
    };

    const onChildrenDrawerClose = () => {
        showOrderAC(false)
    };

    const handleOnMouseEnter = () => {
        setOnHover(true)
    }

    const handleOnMouseLeave = () => {
        setOnHover(false)
    }

    return (
        <div className="catalog-basket">
            <div className="basket-ico" onClick={showBasket}>
                <BasketCounter />
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

            <Drawer
                title="Корзина"
                width={450}
                closable={false}
                onClose={onClose}
                visible={isBasketVisible}
            >
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
                        <div className="basket-total-price-wrap">
                            <div className="basket-total-price-text-wrap">
                                <div className="basket-total-price-text-inner">Итого:</div>
                            </div>
                            <div className="basket-total-price-number-wrap">
                                <div className="basket-total-price-number-inner"> {totalPrice} ₽</div>
                            </div>
                        </div>
                        <div className="basket-total-price-submit">
                            <Button type="primary" onClick={showChildrenDrawer}>
                                Оформить заказ
                            </Button>
                        </div>

                    </div>}

                <Drawer
                    title="Оформление заказа"
                    width={440}
                    closable={false}
                    onClose={onChildrenDrawerClose}
                    visible={isOrderVisible}
                >
                    <Order />
                </Drawer>
            </Drawer>
        </div>
    )
}