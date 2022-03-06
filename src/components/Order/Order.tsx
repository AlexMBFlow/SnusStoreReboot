import React from "react";
import { Row, Col, Steps } from 'antd';
import { OrderLeft } from './OrderLeft/OrderLeft';
import { OrderRight } from './OrderRight/OrderRight';
import { SolutionOutlined, UserOutlined, SmileOutlined, CreditCardTwoTone } from '@ant-design/icons';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import "./Order.css";

export const Order = () => {
    const { Step } = Steps;
    const { step } = useTypedSelector(state => state.stepReducer)

    const [ pay, feedBack ] = step
    //#1890ff синий
    //#bfbfbf серый !!!
    //#06d44b green
    //Не понятно, почему последний Step не красится в зеленый, не зависит от статуса, ведь у pay сначала process и он зеленый,
    //а потом этот же статус меняется на finish и все работает. у последнего даже при wait ничего не менялось, тестил в начале, странная ситуация
    return (
        <div className="order-page">
            <Row>
                <Col span={24}>
                    <Steps>
                        <Step status={"finish"} title="Перейти в каталог" icon={<UserOutlined />} />
                        <Step status={"finish"} title="Выбрать снюс" icon={<SolutionOutlined />} />
                        <Step status={pay.status} title="Оплатить" icon={<CreditCardTwoTone twoToneColor={pay.color}/>} />
                        <Step status={feedBack.status} title="Написать отзыв!" icon={<SmileOutlined style={{color: feedBack.color}} twoToneColor={feedBack.color}/>} />
                    </Steps>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <OrderLeft />
                </Col>
                <Col span={16}>
                    <OrderRight />
                </Col>
            </Row>
        </div>
    );
}