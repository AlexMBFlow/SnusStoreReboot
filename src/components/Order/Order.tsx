import React from "react";
import { Form, Input, Button, Row, Col, message, notification } from 'antd';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { sendOrder } from "../../api/sendOrder";
import { useActions } from '../../redux/hooks/useActions';
import "./Order.css";

export const Order = () => {
    const {isLoadingAC, setButtonTextAC,
        isDisabledAC, userEmailAC, userFirstNameAC, userSecondNameAC,
        userPhoneAC, userCountryAC, userCityAC, userAreaAC, userSomeInfoAC} = useActions()
    //const dispatch = useDispatch<AppDispatch>()
    const [form] = Form.useForm()
    const { snusBasket } = useTypedSelector(state => state.basketReducer)
    const { isLoading, buttonText, isDisabled } = useTypedSelector(state => state.orderReducer)
    const { firstName, secondName, phone, country, city,
        area, email, someInfo } = useTypedSelector(state => state.userInfoReducer)

    //Валидация емейла
    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


    const submitHandler: Function = () => {
        //Проверка наличие хотя бы 1 товара в корзине
        if (snusBasket.length === 0) {
            notification.info({
                message: "Внимание!",
                description: "Ваша корзина пуста, пожалуйста, заполните её",
                placement: "bottomRight"
            })
            return
        }
        // Проверка заполненности всех нужных полей
        if (!firstName || !secondName || !phone || !country || !city || !area || !email) {
            console.log(firstName)
            notification.info({
                message: "Внимание!",
                description: "Не все поля формы заполнены корректно",
                placement: "bottomRight"
            })
            return
        }
        // Проверка поля e-mail
        if (!emailRegex.test(email)) {
            notification.info({
                message: "Внимание!",
                description: "Неверно указан E-mail",
                placement: "bottomRight"
            })
            return
        }
        if (isNaN(+phone)) {
            notification.info({
                message: "Внимание!",
                description: "Неверно указан номер телефона",
                placement: "bottomRight"
            })
            return
        }

        setButtonTextAC("Отправка...")
        isLoadingAC(true) //меняем состояние кнопки на isLoading т.е. true
        sendOrder({
            basket: snusBasket,
            info: {
                firstName: firstName,
                secondName: secondName,
                phone: phone,
                country: country,
                city: city,
                area: area,
                email: email,
                someInfo: someInfo
            }
        }).then(res => {
            //потом когда получим ответ от сервера, диспатчим false и показываем
            //уведомление, что заказ принят
            isLoadingAC(false)
            setButtonTextAC("Отправлено!🚀")
            isDisabledAC(true)
            message.success('Заказ принят!');
        }).catch(err => {
            message.error('Не удалось отправить заказ')
        })
    }

    const emailHandler = e => {
        userEmailAC(e.target.value)
    }

    const firstNameHandler = e => {
        userFirstNameAC(e.target.value)
    }

    const secondNameHandler = e => {
        userSecondNameAC(e.target.value)
    }

    const phoneHandler = e => {
        userPhoneAC(e.target.value)
    }

    const countryHandler = e => {
        userCountryAC(e.target.value)
    }

    const cityHandler = e => {
        userCityAC(e.target.value)
    }

    const areaHandler = e => {
        userAreaAC(e.target.value)
    }

    const someInfoHandler = e => {
        userSomeInfoAC(e.target.value)
    }

    const formItemLayout = {
        labelCol: {
            span: 7,
        },
        wrapperCol: {
            span: 14,
        },
    };
    const buttonItemLayout = {
        wrapperCol: {
            span: 6,
            offset: 7,
        },
    };

    return (
        <div className="order-form">
            <Row className="order-form-title">
                <Col span={24}>
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

                <Form.Item label="E-mail" name="email" rules={
                    [
                        {
                            type: "email",
                            message: "E-mail введен неккоректно!"
                        },
                        {
                            required: true,
                            message: "Пожалуйста, введие ваш E-mail"
                        }
                    ]
                }>
                    <Input placeholder="example@gmail.com" value={email} onChange={emailHandler} />
                </Form.Item>

                <Form.Item label="Примечания">
                    <Input value={someInfo} onChange={someInfoHandler} placeholder="Чем быстрее, тем лучше" />
                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button disabled={isDisabled} type="primary" loading={isLoading} onClick={() => submitHandler()}>
                        {buttonText}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}