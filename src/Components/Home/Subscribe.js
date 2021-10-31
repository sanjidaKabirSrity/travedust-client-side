import React from 'react';
import { Container , Button } from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';

const Subscribe = () => {
    const history = useHistory();
    const handleClick =() => {
        history.push('/login')
    }

    return (
        <div className="extra-banner">
            <Container className="py-5 text-center text-white">
                <div className="animate__animated animate__zoomIn py-4">
                <h2 className="pt-4" style={{fontSize:"40px"}}>Sign Up for 25% Discount</h2>
                <p className="pb-4">Want to get an instant discount for your next tour? Leave your email and sign up for our newsletter with 25% off all our offers.</p>
                <input type="email" required placeholder="Enter Your Email" className="bg-white mb-2 border-0 d-block mx-auto px-3 py-2 w-50 shadow input-box" style={{outline:'none'}}  />
                <Button
                 onClick={handleClick}
                 className="fw-bold px-4 rounded-0 button-hero">
                    <Link activeclassName="btn-selected" className="btn-text nav-link p-0 text-white" to="/login">Subscribe</Link>
                </Button>
                </div>
            </Container>
        </div>
    );
};

export default Subscribe;