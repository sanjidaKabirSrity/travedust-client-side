import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link , NavLink , useHistory } from 'react-router-dom';
import logo from '../Images/LogoMakerCa-1635443362937-removebg-preview.png';
import "./Header.css";

const Header = () => {
    const history = useHistory();
    const handleClick =() => {
        history.push('/login')
    }

    return (
        <div>
            <Navbar className="nav-bar shadow py-0" bg="light" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ width: "30%" }}>
                        <img style={{ width: "50%" }} className="logo" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={NavLink} activeclassName="selected" className="nav-tab nav-link blue-text" to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} activeclassName="selected" className="nav-tab nav-link blue-text" to="/add_package">Add Package</Nav.Link>
                        <Button onClick={handleClick} variant='' className="fw-bold mx-4 px-4 rounded-0 button">
                           <Nav.Link as={NavLink} className="btn-text nav-link p-0 blue-text" to="/login">Login</Nav.Link>
                        </Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;