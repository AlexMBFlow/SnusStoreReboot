import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { SnusItem } from './SnusItem/SnusItem';
import './SnusList.css';

export const SnusList = () => {
    const { snusItems } = useSelector(state => state.snusReducer);
    const { value } = useSelector(state => state.inputReducer);
    const { defaultCheckedList } = useSelector(state => state.nicotineReducer); //selectedPrice
    const { selectedPrice } = useSelector(state => state.priceReducer);
    const { sort } = useSelector(state => state.priceReducer);

    const filteredPrice = snusItems.filter(el => { // фильтруем массив объектов со всем снюсом по значениям из слайдера
        if (el.price > selectedPrice[0] && el.price < selectedPrice[1]) {
            return true
        } else {
            return false
        }
    })

    const filteredNicotine = []
    filteredPrice.forEach(el => { // фильтруем массив объектов filteredPrice по значениям крепости
        defaultCheckedList.filter(elem => {
            if (!!defaultCheckedList.length && elem === el.saturation) {
                filteredNicotine.push(el)
                return true
            } else {
                return false
            }
        })
    })

    const filteredSortFunction = (array) => {
        const result = array.sort((a, b) => {
            if (!!array && sort === "mostPrice") {

                return b.price - a.price

            } else if (!!array && sort === "smallestPrice") {

                return a.price - b.price

            } else {
                return array
            }
        })
        return result
    }

    const filteredSort = filteredSortFunction(filteredNicotine) //фильтруем массив объектов filteredNicotine по значениям из Select

    const inputFiltered = filteredSort.filter(el => { //фильтруем массив объектов filteredSort по значениям из инпута(название и вкус)
        let regexp = new RegExp(value, "gi")
        if (!!value && value.length > 0) {
            return regexp.test(el.name) || regexp.test(el.taste)
        } else {
            return true
        }
    })

    return (
        <div className='snus-list'>
            {inputFiltered.map(snus => (
                <SnusItem snusProps={snus} key={uuidv4()} />
            ))}
        </div>
    )
}