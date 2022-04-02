import React, { useRef, useState } from "react";
import { Form, Input, Button, Row, Col, message, notification } from 'antd';
import { useDispatch } from "react-redux";
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { isLoadingAC } from "../../../redux/actionCreators/orderAC/orderAC";
import { isDisabledAC } from "../../../redux/actionCreators/orderAC/orderAC";
import { stepsAC } from "../../../redux/actionCreators/stepsAC/stepsAC";
import { setButtonTextAC } from "../../../redux/actionCreators/orderAC/orderAC";
import { sendOrder } from "../../../api/sendOrder";

import {
    userFirstNameAC, userSecondNameAC, userPhoneAC, userCountryAC,
    userCityAC, userAreaAC, userEmailAC, userSomeInfoAC
} from "../../../redux/actionCreators/userInfoAC/userInfoAC";
import "./OrderLeft.css";



export const OrderLeft = () => {
    const emailRef = useRef(null) //ссылка на инпут с e-mail'ом
    const phoneRef = useRef(null) //ссылка на инпут с phone

    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const [phoneDirty, setPhoneDirty] = useState(false)
    const [phoneError, setPhoneError] = useState(false)

    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { snusBasket } = useTypedSelector(state => state.basketReducer)
    const { isLoading, buttonText, isDisabled } = useTypedSelector(state => state.orderReducer)
    const { firstName, secondName, phone, country, city,
        area, email, someInfo } = useTypedSelector(state => state.userInfoReducer)

    const buttonHandler = () => {
        if (snusBasket.length === 0) {
            notification.info({
                message: "Внимание!",
                description: "Ваша корзина пуста, пожалуйста, заполните её",
                placement: "bottomRight"
            })
            return
        }

        if (!firstName && !secondName && !phone && !country && !city && !area && !email) {
            notification.info({
                message: "Внимание!",
                description: "Не все поля формы заполнены корректно",
                placement: "bottomRight"
            })
            return
        }

        if (emailError || phoneError) { //если есть ошибка/ошибки в полях формы
            notification.info({
                message: "Внимание!",
                description: "Не все поля формы заполнены корректно",
                placement: "bottomRight"
            })
            return
        }
//89009518736 qwertyu@yandex.ru
        dispatch(setButtonTextAC("Отправка..."))
        sendOrder(snusBasket)
        dispatch(isLoadingAC(true)) //меняем состояние кнопки на isLoading т.е. true
        //потом когда получим ответ от сервера, диспатчим false и показываем
        //уведомление, что заказ принят
        setTimeout(() => {
            dispatch(isLoadingAC(false))
            dispatch(stepsAC([
                { status: "finish", color: "#1890ff" },
                { status: "process", color: "#06d44b" }
            ]))
            dispatch(setButtonTextAC("Отправлено!🚀"))
            dispatch(isDisabledAC(true))
            message.success('Заказ принят!');
        }, 3500)
    }

    const blurEmailHandler = (e) => {
        setEmailDirty(true)
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            emailRef.current.input.style.color = "red"
            setEmailError(true)
        }
    }

    const emailHandler = e => {
        dispatch(userEmailAC(e.target.value))
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (emailDirty) {
            if (!re.test(String(e.target.value).toLocaleLowerCase())) {
                emailRef.current.input.style.color = "red"
                setEmailError(true)
            } else {
                emailRef.current.input.style.color = "black"
                setEmailError(false)
            }
        }
    }

    const blurePhoneHandler = e => {
        setPhoneDirty(true)
        const re = /^\d[\d() -]{4,14}\d$/
        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            phoneRef.current.input.style.color = "red"
            setPhoneError(true)
        }
    }
    
    const firstNameHandler = e => {
        dispatch(userFirstNameAC(e.target.value))
    }

    const secondNameHandler = e => {
        dispatch(userSecondNameAC(e.target.value))
    }

    const phoneHandler = e => {
        dispatch(userPhoneAC(e.target.value))
        const re = /^\d[\d() -]{4,14}\d$/
        if (phoneDirty) {
            if (!re.test(String(e.target.value).toLocaleLowerCase())) {
                phoneRef.current.input.style.color = "red"
                setPhoneError(true)
            } else {
                phoneRef.current.input.style.color = "black"
                setPhoneError(false)
            }
        }
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
        <div className="order-form">
            <Row className="order-form-title">
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
                    <Input ref={phoneRef} onBlur={e => blurePhoneHandler(e)} value={phone} onChange={phoneHandler} placeholder="+7(900)-555-22-22" />
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

                {/*(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>*/}
                <Form.Item label="E-mail">
                    <Input ref={emailRef} onBlur={e => blurEmailHandler(e)} value={email} onChange={emailHandler} placeholder="example@gmail.com" />
                </Form.Item>

                <Form.Item label="Примечания">
                    <Input value={someInfo} onChange={someInfoHandler} placeholder="Чем быстрее, тем лучше" />
                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button disabled={isDisabled} type="primary" loading={isLoading} onClick={() => buttonHandler()}>
                        {buttonText}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}