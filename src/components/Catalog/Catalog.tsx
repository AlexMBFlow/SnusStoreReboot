import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { SnusList } from './SnusList/SnusList';
import { SearchOptionTop } from './SearchOptionTop/SearchOptionTop';
import { SearchOptionAside } from './SearchOptionAside/SearchOptionAside';
import { Basket } from "./Basket/Basket";
import "./Catalog.css";

export const Catalog: FC = () => {
    return (
        <>
            <Row className='catalog-wrapper'>
                <Col span={18} push={5}>
                    <SearchOptionTop />
                    <SnusList />
                </Col>

                <Col span={5} pull={18}>
                    <SearchOptionAside />
                </Col>
                    <Basket />
            </Row>
        </>
    )
}