import React, { useState, MouseEvent, FC } from "react";
import { WechatOutlined } from '@ant-design/icons';
import { ChatContent } from "./ChatContent/ChatContent";
import "./Chat.css";


export const Chat: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const clickHandler = (e: MouseEvent): void => {
        setIsOpen(isOpen => !isOpen)
    }

    return (
        <div className="chat-wrap">
            <WechatOutlined onClick={clickHandler} />
            {isOpen && <ChatContent />}
        </div>
    )
}