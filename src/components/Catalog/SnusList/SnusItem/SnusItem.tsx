import React, { FC, useRef } from 'react';
import { Button, message, Rate } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useActions } from '../../../../redux/hooks/useActions';
import './SnusItem.css';

type TSnusItem = {
    snusProps: {
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

export const SnusItem: FC<TSnusItem> = ({ snusProps }) => {
    //const dispatch = useDispatch<AppDispatch>()
    const {basketAddAC} = useActions()
    const buttonRef = useRef<HTMLDivElement | null>(null!)

    const success = () => {
        //чтобы у итемов, которые лежат в корзине, были разные id, иначе
        //если добавить 2 одинаковых корвуса, и нажать удалить один,
        //удалятся все корвусы, потому что у них одинавые id, ведь проверка идет по id
        const snusPropsWithNewId = { ...snusProps, _id: uuidv4() }
        basketAddAC(snusPropsWithNewId)
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
                <div className="snus-item__rate description-center">
                    <Rate disabled defaultValue={snusProps.rate} />
                </div>
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
                        <Button ref={buttonRef} onClick={success} type="default" shape='round'>
                            Купить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}