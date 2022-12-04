import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/house-school-education-logo-design-260nw-1495957325.jpg'

import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth);
    };

    return (
        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //     <Container className=''>
        //         <Navbar.Brand as={Link} to="/" className='my-logo text-white'>

        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">

        //             <Nav className="me-auto">

        //             </Nav>
        //             {/* this is right part of navbar  */}
        //             <Nav>

        //                 <Nav.Item className='text-white'>

        //                    
        //                 </Nav.Item>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <div className="flex">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='rounded-circle h-[66px]' src={logo} alt="" />

                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">



                        <li className="flex">
                            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Student Accomodation</a>
                        </li>

                    </ul>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <Nav.Link as={Link} to="/dashboard" className='text-white text-[#fff] px-5'>Dashboard</Nav.Link>

                    {
                        user ? <Nav.Link onClick={handelSignOut} eventKey="link-1" className='text-white'>Log Out</Nav.Link> : <Nav.Link className='text-white' eventKey=" link-1" as={Link} to="/login">Log In</Nav.Link>
                    }
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header >
    );
};

export default Header;