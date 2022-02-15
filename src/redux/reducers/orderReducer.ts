import { ORDER_FETCHING } from "../utils/actionTypes";

type stepStatus = "process" | "finish" | "wait"

type stepColor = "#06d44b" | "#1890ff" | "#bfbfbf"


type stepItem = {
    status: stepStatus
    color: stepColor
}

type defaultState = {
    isLoading: boolean
    step: stepItem[]
}

type orderAction = {
    type: string
    isLoading?: boolean
    step?: stepItem
}

const initialState: defaultState = {
    isLoading: false,
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
        case ORDER_FETCHING:
            return { ...state, isLoading: action.isLoading }
        case "USER_IS_ORDERED":
            return { ...state, step: [{status: action.step[0].status, color: action.step[0].color}, {status: action.step[1].status, color: action.step[1].color}]}
        default:
            return state
    }
}