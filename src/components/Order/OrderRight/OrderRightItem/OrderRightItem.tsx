import React from "react";
import { Row, Col } from "antd";
import "./OrderRightItem.css";

/* type OrderRightItemType = {
    name: string;
    taste: string;
    packs: number;
    nicotine: number
    saturation: string;
    price: number
    avatar: string;
    id: number | string;
} */

export const OrderRightItem = ({snus}) => {
    console.log("snusBasket в OrderRightItem")
    console.log(snus)
    //debugger
    return (
        <>
            <Row gutter={[16, 16]} className="order-right">
                <Col style={{
                    backgroundImage: `url(${snus.avatar})`
                }} className="order-avatar" span={4}></Col>
                <Col className="order-name" span={4}>{snus.name}</Col>
                <Col className="order-saturation" span={4}>{snus.saturation}</Col>
                <Col className="order-nicotine" span={4}>{snus.nicotine}</Col>
                <Col className="order-quantity" span={4}>*количество*</Col>
                <Col className="order-price" span={4}>{snus.price}</Col>
            </Row>
        </>
    )
}