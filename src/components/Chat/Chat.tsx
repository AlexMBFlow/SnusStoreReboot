import React, { useState, MouseEvent, FC } from "react";
import { WechatOutlined } from '@ant-design/icons';
import { ChatContent } from "./ChatContent/ChatContent";
import "./Chat.css";

let flag = false
export const Chat: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isIcoActive, setIsIcoActive] = useState({color: "black"})    

    const clickHandler = (e: MouseEvent): void => {
        setIsOpen(isOpen => !isOpen)
        flag ? setIsIcoActive({color: "black"}) : setIsIcoActive({color: "#0BB5F3"})
        flag = !flag
    }

    return (
        <div className="chat-wrap">
            <WechatOutlined style={isIcoActive} className="chat-ico" onClick={clickHandler} />
            {isOpen && <ChatContent />}
        </div>
    )
}