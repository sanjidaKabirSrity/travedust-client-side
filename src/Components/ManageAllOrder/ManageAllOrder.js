import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Col, Row ,Container, Button} from 'react-bootstrap';

const ManageAllOrder = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://polar-island-28998.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    //  DELETE User Booking 
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure , you want to delete!');
        if(proceed){
            axios
            .delete(`https://polar-island-28998.herokuapp.com/booking/${id}`)
            .then((result) => {
                if(result.data.deletedCount > 0){
                    const remaining = users.filter(event => event._id !==id);
                    setUsers(remaining);
                    swal({
                        title: "Canceled This User",
                        icon:"sucess",
                    })
                }
            })
        }
    }

    return (
        <div>
            <div className="pages-banner py-5 text-center text-white">
                <div className="animate__animated animate__zoomIn py-4">
                <h2 className="pt-4">Manage Our All <span className="gulapi-text hero-h1">Users</span> Booking</h2>
                <p className="pb-4">Home / Manage All User </p>
                </div>
            </div>
            <Container className="py-5">
            {
                users.map(user=>
                    <Row className="align-items-center bg-light my-4 p-2 rounded-2 shadow" key={user._id}>
                            <Col xs={4} md={2}>
                                <img src={user.userImg} className="rounded-circle img-fluid" alt="" />
                            </Col>
                            <Col xs={12} md={4}>
                                <p className="gulapi-text">{user.name}</p>
                                <p className="blue-text">{user.email}</p>
                            </Col>
                            <Col xs={12} md={2}>
                                <img src={user.img} className="img-fluid" alt="" />
                            </Col>
                            <Col xs={6} md={2}>
                               <p className="blue-text">{user.status}</p>
                               <p className="text-black">{user.package}</p>
                               <p className="text-black-50">{user.date}</p>
                            </Col>
                            <Col xs={6} md={2}>
                            <Link to={`/manage_all_order/${user._id}`}>
                            <Button className="px-4 rounded-0 py-2 button animate__animated animate__backInUp animate__delay-1s blue-text fw-bold mb-2 w-100">Update</Button> <br/>
                            </Link>
                            <Button onClick={()=>handleDeleteUser(user._id)} className="px-2 rounded-0 button animate__animated animate__backInUp animate__delay-1s blue-text fw-bold w-100">Delete</Button>
                            </Col>
                    </Row>
                )
            }
            </Container>
        </div>
    );
};

export default ManageAllOrder;