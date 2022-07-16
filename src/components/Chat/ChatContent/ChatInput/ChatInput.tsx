import React, { useState } from "react";
import { Input } from 'antd';
import { SendOutlined } from "@ant-design/icons";
import moment from 'moment';
import { useActions } from "../../../../redux/hooks/useActions";

export const ChatInput = () => {
    const [inputValue, setInputValue] = useState("")
    const { addChatItemAC } = useActions()
    const chagneInputValue = e => {
        setInputValue(e.target.value)
    }

    const sendMsgInChat = () => {
        if (!inputValue) return
        addChatItemAC(inputValue, moment().format('LT'))
        setInputValue("")
    }

    const enterHandler = e => {
        if (e.keyCode === 13) {
            sendMsgInChat()
        }
    }

    return (
        <>
            <Input onKeyDown={enterHandler} value={inputValue} onChange={chagneInputValue} suffix={<SendOutlined onClick={sendMsgInChat} style={{
                cursor: "pointer",
                userSelect: "none"
            }} />} />
        </>
    )
}