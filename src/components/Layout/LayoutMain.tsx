import React, { FC, useEffect } from "react";
import { Layout, Menu } from 'antd';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Welcome } from "../Welcume/Welcome";
import { Home } from "../Home/Home";
import { Catalog } from "../Catalog/Catalog";
import { Delivery } from "../Delivery/Delivery";
import { Contacts } from "../Contacts/Contacts";
import { FooterMain } from "../Footer/FooterMain";
import { Chat } from "../Chat/Chat";
import './LayoutMain.css';

// [ANT DESIGN] <Menu defaultSelectedKeys={['1']}></Menu> отображение при загрузке сайта соответствующего менюИтема по key, пока убрал

export const LayoutMain: FC = () => {
    const { Header, Content, Footer } = Layout;
    const location = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    return (
        <Layout>
            <Header className="ant-header" style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
                <Menu className='menu-item' theme="light" mode="horizontal" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Menu.Item key="1">
                        <Link to='/home'><span className="home">Главная</span></Link>
                    </Menu.Item>

                    <Menu.Item className='menu-item' style={{ marginLeft: "6rem" }} key="2">
                        <Link to="/catalog"><span className='catalog'>Каталог</span></Link>
                    </Menu.Item>

                    <Menu.Item className='menu-item' style={{ marginLeft: "6rem" }} key="3">
                        <Link to="/delivery"><span className='delivery'>Доставка</span></Link>
                    </Menu.Item>

                    <Menu.Item className='menu-item' style={{ marginLeft: "6rem" }} key="4">
                        <Link to="/contacts"><span className='contacts'>Контакты</span></Link>
                    </Menu.Item>

                </Menu>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, backgroundColor: "#fff" }}>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Chat />
            </Content>

            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}