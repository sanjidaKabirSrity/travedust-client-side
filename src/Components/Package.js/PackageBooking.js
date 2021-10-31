import React from 'react';
import { Container } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import { useForm } from 'react-hook-form';

const PackageBooking = ({price}) => {
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const { user } = useFirebase();
    const onSubmit = data => {
        console.log(data)
        
        // fetch('http://localhost:5000/booking', {
        //     method : 'POST' , 
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(result => {
        //     // console.log(result);
        //     if(result.insertedId){
        //         alert('Order Processed Successfully')
        //         // clearTheCart();
        //         reset();
        //     }
        // })
    };
    return (
        <div>
            <Container fluid className="pb-5">
              <div className="bg-light form-container mt-3 mx-auto px-4 py-5 rounded-0 shadow w-50 password-authentication-container animate__animated animate__fadeInDown">
                <h3 className="blue-text mb-5 text-center">
                  Book Your Choosing <span className="gulapi-text section-title">package</span>
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    type="text" 
                    placeholder="Name"
                    {...register("name", {required: true})}
                    value={user?.displayName}
                    style={{ fontSize: "18px" }}
                    className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                     />
                     {errors.name && (
                        <span className="field-error text-danger">User Name is required</span>
                    )}
                    <input 
                    type="email" 
                    placeholder="Email"
                    value={user?.email}
                    {...register("email", {required: true})}
                    style={{ fontSize: "18px" }}
                    className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                     />
                     {errors.email && (
                        <span className="field-error text-danger">Email is required</span>
                    )}
                    {/* <input 
                    type="text"
                    placeholder="Package Name" 
                    {...register("", {required: true})}
                    value={price}
                    style={{ fontSize: "18px" }}
                    className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                     /> */}
                    <input 
                    type="number" 
                    {...register("price", {required: true})}
                    value={price}
                    style={{ fontSize: "18px" }}
                    className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                     />
                     <input 
                        required
                        placeholder="Address"
                        type="text"
                        style={{ fontSize: "18px" }}
                        className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                        {...register("address")} 
                    />
                    <input 
                        required
                        placeholder="City"
                        type="text"
                        style={{ fontSize: "18px" }}
                        className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                        {...register("city")}
                     />  
                    <input
                        required
                        type="date" 
                        style={{ fontSize: "18px" }}
                        className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                        {...register("date")}
                     />
                    <input
                        style={{ fontSize: "18px" }}
                        className="blue-text mb-5 button fw-bold py-1 w-100"
                        type="submit"
                        value="Book Now"
                    />
                    {/* <input type="text" placeholder="address" {...register("address", {required: true})} />
                    <input type="text" placeholder="city" {...register("city", {required: true})} />
                    <input type="text" placeholder="date" {...register("date", {required: true})} /> 

                    <input type="submit" />*/}
                </form>
                {/* 

                    <input 
                        required
                        placeholder="Address"
                        type="text"
                        style={{ fontSize: "18px" }}
                        className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                        {...register("address")} 
                    />
                    <input 
                        required
                        placeholder="City"
                        type="text"
                        style={{ fontSize: "18px" }}
                        className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                        {...register("city")}
                     />  
                    <input
                        required
                        type="date" 
                        style={{ fontSize: "18px" }}
                        className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                        {...register("date")}
                     />
                    <input
                        style={{ fontSize: "18px" }}
                        className="blue-text mb-5 button fw-bold py-1 w-100"
                        type="submit"
                        value="Book Now"
                    />
                </form> */}
              </div>
            </Container>
        </div>
    );
};

export default PackageBooking;