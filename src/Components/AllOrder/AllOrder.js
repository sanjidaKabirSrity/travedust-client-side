import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { Col, Row ,Container ,Button} from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth'


const AllOrder = () => {
    const [booking, setBooking] = useState([]);

    const {user} = useAuth();
    const email = user?.email;
    const emails = {email};
    const values = Object.values(emails);

    useEffect(()=> {
        axios.post(`https://polar-island-28998.herokuapp.com/booking/byEmail`, values)
        .then((booking) =>{
            
            setBooking(booking.data)
        })
    },[])
    // console.log(booking)

     //  DELETE User Booking 
     const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure , you want to delete!');
        if(proceed){
            axios
            .delete(`https://polar-island-28998.herokuapp.com/booking/${id}`)
            .then((result) => {
                if(result.data.deletedCount > 0){
                    const remaining = booking.filter(event => event._id !==id);
                    setBooking(remaining);
                    swal({
                        title: "Booking Canceled",
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
                <h2 className="pt-4">Your Booking<span className="gulapi-text hero-h1"> Packages</span></h2>
                <p className="pb-4">Home / Packages / Package / Booking Package</p>
                </div>
            </div>
            <Container className="py-5">
                {
                    booking.map(book => <div key={book._id}>
                        <Row className="align-items-center bg-light my-4 p-2 rounded-2 shadow">
                            <Col xs={12} md={4}>
                                <img src={book.img} className="img-fluid" alt="" />
                            </Col>
                            <Col xs={6} md={4}>
                               <h4 className="gulapi-text">{book.package}</h4>
                               <h5 className="blue-text">{book.status}</h5>
                               <h5 className="text-black-50">{book.price} $</h5>
                            </Col>
                            <Col xs={6} md={4}>
                            <Button className="px-4 rounded-0 py-2 button animate__animated animate__backInUp animate__delay-1s blue-text fw-bold" onClick={()=>handleUserDelete(book._id)}>Delete</Button>
                            </Col>
                        </Row>
                    </div>)
                }
                
            </Container>
        </div>
    );
};

export default AllOrder;