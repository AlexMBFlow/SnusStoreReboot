import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import { orderAC } from "../../redux/actionCreators/orderAC/orderAC";
import { useDispatch } from "react-redux";
import "./Order.css";
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

export const Order = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const {isLoading} = useTypedSelector(state => state.orderReducer)


    const buttonHandler = () => {
        dispatch(orderAC(true)) //меняем состояние кнопки на isLoading
        //потом когда получим ответ от сервера, диспатчим false и показываем
        //уведомление, что заказ принят
        setTimeout(() => dispatch(orderAC(false)), 3500)
    }

//debugger
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;
    return (
        <Form
            {...formItemLayout}
            layout={'horizontal'}
            form={form}
            initialValues={{
                layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange} //некоторые фичи из andt не юзатся, TODO: выпилить
        >
            <Form.Item label="Имя">
                <Input placeholder="Введите ваше имя..." />
            </Form.Item>
            <Form.Item label="Телефон">
                <Input placeholder="Например +7(900)-555-22-22" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
            <Button type="primary" loading={isLoading} onClick={() => buttonHandler()}>
            Отправить
          </Button>
            </Form.Item>
        </Form>
    );
}