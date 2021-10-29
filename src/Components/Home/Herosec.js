import React from 'react';
import { Carousel, Col, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Herosec.css";

const Herosec = () => {
    return (
        <div>
            <Carousel variant="light">
                <Carousel.Item interval={2000} className="slider-one">
                    <Row>
                        <Col className="d-none d-lg-block" xs={12} lg={1}></Col>
                        <Col
                        xs={12}
                        md={12}
                        lg={6}
                        className="mx-auto slider-item"
                        >
                        <div className="text-center text-white animate__animated animate__zoomIn">
                            <p className="slider-top-text mt-5">BUILD YOUR NEXT HOLIDAY TRIP WITH US</p>
                            <h1 className="banner-title">Create <span className='fw-bold hero-h1'>Your Tour</span></h1>
                            <Button className="my-5 fw-bold mx-4 px-4 rounded-0 button-hero">
                                <Link activeclassName="btn-selected" className="btn-text nav-link p-0 text-white" to="/login">Get Started</Link>
                            </Button>
                        </div>
                        </Col>
                        <Col className="d-none d-lg-block" xs={12} lg={1}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item interval={2000} className="slider-two">
                    <Row>
                        <Col className="d-none d-lg-block" xs={12} lg={1}></Col>
                        <Col
                        xs={12}
                        md={12}
                        lg={6}
                        className="mx-auto slider-item"
                        >
                        <div className="text-center text-white animate__animated animate__zoomIn">
                            <p className="slider-top-text mt-5">A TEAM OF PROFESSIONAL TRAVEL EXPERTS</p>
                            <h1 className="banner-title">Trust <span className='fw-bold hero-h1'>Our Experience</span></h1>
                            <Button className="my-5 fw-bold mx-4 px-4 rounded-0 button-hero">
                                <Link activeclassName="btn-selected" className="btn-text nav-link p-0 text-white" to="/login">Get Started</Link>
                            </Button>
                        </div>
                        </Col>
                        <Col className="d-none d-lg-block" xs={12} lg={1}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item interval={2000} className="slider-three">
                    <Row>
                        <Col className="d-none d-lg-block" xs={12} lg={1}></Col>
                        <Col
                        xs={12}
                        md={12}
                        lg={6}
                        className="mx-auto slider-item"
                        >
                        <div className="text-center text-white animate__animated animate__zoomIn">
                            <p className="slider-top-text mt-5">ENJOY THE BEST DESTINATIONS WITH OUR TRAVEL AGENCY</p>
                            <h1 className="banner-title">Explore <span className='fw-bold hero-h1'>The World</span></h1>
                            <Button className="my-5 fw-bold mx-4 px-4 rounded-0 button-hero">
                                <Link activeclassName="btn-selected" className="btn-text nav-link p-0 text-white" to="/login">Get Started</Link>
                            </Button>
                        </div>
                        </Col>
                        <Col className="d-none d-lg-block" xs={12} lg={1}></Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Herosec;