import React, { useState, useEffect } from "react";
import { Input, message } from 'antd';
import { SendOutlined } from "@ant-design/icons";
import moment from 'moment';
import { useActions } from "../../../../redux/hooks/useActions";
import { sendChatMessage } from '../../../../api/services/sendMessage';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';

interface IChangeInputValue<T = string> {
    target: {
        value: React.SetStateAction<T>;
    }
}

export const ChatInput = () => {
    const ws: WebSocket = new WebSocket("ws://localhost:8080/chat");
    useEffect(() => {
        const openHandler = (event: Event) => {
            console.log("open", event)
        }

        const messageHandler = (event: MessageEvent) => {
            const message = JSON.parse(event.data)
            const { text, date } = message
            addChatItemAC(text, date)
            console.log(message)
        }
        ws.addEventListener("open", openHandler)

        ws.addEventListener("message", messageHandler)
        return () => {
            ws.removeEventListener("open", openHandler)
            ws.removeEventListener("message", messageHandler)
        }
    }, [])

    const [inputValue, setInputValue] = useState("")
    const { sendSocketAC, addChatItemAC } = useActions()
    const changeInputValue = (e: IChangeInputValue<string>): void => {
        setInputValue(e.target.value)
    }

    const sendMsgInChat = (): void => {
        ws.send(JSON.stringify({
            text: inputValue,
            date: moment().format('LT')
        }))
/*         sendSocketAC({
            text: inputValue,
            date: moment().format('LT')
        }) */

        if (!inputValue || (inputValue.trim().length === 0)) return
        if (inputValue.length > 120) {
            message.warning(`Максимальная длина сообщения 120 символов, у вас ${inputValue.length}`);
            return
        }

/*         sendChatMessage({
            text: inputValue,
            date: moment().format('LT')
        }) */

        //addChatItemAC(inputValue, moment().format('LT'))
        setInputValue("")
    }

    const enterHandler = (e: { keyCode: number; }): void => {
        if (e.keyCode === 13) {
            sendMsgInChat()
        }
    }

    return (
        <>
            <Input onKeyDown={enterHandler} value={inputValue} onChange={changeInputValue} suffix={<SendOutlined onClick={sendMsgInChat} style={{
                cursor: "pointer",
                userSelect: "none"
            }} />} />
        </>
    )
}