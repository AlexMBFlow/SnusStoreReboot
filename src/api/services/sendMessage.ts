/* interface AxiosResponse<T = unknown>  {
    data: T;
    status: number;
    statusText: string;
    headers: unknown;
    config: unknown;
    request?: unknown;
} */

interface IMessageItem {
    text: string;
    date: string;
}

/* export const sendChatMessage = async (messageItem: IMessageItem): Promise<AxiosResponse<string>> => {
    return await axios.post<IMessageItem, AxiosResponse<string>>("http://localhost:5000/api/chat", JSON.stringify({
        method: "POST",
        data: JSON.stringify(messageItem)
    }), {
        headers: {
            "Content-type": "application/json"
        }
    }).then (res => res)
} */

export const sendChatMessage = async (messageItem: IMessageItem) => {

}