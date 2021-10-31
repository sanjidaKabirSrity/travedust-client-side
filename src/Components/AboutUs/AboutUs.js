import React from 'react';
import { Container , Row , Col , Card } from 'react-bootstrap';
import AboutGirl from '../../Images/aboutUsWomen.jpg'

const AboutUs = () => {
    
    return (
        <div>
            <div className="pages-banner py-5 text-center text-white">
                <div className="animate__animated animate__zoomIn py-4">
                <h2 className="pt-4">About Our<span className="gulapi-text hero-h1"> Travedust</span></h2>
                <p className="pb-4">Home / About Us / About Agency</p>
                </div>
            </div>
            <Container className="py-5">
                <Row xs={1} className="g-4 text-center g-5 pb-4">
                    <Col className="h-100">
                        <Card className="h-100 shadow-sm animate__animated animate__zoomIn animate__delay-1s d-flex flex-row p-3 border-0">
                            <Row className="align-items-center">
                                <Col xs={12} md={6} className="overflow-hidden d-flex justify-content-center align-items-center gulapi-text">
                                    <div className="overflow-hidden">
                                    <Card.Img
                                        className="img-fluid package-img"
                                        variant="top"
                                        src={AboutGirl}
                                    />
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="py-3 text-start">
                                    <Card.Title className="blue-text">
                                        <h2 className="mb-5" style={{fontSize:"40px"}}>Why choose us</h2>
                                    </Card.Title>
                                    <Card.Text className="text-black-50 lh-lg" style={{fontSize:"20px"}}>
                                        <p>Travel agency is a firm which has full knowledge about tourists product - destinations, modes of travel, climate, accommodation and other areas. a top travel agency Bangladesh and a professional and best tour operator in Bangladesh. Best travel agency and top tour company Dhaka in BD. A travel agency is a private retailer or public service. This provides a variety of travel packages for each destination. It provides trave. Top 10 Travel Agency in Bangladesh-how you know who is the best or top!! After long investigation we found that travel agent is our bes</p>
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;