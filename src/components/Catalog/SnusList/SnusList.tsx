import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { SnusItem } from './SnusItem/SnusItem';
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import { getSnus } from '../../../api/getSnus';
import { useDispatch } from 'react-redux';
import { sendOrder } from "../../../api/sendOrder";
import './SnusList.css';

export const SnusList = () => {
    const dispatch = useDispatch()
    useEffect( () => {
        sendOrder()
        async function aaa() {
            dispatch( await getSnus())
        }
        aaa()
    }, [])
    const { snusItems } = useTypedSelector(state => state.snusReducer);
    const { value } = useTypedSelector(state => state.inputReducer);
    const { defaultCheckedList } = useTypedSelector(state => state.nicotineReducer); //selectedPrice
    const { selectedPrice } = useTypedSelector(state => state.priceReducer);
    const { sort } = useTypedSelector(state => state.priceReducer);

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