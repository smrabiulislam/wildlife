import React from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const HomeService = () => {
    return (
        <div className='mb-4'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <Service></Service>
            <Link to='/services'><button className='mx-2 bg-green-700 hover:bg-violet-600 py-2 px-4 text-white rounded-md'>See More..</button></Link>
        </div>
    );
};

export default HomeService;