import React, { FC } from "react";
import { MessageContainer, MessageTime, MessageBody } from './style';

interface IMessageItemProps {
    body: string
    time: string
}

export const MessageItem: FC<IMessageItemProps> = ({ body, time }) => {
    return (
        <>
            <MessageContainer>
                <MessageTime>
                    
                </MessageTime>
                <MessageBody>
                {time} {body}
                </MessageBody>
            </MessageContainer>
        </>
    )
}