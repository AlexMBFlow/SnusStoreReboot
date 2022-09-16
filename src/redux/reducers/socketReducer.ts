import { createSocketConnection } from '../../api/socket/index';
const ws = createSocketConnection();

const initialState = {
    ws: ws
}

export const socketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            ws.send(JSON.stringify(action.payload))
            return null
        default:
            return state
    }
}