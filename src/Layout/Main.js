import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header';
import LeftNav from '../Navbar/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg='10'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;