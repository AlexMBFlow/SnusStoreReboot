import { NEW_CHAT_MESSAGE } from "../../utils/actionTypes";
import type { IChatItemAC } from './addChatItemACTypes';

export const addChatItemAC = (body: string, time: string): IChatItemAC  => {
    //debugger
    return {
        type: NEW_CHAT_MESSAGE,
        payload: {
            body,
            time
        }
    }
}