import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';
import { Container , Button } from 'react-bootstrap';

const UpdateUser = () => {
    const {singleUserId} = useParams();
    const [user , setUser] = useState({});

    useEffect(()=>{
        fetch(`https://polar-island-28998.herokuapp.com/booking/${singleUserId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    } , [singleUserId])

    const {_id, userImg, img, email,  status, name} = user;

    console.log(user.status)
    const handleApproveStatus = (id) => {
        user.status = "Approved";
        setUser(user);

        const proceed = window.confirm('Are you sure , you want to delete!');
        if(proceed){
            axios.put(`https://polar-island-28998.herokuapp.com/booking/${singleUserId}`, user)
            .then(result => {
                if(result.data?.modifiedCount > 0){
                    swal({
                        title:"Booking Successfully approved",
                        icon:"success",
                    })
                }
            })
        }
    }
    return (
        <div>
            <div className="pages-banner py-5 text-center text-white">
                <div className="animate__animated animate__zoomIn py-4">
                <h2 className="pt-4"><span className="gulapi-text hero-h1">Update </span> This User</h2>
                <p className="pb-4">Home / Manage All User / Update User</p>
                </div>
            </div>
            <Container>
            <div className="text-center my-5 py-5 px-2 text-center">
                <div style={{width:"200px"}} className=" mx-auto">
                <img src={img} className="img-fluid" alt="" />
                </div>
                <h4 className="gulapi-text">{status}</h4>
                <Button onClick={()=>handleApproveStatus(_id)} className="px-4 rounded-0 py-2 button animate__animated animate__backInUp animate__delay-1s blue-text fw-bold" >Update</Button>
            </div>
            </Container>
        </div>
    );
};

export default UpdateUser;