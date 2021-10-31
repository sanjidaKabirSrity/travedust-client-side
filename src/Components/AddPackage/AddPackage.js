import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddPackage = () => {
    const { register, handleSubmit , reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post(`https://polar-island-28998.herokuapp.com/packages` , data)
        .then(res => {
            // console.log(res);
            if(res.data.insertedId){
                swal({
                        title: "Successfully Added",
                        icon: "success",
                });
                reset();
            }
        })
    };

    return (
        <div>
            <div className="pages-banner py-5 text-center text-white">
                <div className="animate__animated animate__zoomIn py-4">
                <h2 className="pt-4">Add Package Idea For Our <span className="gulapi-text hero-h1">Travedust</span></h2>
                <p className="pb-4">Home / Add Package / package</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="align-items-center d-flex flex-column py-5 mt-5 px-3 animate__animated animate__zoomIn">
                <input 
                    className="bg-light mb-2 border-0 d-block mx-auto px-3 py-2 w-50 shadow input-box" 
                    style={{outline:'none'}} 
                    placeholder="Package Name" 
                    {...register("name", { required: true })}
                 /><br/>
                <textarea 
                    className="bg-light mb-2 border-0 d-block mx-auto px-3 py-2 w-50 shadow input-box" 
                    style={{outline:'none'}} 
                    placeholder="Description" 
                    {...register("description")}
                ></textarea><br/>
                <input 
                    className="bg-light mb-2 border-0 d-block mx-auto px-3 py-2 w-50 shadow input-box" 
                    style={{outline:'none'}}  
                    placeholder="Price" 
                    type="number" 
                    {...register("price")} /><br/>
                <input 
                    className="bg-light mb-2 border-0 d-block mx-auto px-3 py-2 w-50 shadow input-box" 
                    type="url"
                    style={{outline:'none'}}   
                    placeholder="Image URL Link" 
                    {...register("img")} 
                /><br/>
                <input className="blue-text button fw-bold mb-5 py-1 py-2 w-50 shadow input-box" type="submit" value="Add" /><br/>
            </form>
        </div>
    );
};

export default AddPackage;