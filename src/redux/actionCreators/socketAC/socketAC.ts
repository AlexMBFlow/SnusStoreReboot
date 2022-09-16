import { CHAT_SEND_MESSAGE } from "../../utils/actionTypes";
import type {IPayload, ISocketAC} from "./socketTypes";


export const socketAC = (payload: IPayload): ISocketAC => {
    return {
        type: CHAT_SEND_MESSAGE,
        payload
    }
}