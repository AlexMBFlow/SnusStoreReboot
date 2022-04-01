import React from 'react';
import { Button, message, Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { basketAddAC } from "../../../../redux/actionCreators/basketAC/basketAC";
import './SnusItem.css';

export const SnusItem = ({ snusProps }) => {
    const dispatch = useDispatch()

    const success = () => {
        //чтобы у итемов, которые лежат в корзине, были разные id, иначе
        //если добавить 2 одинаковых корвуса, и нажать удалить один,
        //удалятся все корвусы, потому что у них одинавые id, ведь проверка идет по id
        const snusPropsWithNewId = { ...snusProps, id: uuidv4() }
        dispatch(basketAddAC(snusPropsWithNewId))
        message.success('Добавлено в корзину', 0.85);
    };

    return (
        <div className='snus-item'>
            <div className='snus-item-inner'>
                <img className='snus-avatar-img'
                    style={{ width: 250 }}
                    src={snusProps.avatar}
                    alt={snusProps.name}
                    draggable={false}
                />
                <div className="snus-item__title description-center">{snusProps.name}</div>
                <div className="snus-item__taste description-center">{snusProps.taste}</div>
                <div className="snus-item__rate description-center"><Rate disabled defaultValue={snusProps.rate} /></div>
                <div className="snus-item__info">
                    <div className="snus-item__packs description-center">
                        <span className='gray'>Пакетиков: </span>{snusProps.packs} шт</div>
                    <div className="snus-item__packs description-center">
                        <span className='gray'>Никотин: </span>{snusProps.nicotine} мг
                    </div>
                </div>
                <div className="snus-item__price">{snusProps.price} ₽</div>
                <div className="snus-item__buy">
                    <div className="snus-item__buy-inner">
                        <Button onClick={success} type="default" shape='round'>
                            Купить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}