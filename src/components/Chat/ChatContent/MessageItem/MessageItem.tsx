import React, { FC } from "react";
import { MessageContainer, UserName, MessageBody } from './style';

interface IMessageItemProps {
    body: string
    time: string
}

export const MessageItem: FC<IMessageItemProps> = ({ body, time }) => {
    return (
        <>
            <MessageContainer>
                <UserName>
                    {time} Аноним:
                </UserName>
                <MessageBody>
                    {body}
                </MessageBody>
            </MessageContainer>
        </>
    )
}