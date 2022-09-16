
export const socketAC = (payload) => {
    return {
        type: "SEND_MESSAGE",
        payload
    }
}