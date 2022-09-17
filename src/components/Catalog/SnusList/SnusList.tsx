import React, { FC, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux"
import { AppDispatch } from '../../../redux/store';
import { SnusItem } from './SnusItem/SnusItem';
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import { getSnus } from '../../../api/getSnus';
import { Spin } from 'antd';
//import { useActions } from '../../../redux/hooks/useActions';
//import { useThunkDispatch } from '../../../redux/hooks/useThunkDispatch';
import './SnusList.css';


export const SnusList: FC = () => {
    const getSnusListData = async (dispatch) => {
        dispatch(await getSnus())
    }
    const dispatch = useDispatch<AppDispatch>()
    //TODO
    //const {  } = useThunkDispatch()
    //const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        getSnusListData(dispatch)
    }, [dispatch])

    const { snusItems } = useTypedSelector(state => state.snusReducer);
    const { value } = useTypedSelector(state => state.inputReducer);
    const { defaultCheckedList } = useTypedSelector(state => state.nicotineReducer); //selectedPrice
    const { selectedPrice } = useTypedSelector(state => state.priceReducer);
    const { sort } = useTypedSelector(state => state.priceReducer);
    const filteredPrice = snusItems.filter(el => { // фильтруем массив объектов со всем снюсом по значениям из слайдера
        if (el.price >= selectedPrice[0] && el.price <= selectedPrice[1]) {
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
        <div className={`snus-list ${snusItems.length === 0 ? "content-loading" : ""}`}>
            {snusItems.length === 0 ?
                <Spin style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} /> :

                inputFiltered.map(snus => (
                    <SnusItem snusProps={snus} key={uuidv4()} />
                ))}
        </div>
    )
}