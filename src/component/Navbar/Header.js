import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/Maxresdefault.png'

import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth);
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className=''>
                <Navbar.Brand as={Link} to="/" className='my-logo text-white'> <img className='rounded-circle' src={logo} alt="" /> </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>

                    </Nav>
                    {/* this is right part of navbar  */}
                    <Nav>
                        <Nav.Item className='text-white'>
                            {
                                user ? <Nav.Link onClick={handelSignOut} eventKey="link-1" className='text-white'>Log Out</Nav.Link> : <Nav.Link className='text-white' eventKey=" link-1" as={Link} to="/login">Log In</Nav.Link>
                            }

                        </Nav.Item>




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;