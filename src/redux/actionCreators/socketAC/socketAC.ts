import { CHAT_SEND_MESSAGE_TO_SOCKET } from "../../utils/actionTypes";
import type { IPayload, ISocketAC } from "./socketTypes";


export const sendSocketAC = (payload: IPayload): ISocketAC => {
    return {
        type: CHAT_SEND_MESSAGE_TO_SOCKET,
        payload
    }
}