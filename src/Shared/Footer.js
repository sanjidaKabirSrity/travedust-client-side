import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../Images/LogoMakerCa-1635443362937-removebg-preview.png'
import { useHistory , Link } from 'react-router-dom';

const Footer = () => {
    const history = useHistory();
    const handleClick =() => {
        history.push('/')
    }

    return (
        <div className="bg-light pt-5 shadow">
            <Container>
                <Row>
                    <Col xs={12} md={4} className="animate__animated animate__fadeInLeft">
                        <h3 className="gulapi-text mb-3 custom-center">Contact US</h3>
                        <Row>
                            <Col xs={4} md={2} className="text-center blue-text">
                                <p><i className="fas fa-phone-alt"></i></p>
                                <p><i className="fas fa-envelope"></i></p>
                                <p><i className="fab fa-telegram-plane"></i></p>
                            </Col>
                            <Col xs={8} md={10} className="blue-text">
                                <p>+1 323-913-4688</p>
                                <p>travedust@gmail.com</p>
                                <p>+1 863-913-4688</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4} className="text-center animate__animated animate__zoomIn custom-center">
                        <h3 className="gulapi-text mb-3">POPULAR NEWS</h3>
                        <p className="text-black-50 w-75 mx-auto">Your Personal Guide to 5 Best Places to Visit on Earth</p>
                        <p className="text-black-50 w-75 mx-auto">Top 10 Hotels: Rating by Wonder Tour Travel Experts</p>
                    </Col>
                    <Col xs={12} md={4} className="align-items-center col d-flex flex-column animate__animated animate__fadeInRight">
                        <Link className="w-75 mb-3 custom-center">
                            <img src={logo} alt="" className="img-fluid" onClick={handleClick} />
                        </Link>
                        <small className="text-black-50 text-center">Travedust Travel agency, travel agency Bangladesh</small>
                    </Col>
                </Row>
            </Container>
            <div className="blue-background py-3">
                <Container>
                    <Row className="text-white-50">
                        <Col xs={8} md={10}><small>© 2021 Travedust. All rights reserved.</small></Col>
                        <Col xs={4} md={2}>
                            <i className="fab fa-facebook-f px-2"></i>
                            <i className="fab fa-google px-2"></i>
                            <i className="fab fa-twitter px-2"></i>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;