import { createSocketConnection } from '../../api/socket/index';
import { CHAT_SEND_MESSAGE_TO_SOCKET } from '../utils/actionTypes';
const ws = createSocketConnection();

interface IInitialState {
    ws: WebSocket
    addEventListener?: any
    removeEventListener?: any
}
/* interface IInitialState {
    ws: WebSocket
    addEventListener?: (event: string, callback: Function) => void
    removeEventListener?: (event: string, callback: Function) => void
} */

const initialState: IInitialState = {
    ws: ws
}

interface IPayload {
    text: string
    date: string
}

interface ISocketAC {
    type: string
    payload: IPayload
}

export const socketReducer = (state = initialState, action: ISocketAC) => {
    switch (action.type) {
        case "CHAT_SEND_MESSAGE_TO_SOCKET2232323":
            ws.send(JSON.stringify(action.payload))
            return null
        default:
            return state
    }
}