import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { snusReducer } from "./reducers/snusReducer";
import { inputReducer } from "../redux/reducers/inputReducer";
import { nicotineReducer } from "../redux/reducers/nicotineReducer";
import { priceReducer } from "../redux/reducers/priceReducer";
import { showBasket } from "../redux/reducers/showBasket";
import { basketReducer } from "../redux/reducers/basketReducer";
import { orderReducer } from './reducers/orderReducer';
import { userInfoReducer } from './reducers/userInfoReducer';

//import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

//import type { RootState, AppDispatch } from '../store'

const rootReduser = combineReducers({
    snusReducer,
    inputReducer,
    nicotineReducer,
    priceReducer,
    showBasket,
    basketReducer,
    orderReducer,
    userInfoReducer
})

export type RootState = ReturnType<typeof rootReduser>

export const store = createStore(rootReduser, composeWithDevTools())