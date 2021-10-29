import React from 'react';
import { Container , Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import google from '../../Images/google (1).png'

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub, loginWithEmail, setIsLoading } =useFirebase();

    // form data
    const {
        register,
        handleSubmit, 
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { Email, Password } = data;
        // handleEmailLogin(Email, Password);
    };

    return (
        <div>
            <Container fluid className="py-5">
              <div className="bg-light form-container mt-3 mx-auto px-4 py-5 rounded-0 shadow w-50 password-authentication-container">
                <h3 className="blue-text mb-5 text-center">
                  Please <span className="gulapi-text section-title">LogIn</span>
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    value="LogIn"
                  />
                  <div className="text-center mb-3">
                    <p className="blue-text d-inline small">
                      New to Travedust? 
                    </p>
                      <Link className="gulapi-text text-decoration-none" to="/signup"> Create a account</Link>
                  </div>
                </form>
                <div className="border-top pt-4 text-center">
                  <div>
                    <Button
                      onClick={signInUsingGoogle}
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

export default Login;

