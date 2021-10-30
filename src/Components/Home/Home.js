import React from 'react';
import Herosec from '../Home/Herosec';
import HomeService from '../Home/HomeService';
import ServiceHomeSec from './ServiceHomeSec';

const Home = () => {
    return (
        <div>
            <Herosec></Herosec>
            <HomeService></HomeService>
            <ServiceHomeSec></ServiceHomeSec>
        </div>
    );
};

export default Home;