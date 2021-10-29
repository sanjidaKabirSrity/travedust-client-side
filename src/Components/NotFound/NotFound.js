import React from 'react';
import { Button } from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom';
import ErrorImg from '../../Images/no_result.gif';

const NotFound = () => {
    const history = useHistory();
    const handleClick =() => {
        history.push('/home')
    }

    return (
        <div>
            <div className="py-5 text-center">
                <img src={ErrorImg} alt="" className="img-fluid" />
                <h2 className="blue-text">Sorry! No result found :( </h2>
                <p>We're sorry what you were looking for. Please try another way</p>
                <Button onClick={handleClick} variant='' className="fw-bold mx-4 px-4 rounded-0 button">
                    <Link className="btn-text nav-link p-0 blue-text" to="/home">Go Back Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;