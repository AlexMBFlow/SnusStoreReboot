
import React, { FC } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useActions } from '../../../../redux/hooks/useActions';
import "./BasketItem.css";

type TSnusItem = {
    snusBasket: {
    name: string
    taste: string
    packs: number
    nicotine: number
    saturation: string
    price: number
    avatar: string
    rate: number
    _id: any
    }
}

export const BasketItem: FC<TSnusItem>= ({ snusBasket }) => {
    const { basketRemoveAC } = useActions()
    
    const removeItem = () => {
        message.error('Удалено из корзины', 0.85)
        basketRemoveAC(snusBasket)
    }

    return (
        <div className='basket-item'>
            <div className="basket-item-inner">
                <div className="basket-item-avatar" style={{ backgroundImage: `url(${snusBasket.avatar})` }}></div>
                <div className="basket-item-title">{snusBasket.name}</div>
                <div className="basket-item-taste">{snusBasket.taste}</div>
                <div className="basket-item-price">{snusBasket.price}₽</div>
                <div onClick={removeItem} className='basket-item-remove'><CloseOutlined style={{ color: "red" }} /></div>
            </div>
        </div>
    )
}