export const createSocketConnection = (): WebSocket => {
    const ws: WebSocket = new WebSocket("ws://localhost:8080/chat");

/*     ws.addEventListener("open", (event: Event) => {
        console.log("open", event)
    })

    ws.addEventListener("message", (event: MessageEvent) => {
        const message = JSON.parse(event.data)

        console.log(message)
    }) */

    return ws
}