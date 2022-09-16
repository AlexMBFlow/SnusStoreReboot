export const createSocketConnection = (): WebSocket => {
    const ws = new WebSocket("ws://localhost:8080/chat");
    return ws
}