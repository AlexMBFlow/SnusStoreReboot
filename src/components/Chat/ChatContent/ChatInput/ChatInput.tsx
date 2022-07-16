import React, { useState } from "react";
import { Input } from 'antd';
import moment from 'moment';
import { SendOutlined } from "@ant-design/icons";
import { useActions } from "../../../../redux/hooks/useActions";

export const ChatInput = () => {
    const [inputValue, setInputValue] = useState("")
    const { addChatItemAC } = useActions()
    const chagneInputValue = e => {
        setInputValue(e.target.value)
    }
    const sendMsgInChat = () => {
        addChatItemAC(inputValue, moment().format('LT'))
        setInputValue("")
    }
    return (
        <>
            <Input value={inputValue} onChange={chagneInputValue} suffix={<SendOutlined onClick={sendMsgInChat} style={{
                cursor: "pointer"
            }} />} />
        </>
    )
}