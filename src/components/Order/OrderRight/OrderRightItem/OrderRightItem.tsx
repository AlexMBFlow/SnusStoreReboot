import React from "react";
import { Row, Col } from "antd";
import "./OrderRightItem.css";

export const OrderRightItem = ({ snus }) => {
    return (
        <>
            <Row gutter={[16, 16]} className="order-right-item">
                <Col span={4}>
                    <img className="order-avatar" src={snus.avatar} alt="" />
                </Col>
                <Col className="order-name" span={4}>
                    <div className="order-name__wrap order-item">
                        <div className="order-name__inner">{snus.name}</div>
                    </div></Col>
                <Col className="order-saturation" span={4}>
                    <div className="order-saturation__wrap order-item">
                        <div className="order-saturation__inner">{snus.saturation}</div>
                    </div>
                </Col>
                <Col className="order-nicotine" span={4}>
                    <div className="order-nicotine__wrap order-item">
                        <div className="order-nicotine__inner">{snus.nicotine}</div>
                    </div>
                </Col>
                <Col className="order-quantity" span={4}>
                    <div className="order-quantity__wrap order-item">
                        <div className="order-quantity__inner">*количество*</div>
                    </div>
                </Col>
                <Col className="order-price" span={4}>
                    <div className="order-price__wrap order-item">
                        <div className="order-price__inner">{snus.price}₽</div>
                    </div>
                </Col>
            </Row>
        </>
    )
}