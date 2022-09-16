import React, { useState } from "react";
import { Input, message } from 'antd';
import { SendOutlined } from "@ant-design/icons";
import moment from 'moment';
import { useActions } from "../../../../redux/hooks/useActions";
import { sendChatMessage } from '../../../../api/services/sendMessage';


export const ChatInput = () => {
    const [inputValue, setInputValue] = useState("")
    const { addChatItemAC, socketAC } = useActions()
    const chagneInputValue = e => {
        setInputValue(e.target.value)
    }
    
    const sendMsgInChat = () => {
        socketAC({
            text: inputValue,
            date: moment().format('LT')
        })
        if (!inputValue || (inputValue.trim().length === 0)) return
        if(inputValue.length > 120) {
            message.warning(`Максимальная длина сообщения 120 символов, у вас ${inputValue.length}`);
            return
        }

        sendChatMessage({
            text: inputValue,
            date: moment().format('LT')
        })

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