import React, { useEffect, useState} from 'react';
import { Container, Row , Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PackageBooking from './PackageBooking';

const Package = () => {
    const { packageId } = useParams();

    const [packag , setPackage] = useState([]);
    useEffect(()=> {
        fetch(`https://polar-island-28998.herokuapp.com/packages/${packageId}`)
        .then(res => res.json())
        .then(data => setPackage(data))
    }, [packageId])

    return (
        <>
            <div className="pages-banner">
                <Container className="py-5 text-center text-white">
                    <div className="animate__animated animate__zoomIn py-4">
                    <h2 className="pt-4">Our Tour <span className="gulapi-text hero-h1">Package</span></h2>
                    <p className="pb-4">Home / Packages / package</p>
                    </div>
                </Container>
            </div>
            <Container className="py-5">
                <h2 className="text-center title blue-text">
                    {" "}Book This 
                    <span className="gulapi-text" style={{fontSize:'40px'}}> Packege</span>
                </h2>
                <Row xs={1} className="g-4 text-center g-5 pb-4">
                    <Col className="h-100">
                        <Card className="h-100 shadow-sm animate__animated animate__zoomIn animate__delay-1s d-flex flex-row p-3 border-0">
                            <Row>
                                <Col xs={12} md={6} className="overflow-hidden d-flex justify-content-center align-items-center gulapi-text">
                                    <div className="overflow-hidden">
                                    <Card.Img
                                        className="img-fluid package-img"
                                        variant="top"
                                        src={packag.img}
                                    />
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="py-3 text-start">
                                    <Row>
                                        <Col xs={10}></Col>
                                        <Col xs={2}>
                                            <h4 className="align-items-center d-flex gulapi-background h-100 justify-content-center rounded-pill text-white p-3 shadow w-100">{packag.price}$</h4>
                                        </Col>
                                    </Row>
                                    <Card.Title className="gulapi-text">
                                        <h3>{packag.name}</h3>
                                    </Card.Title>
                                    <Card.Text className="blue-text">
                                        <p>{packag.description}{packag.description}</p>
                                        <Link to="/home#packages">
                                            <Button
                                                className="px-4 rounded-0 py-2 button animate__animated animate__backInUp animate__delay-1s blue-text fw-bold"
                                            >
                                                Back
                                            </Button>
                                        </Link>
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <PackageBooking price={packag.price}></PackageBooking>
        </>
    );
};

export default Package;