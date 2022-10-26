import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import logo from '../logo/logo.jpg'
import LeftNav from '../Navbar/LeftNav';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    };

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
                        <Link to='/faq'>Faq</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="primary" className='ms-2'>Log out</Button>
                                    </>
                                    :
                                    <>
                                        {/* <Link to='/login'>Login</Link> */}
                                        <Link to='/login'><Button variant="primary">Log in</Button></Link>
                                    </>
                            }

                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                    :
                                    <FaUser></FaUser>
                            }
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