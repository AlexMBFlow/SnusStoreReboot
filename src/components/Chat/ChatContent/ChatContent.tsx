import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatContainer, ChatBoxHeader, ChatBoxBody, ChatInputBox, ChatBackground, MessagesContainer } from './style';
import { MessageItem } from "./MessageItem/MessageItem";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import { ChatInput } from './ChatInput/ChatInput';
import 'moment/locale/ru.js';


export const ChatContent = () => {
    const { chatMessage } = useTypedSelector(state => state.chatReducer)
    const chatBody = useRef(null)
    useEffect(() => {
        const scrollHeight = chatBody.current.scrollHeight
        const scrollTop = chatBody.current.scrollTop
        if ((scrollHeight - scrollTop) < 250) {
            chatBody.current.scrollTo({
                top: scrollHeight,
                behavior: 'smooth'
            })
        }
        
    }, [chatMessage])
    return (
        <ChatContainer>
            <ChatBoxHeader>
                Чат пользователей
            </ChatBoxHeader>
            <ChatBoxBody>
                <ChatBackground />
                <MessagesContainer ref={chatBody}>
                    {chatMessage.map(({ body, time }) => <MessageItem time={time} body={body} key={uuidv4()} />)}
                </MessagesContainer>
            </ChatBoxBody>
            <ChatInputBox>
                <ChatInput />
            </ChatInputBox>
        </ChatContainer>
    )
}