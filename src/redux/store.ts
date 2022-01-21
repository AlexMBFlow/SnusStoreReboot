import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { snusReducer } from "./reducers/snusReducer";
import { inputReducer } from "../redux/reducers/inputReducer";
import { nicotineReducer } from "../redux/reducers/nicotineReducer";
import { priceReducer } from "../redux/reducers/priceReducer";
import { showBasket }from "../redux/reducers/showBasket";
import { basketReducer }from "../redux/reducers/basketReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'



const rootReduser = combineReducers({
    snusReducer,
    inputReducer,
    nicotineReducer,
    priceReducer,
    showBasket,
    basketReducer
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const store = createStore(rootReduser, composeWithDevTools())