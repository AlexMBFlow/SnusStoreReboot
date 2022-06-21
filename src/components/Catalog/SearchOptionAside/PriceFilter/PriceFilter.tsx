import React, { FC } from 'react';
import { Select, Slider, Divider } from 'antd';
import { useTypedSelector } from "../../../../redux/hooks/useTypedSelector";
import { useActions } from '../../../../redux/hooks/useActions';
import './PriceFilter.css';

export const PriceFilter: FC = () => {
    const { setSortPriceAC, priceSliderAC} = useActions()
    const {defaultPrice} = useTypedSelector(state => state.priceReducer)
    const {min} = useTypedSelector(state => state.priceReducer)
    const {max} = useTypedSelector(state => state.priceReducer)

    const handleChangeSelect = sort => {
        setSortPriceAC(sort)
    }

    const handleChangeSliderDebounce = (callback, ms) => {
        let timeout;
        return function() {
            const fnCall = () => callback.apply(this, arguments)

            clearTimeout(timeout)

            timeout = setTimeout(fnCall, ms)
        }
    }

    let handleChangeSlider = value => {
        priceSliderAC(value)
    }

    handleChangeSlider = handleChangeSliderDebounce(handleChangeSlider, 370)

    const { Option, OptGroup } = Select;

    return (
        <div className='price-filter aside-item'>
            <div className="price-filter-options">
                <Divider className="price-filter-options__price" orientation="left">ЦЕНА</Divider>
                <div className="price-filter-options-wrapper">
                    <span>Сортировать: </span>
                    <Select className='price-filter-options-select'
                    defaultValue="Выбрать"
                    style={{ width: 200 }}
                    onChange={handleChangeSelect}
                    >
                        <OptGroup label="По цене">
                            <Option value="mostPrice">Сначала дорогие</Option>
                            <Option value="smallestPrice">Сначала дешевые</Option>
                        </OptGroup>
                    </Select>
                </div>
            </div>
            <div className="price-filter-slider">
                <span>Выберите желаемый диапазон цены</span>
                <Slider onChange={handleChangeSlider} range={{ draggableTrack: true }} min={min} max={max} 
                defaultValue={defaultPrice} />
            </div>
        </div>
    )
}