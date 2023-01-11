import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import logo from '../logo/logo.jpg'
import LeftNav from '../Navbar/LeftNav';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';
import './Header.css'
import { ImBrightnessContrast } from "react-icons/im";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
            <Container>
                <img src={logo} width="30" height="30" className="align-top rounded-circle me-2" alt="" />
                <Link className='text-decoration-none text-white fw-bold fs-4' to='/'>CS for knowing & doing</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto head">
                        <Link className='text-decoration-none text-white me-5 fw-bold fs-5' to="/">Home</Link>
                        <Link className='text-decoration-none text-white me-5 fw-bold fs-5' to='/course'>Courses</Link>
                        <Link className='text-decoration-none text-white me-5 fw-bold fs-5' to='/blog'>Blog</Link>
                        <Link className='text-decoration-none text-white fw-bold fs-5' to='/faq'>FAQ</Link>
                    </Nav>
                    <Nav>
                        <Link className='text-decoration-none' to="">
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-2 text-white'>{user?.displayName}</span>
                                        <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                        <Button className='ms-2' onClick={handleLogOut} variant="primary">Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button variant="primary">Log in</Button></Link>
                                    </>
                            }

                        </Link>
                        <Nav.Link className='ms-3' href="">

                            <ImBrightnessContrast></ImBrightnessContrast>
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