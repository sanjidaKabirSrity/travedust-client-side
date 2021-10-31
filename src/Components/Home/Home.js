import React from 'react';
import Herosec from '../Home/Herosec';
import HomeService from '../Home/HomeService';
import ServiceHomeSec from './ServiceHomeSec';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Herosec></Herosec>
            <HomeService></HomeService>
            <ServiceHomeSec></ServiceHomeSec>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;