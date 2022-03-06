import { ORDER_IS_LOADING, ORDER_IS_DISABLED, USER_IS_ORDERED, TEXT_IS_ORDERED } from "../utils/actionTypes";

type stepStatus = "process" | "finish" | "wait"

type stepColor = "#06d44b" | "#1890ff" | "#bfbfbf"


type stepItem = {
    status: stepStatus
    color: stepColor
}

type defaultState = {
    isLoading: boolean
    isDisabled: boolean
    buttonText: string
    step: stepItem[]
}

type orderAction = {
    type: string
    isLoading?: boolean
    step?: stepItem
    isDisabled?: boolean
    text: string
}

const initialState: defaultState = {
    isLoading: false,
    isDisabled: false,
    buttonText: "Отправить",
    step: [
        { status: "process", color: "#06d44b" }, //pay
        { status: "wait", color: "#bfbfbf" }    //feedBack
    ],
}
//#1890ff синий
//#bfbfbf серый !!!!
//#06d44b green
export const orderReducer = (state = initialState, action: orderAction) => {
    switch (action.type) {
        case ORDER_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case ORDER_IS_DISABLED:
            return {...state, isDisabled: action.isDisabled}
        case USER_IS_ORDERED:
            return { ...state, step: [{status: action.step[0].status, color: action.step[0].color}, {status: action.step[1].status, color: action.step[1].color}]}
        case TEXT_IS_ORDERED:
                return {...state, buttonText: action.text}
            default:
            return state
    }
}