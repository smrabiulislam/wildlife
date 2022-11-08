import React from 'react';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import HomeService from '../HomeService/HomeService';
import MidHero from '../MidHero/MidHero';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <HomeService></HomeService>
            <MidHero></MidHero>
        </div>
    );
};

export default Home;