import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatContainer, ChatBoxHeader, ChatBoxBody, ChatInputBox, ChatBackground, MessagesContainer } from './style';
import { MessageItem } from "./MessageItem/MessageItem";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import 'moment/locale/ru.js';
import { ChatInput } from './ChatInput/ChatInput';


export const ChatContent = () => {
    const { chatMessage } = useTypedSelector(state => state.chatReducer)

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
                <ChatInput />
            </ChatInputBox>
        </ChatContainer>
    )
}