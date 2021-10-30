import React, { useState , useEffect } from 'react';
import { Col, Container, Row , Card ,Button} from 'react-bootstrap';

const HomeService = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://polar-island-28998.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    return (
            <Container fluid className="py-4">
                <Container className="py-5">
                    <h2 className="text-center title blue-text">
                    {" "}Our Popular 
                    <span className="gulapi-text" style={{fontSize:'40px'}}> Tour Packeges</span>
                    </h2>
                    <Row xs={1} md={2} lg={3} className="g-4 text-center gx-4 gy-5 py-4">
                    {packages.slice(0, 6).map((pack) => (
                        <Col key={pack.id} className="h-100">
                            <Card className="h-100 shadow animate__animated animate__fadeInUp animate__delay-1s">
                                <div className="overflow-hidden">
                                <Card.Img
                                    className="img-fluid package-img"
                                    variant="top"
                                    src={pack.img}
                                />
                                </div>
                                <Card.Body className="py-3">
                                <Card.Title className="blue-text" style={{fontSize:'20px'}}>{pack.name}</Card.Title>
                                <Card.Text className="text-black-50">{pack.description.slice(0,73)}</Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-white border-0 pb-3">
                                <Button
                                    // onClick={handleClick}
                                    className="px-4 rounded-0 py-2 button animate__animated animate__backInUp animate__delay-1s blue-text fw-bold"
                                >
                                    See Details
                                </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                </Container>
            </Container>
    );
};

export default HomeService;