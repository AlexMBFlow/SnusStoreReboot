export interface IPayload {
    text: string
    date: string
}

export interface ISocketAC {
    type: string
    payload: IPayload
}