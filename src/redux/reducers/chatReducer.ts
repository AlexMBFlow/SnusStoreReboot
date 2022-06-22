import { NEW_MESSAGE } from "../utils/actionTypes"

interface IChatItem {
    body: string | null
    time: string | null
}

interface IChatItemAC {
    type: string
    payload: IChatItem
}

interface IChatState {
    chatMessage: IChatItem[]
}

const initialState: IChatState  = {
    chatMessage: [{
        body: "Hello!",
        time: "23"
    },
    {
        body: "Hi!",
        time: "23"
    },
    {
        body: "How are you?",
        time: "23"
    }]
}

export const chatReducer = (state = initialState, action: IChatItemAC) => {
    switch(action.type) {
        case NEW_MESSAGE:
            return {...state, chatMessage: [...state.chatMessage, {body: action.payload.body, time: action.payload.time}]}
        default:
            return state
    }
}