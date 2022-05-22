import { USER_ORDER_FIRST_NAME, USER_ORDER_SECOND_NAME, USER_ORDER_PHONE,
    USER_ORDER_COUNTRY, USER_ORDER_CITY, USER_ORDER_AREA,
    USER_ORDER_EMAIL, USER_ORDER_SOME_INFO } from "../utils/actionTypes";

type state = {
    firstName: null | string
    secondName: null | string
    phone: null | number
    country: null | string
    city: null | string
    area: null | string
    email: null | string
    someInfo: null | string
}

type actionFromInput = {
    type: string
    firstName?: string
    secondName?: string
    phone?: number
    country?: string
    city?: string
    area?: string
    email?: string
    someInfo?: string
}

const initialState: state = {
    firstName: null,
    secondName: null,
    phone: null,
    country: null,
    city: null,
    area: null,
    email: null,
    someInfo: null,
}

export const userInfoReducer = (state = initialState, action: actionFromInput) => {
    switch (action.type) {
        case USER_ORDER_FIRST_NAME:
            return {...state, firstName: action.firstName}
        case USER_ORDER_SECOND_NAME:
            return {...state, secondName: action.secondName}
        case USER_ORDER_PHONE:
            return {...state, phone: action.phone}
        case USER_ORDER_COUNTRY:
            return {...state, country: action.country}
        case USER_ORDER_CITY:
            return {...state, city: action.city}
        case USER_ORDER_AREA:
            return {...state, area: action.area}
        case USER_ORDER_EMAIL:
            return {...state, email: action.email}
        case USER_ORDER_SOME_INFO:
            return {...state, someInfo: action.someInfo}
        default:
            return state
    }
} 