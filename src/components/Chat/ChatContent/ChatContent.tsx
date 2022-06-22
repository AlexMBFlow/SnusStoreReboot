import React, { useState } from "react";
import moment from 'moment';
import { Input } from 'antd';
import { SendOutlined } from "@ant-design/icons"
import { v4 as uuidv4 } from "uuid";
import { ChatContainer, ChatBoxHeader, ChatBoxBody, ChatInputBox, ChatBackground, MessagesContainer } from './style';
import { MessageItem } from "./MessageItem/MessageItem";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import { useActions } from '../../../redux/hooks/useActions';
import 'moment/locale/ru.js';

/* const msgs = [
    {
        body: "Hello!",
        time: moment().format('LT')
    },
    {
        body: "Hi!",
        time: moment().format('LT')
    },
    {
        body: "How are you?",
        time: moment().format('LT')
    }
] */

export const ChatContent = () => {
    const [inputValue, setInputValue] = useState("")
    const { chatMessage } = useTypedSelector(state => state.chatReducer)
    const { addChatItemAC } = useActions()
    const sendMsgInChat = () => {
        addChatItemAC(inputValue, moment().format('LT'))
    }

    const chagneInputValue = e => {
        setInputValue(e.target.value)
    }
    return (
        <ChatContainer>
            <ChatBoxHeader>
                Чат пользователей
            </ChatBoxHeader>
            <ChatBoxBody>
                <ChatBackground />
                <MessagesContainer>
                    {chatMessage.map(({ body, time }) => <MessageItem time={time} body={body} key={uuidv4()} />)}
                </MessagesContainer>
            </ChatBoxBody>
            <ChatInputBox>
                <Input value={inputValue} onChange={chagneInputValue} suffix={<SendOutlined onClick={sendMsgInChat} style={{
                    cursor: "pointer"
                }} />} />
            </ChatInputBox>
        </ChatContainer>
    )
}