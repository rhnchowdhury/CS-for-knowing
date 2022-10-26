import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../logo/logo.jpg'
import LeftNav from '../Navbar/LeftNav';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img src={logo} width="30" height="30" className="align-top rounded-circle me-2" alt="" />
                <Navbar.Brand href="#home">CS for knowing & doing</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="#features">Home</Link>
                        <Link to='/course'>Courses</Link>
                        <Link to='/blog'>Blog</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftNav></LeftNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;