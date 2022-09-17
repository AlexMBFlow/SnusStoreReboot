import React, { useState, useEffect } from "react";
import { Input, message } from 'antd';
import { SendOutlined } from "@ant-design/icons";
import moment from 'moment';
import { useActions } from "../../../../redux/hooks/useActions";

interface IChangeInputValue<T = string> {
    target: {
        value: React.SetStateAction<T>;
    }
}

const ws: WebSocket = new WebSocket("ws://localhost:8080/chat");

export const ChatInput = () => {
    const [inputValue, setInputValue] = useState("")
    const { addChatItemAC } = useActions()
    const changeInputValue = (e: IChangeInputValue<string>): void => {
        setInputValue(e.target.value)
    }

    const sendMsgInChat = (): void => {
        if (!inputValue || (inputValue.trim().length === 0)) return
        if (inputValue.length > 120) {
            message.warning(`Максимальная длина сообщения 120 символов, у вас ${inputValue.length}`);
            return
        }

        try {
            ws.send(JSON.stringify({
                text: inputValue,
                date: moment().format('LT')
            }))
        } catch (e) {
            message.error(`Не удалось отправить сообщение в чат`);
        }
    }

    const enterHandler = (e: { keyCode: number; }): void => {
        if (e.keyCode === 13) {
            sendMsgInChat()
        }
    }

    useEffect(() => {
        const openHandler = (event: Event): void => {
            console.log("open", event)
        }

        const messageHandler = (event: MessageEvent): void => {
            const message = JSON.parse(event.data)
            const { text, date } = message
            addChatItemAC(text, date)
            console.log(`send message}`)            
            setInputValue("")
        }

        const errorHandler = () => {
            message.error(`В данный момент чат недоступен`);
        }

        ws.addEventListener("open", openHandler)
        ws.addEventListener("message", messageHandler)
        ws.addEventListener("error", errorHandler)
        return () => {
            ws.removeEventListener("open", openHandler)
            ws.removeEventListener("message", messageHandler)
            ws.removeEventListener("error", errorHandler)
        }
    }, [])
    return (
        <>
            <Input onKeyDown={enterHandler} value={inputValue} onChange={changeInputValue} suffix={<SendOutlined onClick={sendMsgInChat} style={{
                cursor: "pointer",
                userSelect: "none"
            }} />} />
        </>
    )
}