import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link , NavLink , useHistory } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import logo from '../Images/LogoMakerCa-1635443362937-removebg-preview.png';
import "./Header.css";

const Header = () => {
    const { user, logOut } = useFirebase();

    const history = useHistory();
    const handleClick =() => {
        history.push('/login')
    }

    return (
        <div>
            <Navbar className="nav-bar shadow py-0" bg="light" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ width: "15%" }}>
                        <img className="logo w-100" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={NavLink} activeclassName="selected" className="nav-tab nav-link blue-text" to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} activeclassName="selected" className="nav-tab nav-link blue-text" to="/packages">Packages</Nav.Link>
                        {
                            user?.email && 
                            (
                                <Nav.Link as={NavLink} activeclassName="selected" className="nav-tab nav-link blue-text" to="/all_order">My Booking</Nav.Link>
                            )
                        }
                        {
                            user?.email && 
                            (
                                <Nav.Link as={NavLink} activeclassName="selected" className="nav-tab nav-link blue-text" to="/manage_all_order">Manage Booking</Nav.Link>
                            )
                        }
                        {
                            user?.email && 
                            (
                                <Nav.Link as={NavLink} activeclassName="selected" className="nav-tab nav-link blue-text" to="/add_package">Add Package</Nav.Link>
                            )
                        }
                        <Nav.Link as={NavLink} activeclassName="selected" className="nav-tab nav-link blue-text" to="/about_us">About Us</Nav.Link>
                        <span style={{width:"50px"}}>
                            {user?.photoURL ? (
                            <img className="w-100 rounded-pill" src={user.photoURL} alt="" />
                            ) : (
                            <small>{user?.displayName}</small>
                            )}
                        </span>
                        {
                        user?.email ?
                        (
                            <Button onClick={logOut} variant='' className="fw-bold mx-4 px-4 rounded-0 button">
                            <Nav.Link as={NavLink} className="btn-text nav-link p-0 blue-text" to="/login">Log Out</Nav.Link>
                            </Button>
                        )
                        :
                        (
                            <Button onClick={handleClick} variant='' className="fw-bold mx-4 px-4 rounded-0 button">
                            <Nav.Link as={NavLink} className="btn-text nav-link p-0 blue-text" to="/login">Login</Nav.Link>
                            </Button>
                        )
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;