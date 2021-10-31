import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link ,useHistory, useLocation } from 'react-router-dom';
import google from '../../Images/google.png';
import useFirebase from '../../Hooks/useFirebase';
import swal from "sweetalert";
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {
        signInUsingGoogle,
        createNewUserByEmail,
        setIsLoading,
      } = useFirebase();
    
      // redirect private route
      const history = useHistory();
      const location = useLocation();
      const redirectUrl = location.state?.from || "/";
    
      // google redirect
      const hanldeGoogleLogin = () => {
        signInUsingGoogle()
          .then((result) => {
            history.push(redirectUrl);
            swal({
              title: "Successfully Sign In!!",
              icon: "success",
            });
          })
          .catch((error) => {
            swal({
              text: error.message,
              icon: "error",
            });
          })
          .finally(() => setIsLoading(false));
      };
    
      // form data
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const { Name, Email, Password } = data;
        createNewUserByEmail(Name, Email, Password);
      };
    return (
        <div>
            <Container fluid className="py-5">
              <div className="bg-light form-container mt-3 mx-auto px-4 py-5 rounded-0 shadow w-50 password-authentication-container animate__animated animate__fadeInDown">
                <h3 className="blue-text mb-5 text-center">
                  Please <span className="gulapi-text section-title">Sign Up</span>
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>  
                  <input 
                    required 
                    type="text"
                    {...register("Name")}
                    placeholder="Name"
                    className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                  />
                {errors.Name && (
                    <span className="field-error">This field is required</span>
                )}
                  <input
                    required
                    type="email"
                    style={{ fontSize: "18px" }}
                    className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                    placeholder="Email"
                    {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.Email && (
                    <span className="field-error">This field is required</span>
                  )}
                  <input
                    required
                    type="password"
                    style={{ fontSize: "18px" }}
                    className="border-0 form-control mb-4 rounded-0 px-3 py-2"
                    placeholder="Password"
                    {...register("Password", {
                      required: true,
                      min: 8,
                      pattern:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
                    })}
                  />
                  {errors.Password && (
                    <span className="field-error">
                      Password should have at least 8 chracters, 2 uppercase, 3
                      lowercase, 1 special character, 2 numbers.
                    </span>
                  )}

                  <input
                    style={{ fontSize: "18px" }}
                    className="blue-text mb-5 button fw-bold py-1 w-100"
                    type="submit"
                    value="Sign Up"
                  />
                  <div className="text-center mb-3">
                    <p className="blue-text d-inline small">
                      Already have an account
                    </p>
                      <Link className="gulapi-text text-decoration-none" to="/login"> Log in</Link>
                  </div>
                </form>
                <div className="border-top pt-4 text-center">
                  <div>
                    <Button
                      onClick={hanldeGoogleLogin}
                      variant="light"
                      className="px-4"
                    >
                      <img src={google} alt="" />
                      <span className="ms-2 blue-text">Continue with Google</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
        </div>
    );
};

export default SignUp;