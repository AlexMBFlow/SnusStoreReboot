import React from "react";
import moment from 'moment';
import { Input } from 'antd';
import { SendOutlined } from "@ant-design/icons"
import {v4 as uuidv4} from "uuid";
import { ChatContainer, ChatBoxHeader, ChatBoxBody, ChatInputBox, ChatBackground, MessagesContainer } from './style';
import { MessageItem } from "./MessageItem/MessageItem";
import 'moment/locale/ru.js';

const msgs = [
    {body: "Hello!",
    time: moment().format('LT')
},
    {body: "Hi!",
    time: moment().format('LT')
},
    {body: "How are you?",
    time: moment().format('LT')
},
]

export const ChatContent = () => {
    return (
        <ChatContainer>
            <ChatBoxHeader>
                Чат пользователей
            </ChatBoxHeader>
            <ChatBoxBody>
                <ChatBackground />
                <MessagesContainer>
                    {msgs.map( ({body, time}) => <MessageItem time={time} body={body} key={uuidv4()}/>)}
                </MessagesContainer>
            </ChatBoxBody>
            <ChatInputBox>
                <Input suffix={<SendOutlined style={{
                    cursor: "pointer"
                }}/>} />
            </ChatInputBox>
        </ChatContainer>
    )
}