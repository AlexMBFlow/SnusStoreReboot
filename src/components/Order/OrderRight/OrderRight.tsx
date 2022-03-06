import React from "react";
import { Row, Col } from "antd";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import { OrderRightItem } from "./OrderRightItem/OrderRightItem";
import "./OrderRight.css";

export const OrderRight = () => {
    const { snusBasket } = useTypedSelector(state => state.basketReducer)
    return (
        <>
            {snusBasket.length === 0 ?
                <div className="empry-order">
                    Ваша корзина пуста
                </div>
                : <Row gutter={[16, 16]} className="order-right">
                    <Col span={4} > Вид: </Col>
                    <Col span={4} > Название: </Col>
                    <Col span={4} > Вкус: </Col>
                    <Col span={4} > Никотин: </Col>
                    <Col span={4} > Количество: </Col>
                    <Col span={4} > Цена: </Col>
                </Row>
            }
            {snusBasket.map(snus => (
                <OrderRightItem snus={snus} />
            ))}
        </>
    )
}