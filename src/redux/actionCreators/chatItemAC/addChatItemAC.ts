import { NEW_MESSAGE } from "../../utils/actionTypes";
import type { IChatItemAC } from './addChatItemACTypes';

export const addChatItemAC = (body: string, time: string): IChatItemAC  => {
    return {
        type: NEW_MESSAGE,
        payload: {
            body,
            time
        }
    }
}