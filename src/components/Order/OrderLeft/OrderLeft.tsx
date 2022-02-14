import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from 'antd';
import { orderAC } from "../../../redux/actionCreators/orderAC/orderAC";
import { useDispatch } from "react-redux";
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

export const OrderLeft = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const { isLoading } = useTypedSelector(state => state.orderReducer)

    const [buttonText, setButtonText] = useState("Отправить")

    const buttonHandler = () => {
        setButtonText("Отправка...")
        dispatch(orderAC(true)) //меняем состояние кнопки на isLoading
        //потом когда получим ответ от сервера, диспатчим false и показываем
        //уведомление, что заказ принят
        setTimeout(() => {
            dispatch(orderAC(false))
            setButtonText("Отправлено!🚀")
        }, 3500)
    }
    const formItemLayout = {
        labelCol: {
            span: 12,
        },
        wrapperCol: {
            span: 10,
        },
    };
    const buttonItemLayout = {
        wrapperCol: {
            span: 14,
            offset: 12,
        },
    };
    return (
        <>
            <Row>
                <Col span={6}></Col>
                <Col span={6}></Col>
                <Col span={12}>
                    Пожалуйста, заполните данные формы
                </Col>
            </Row>
            <Form
                {...formItemLayout}
                layout={'horizontal'}
                form={form}
                initialValues={{
                    layout: "horizontal",
                }}

            >
                <Form.Item label="Имя" >
                    <Input placeholder="Богдан" />
                </Form.Item>

                <Form.Item label="Фамилия">
                    <Input placeholder="Заглотнюк" />
                </Form.Item>

                <Form.Item label="Телефон">
                    <Input placeholder="+7(900)-555-22-22" />
                </Form.Item>

                <Form.Item label="Страна">
                    <Input placeholder="Нигерия" />
                </Form.Item>

                <Form.Item label="Город / Область">
                    <Input placeholder="Абаджи" />
                </Form.Item>

                <Form.Item label="Район">
                    <Input placeholder="Гетто" />
                </Form.Item>

                <Form.Item label="E-mail">
                    <Input placeholder="example@gmail.com" />
                </Form.Item>

                <Form.Item label="Примечания">
                    <Input placeholder="Чем быстрее, тем лучше" />
                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" loading={isLoading} onClick={() => buttonHandler()}>
                        {buttonText}
                    </Button>
                </Form.Item>

            </Form>
        </>
    )
}