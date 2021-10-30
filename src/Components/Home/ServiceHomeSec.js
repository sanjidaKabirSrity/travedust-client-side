import React, { useState , useEffect } from 'react';
import { Col, Container, Row , Card ,Button} from 'react-bootstrap';

const ServiceHomeSec = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://polar-island-28998.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container fluid className="py-4 bg-light">
                <Container className="py-5">
                    <h2 className="text-center title blue-text">
                    {" "}Our Best 
                    <span className="gulapi-text" style={{fontSize:'40px'}}> Services</span>
                    </h2>
                    <Row xs={1} md={2} className="g-4 text-center g-5 py-4">
                    {services.map((service) => (
                        <Col key={service.id} className="h-100">
                            <Card className="h-100 shadow-sm animate__animated animate__zoomIn animate__delay-1s d-flex flex-row p-3 border-0">
                                <Row>
                                    <Col xs={3} className="overflow-hidden d-flex justify-content-center align-items-center gulapi-text">
                                        <i className={service.icon} style={{fontSize:"50px"}}></i>
                                    </Col>
                                    <Col xs={9} className="py-3 text-start">
                                        <Card.Title className="gulapi-text" style={{fontSize:'20px'}}>{service.item}</Card.Title>
                                        <Card.Text className="blue-text">{service.description}</Card.Text>
                                    </Col>
                                    <Card.Footer className="bg-white border-0 pb-3">
                                    </Card.Footer>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                </Container>
            </Container>
    );
};

export default ServiceHomeSec;