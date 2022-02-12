
import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { basketRemoveAC } from "../../../../redux/actionCreators/basketAC/basketAC"
import "./BasketItem.css";

export const BasketItem = ({ snusBasket }) => {
    const dispatch = useDispatch();
    
    const removeItem = () => {
        message.error('Удалено из корзины', 0.85)
        dispatch(basketRemoveAC(snusBasket))
    }

    return (
        <div className='basket-item'>
            <div className="basket-item-inner">
                <div className="basket-item-avatar" style={{ backgroundImage: "url(https://snus-upi.ru/assets/images/products/641/small/66.jpg)" }}></div>
                <div className="basket-item-title">{snusBasket.name}</div>
                <div className="basket-item-taste">{snusBasket.taste}</div>
                <div className="basket-item-price">{snusBasket.price}₽</div>
                <div onClick={removeItem} className='basket-item-remove'><CloseOutlined style={{ color: "red" }} /></div>
            </div>
        </div>
    )
}