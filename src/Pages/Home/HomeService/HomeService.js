import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Service/ServiceCard';

const HomeService = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://wildlife-server-assignment-11.onrender.com/services-home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-4'>
            <div className='text-left mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to='/services' className=''><button className='mx-2 mt-8 bg-green-700 hover:bg-violet-600 py-2 px-4 text-white rounded-md'>See More</button></Link>
        </div>
    );
};

export default HomeService;