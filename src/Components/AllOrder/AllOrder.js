import axios from 'axios';
import React, { useState , useEffect} from 'react';
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
            <div>
                {
                    booking.map(book => <div key={book._id}>
                        <h3>{book.package}</h3>
                        <h4>{book.email}</h4>
                        <p>{book.status}</p>
                        <button onClick={()=>handleUserDelete(book._id)}>Delete</button>
                    </div>)
                }
                
            </div>
        </div>
    );
};

export default AllOrder;