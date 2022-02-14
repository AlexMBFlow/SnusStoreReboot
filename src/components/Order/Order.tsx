import React from "react";
import { Row, Col } from 'antd';
import { OrderLeft } from './OrderLeft/OrderLeft';
import { OrderRight } from './OrderRight/OrderRight';
import "./Order.css";

export const Order = () => {
    return (
        <>
        <Row>
            <Col span={8}>
            <OrderLeft/>
            </Col>
            <Col span={16}>
            <OrderRight/>
            </Col>
        </Row>
        </>
    );
}