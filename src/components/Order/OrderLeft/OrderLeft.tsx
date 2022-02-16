import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch } from "react-redux";
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { orderAC } from "../../../redux/actionCreators/orderAC/orderAC";
import { stepsAC } from "../../../redux/actionCreators/stepsAC/stepsAC";
import { userFirstNameAC, userSecondNameAC, userPhoneAC, userCountryAC,
    userCityAC, userAreaAC, userEmailAC, userSomeInfoAC } from "../../../redux/actionCreators/userInfoAC/userInfoAC";

export const OrderLeft = () => {
    const [buttonText, setButtonText] = useState("Отправить")
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { isLoading } = useTypedSelector(state => state.orderReducer)
    const { firstName, secondName, phone, country, city,
        area, email, someInfo } = useTypedSelector(state => state.userInfoReducer)

    const buttonHandler = () => {
        setButtonText("Отправка...")
        dispatch(orderAC(true)) //меняем состояние кнопки на isLoading
        //потом когда получим ответ от сервера, диспатчим false и показываем
        //уведомление, что заказ принят
        setTimeout(() => {
            dispatch(orderAC(false))
            dispatch(stepsAC([
                {status: "finish", color: "#1890ff"},
                {status: "process", color: "#06d44b"}
            ]))
            setButtonText("Отправлено!🚀")
        }, 3500)
    }

    const firstNameHandler = e => {
        dispatch(userFirstNameAC(e.target.value))
    }
    const secondNameHandler = e => {
        dispatch(userSecondNameAC(e.target.value))
    }
    const phoneHandler = e => {
        dispatch(userPhoneAC(e.target.value))
    }
    const countryHandler = e => {
        dispatch(userCountryAC(e.target.value))
    }
    const cityHandler = e => {
        dispatch(userCityAC(e.target.value))
    }
    const areaHandler = e => {
        dispatch(userAreaAC(e.target.value))
    }
    const emailHandler = e => {
        dispatch(userEmailAC(e.target.value))
    }
    const someInfoHandler = e => {
        dispatch(userSomeInfoAC(e.target.value))
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
                    <Input value={firstName} onChange={firstNameHandler} placeholder="Богдан" />
                </Form.Item>

                <Form.Item label="Фамилия">
                    <Input value={secondName} onChange={secondNameHandler} placeholder="Заглотнюк" />
                </Form.Item>

                <Form.Item label="Телефон">
                    <Input value={phone} onChange={phoneHandler} placeholder="+7(900)-555-22-22" />
                </Form.Item>

                <Form.Item label="Страна">
                    <Input value={country} onChange={countryHandler} placeholder="Нигерия" />
                </Form.Item>

                <Form.Item label="Город / Область">
                    <Input value={city} onChange={cityHandler} placeholder="Абаджи" />
                </Form.Item>

                <Form.Item label="Район">
                    <Input value={area} onChange={areaHandler} placeholder="Гетто" />
                </Form.Item>

                <Form.Item label="E-mail">
                    <Input value={email} onChange={emailHandler} placeholder="example@gmail.com" />
                </Form.Item>

                <Form.Item label="Примечания">
                    <Input value={someInfo} onChange={someInfoHandler} placeholder="Чем быстрее, тем лучше" />
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