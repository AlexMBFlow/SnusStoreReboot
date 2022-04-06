import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Result, Button, Divider } from "antd";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import { OrderRightItem } from "./OrderRightItem/OrderRightItem";
import { v4 as uuidv4 } from 'uuid';
import "./OrderRight.css";

export const OrderRight: FC = () => {
    let navigate = useNavigate()
    const { snusBasket } = useTypedSelector(state => state.basketReducer)
    const { totalPrice } = useTypedSelector(state => state.basketReducer)

    const openCatalog = () => {
        navigate("../catalog")
    }
    return (
        <>
            {snusBasket.length === 0 ?
                <div className="empry-order">
                    <Result
                        title="Ваша корзина пуста!"
                        extra={
                            <div>
                                <Button onClick={openCatalog}>Открыть корзину</Button>
                            </div>
                        }
                    />
                </div>
                : <Row gutter={[16, 16]} className="order-right-header">
                    <Col className="order-right-avatar order-right-item" span={4} > Вид: </Col>
                    <Col className="order-right-title order-right-item" span={4} > Название: </Col>
                    <Col className="order-right-taste order-right-item" span={4} > Вкус: </Col>
                    <Col className="order-right-nicotine order-right-item" span={4} > Никотин: </Col>
                    <Col className="order-right-count order-right-item" span={4} > Количество: </Col>
                    <Col className="order-right-price order-right-item" span={4} > Цена: </Col>
                </Row>
            }

            {
                snusBasket.map(snus => (
                    <OrderRightItem snus={snus} key={uuidv4()} />
                ))
            }

            {snusBasket.length === 0 ? ""
                : <Divider className="order-right-sum" orientation="right" orientationMargin={50}>
                    <div className="order-right-sum-inner">
                        Итого: <span className="order-right-sum-price">
                            {totalPrice}₽
                        </span>
                    </div>
                </Divider>
            }
        </>
    )
}