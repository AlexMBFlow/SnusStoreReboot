
interface IChatItemPayload {
    time: string
    body: string
}

export interface IChatItemAC {
    type: string
    payload: IChatItemPayload
}