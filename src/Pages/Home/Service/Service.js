import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import Review from '../../Reviews/Review/Review';



const Service = () => {
    const { _id, img, price, title, description } = useLoaderData();
    const ref = useRef()
    return (
        <div>
            <div className=' md:px-20 py-20 gap-5'>
                <div className="col-span-3 p-10 rounded-lg shadow-2xl border-2 border-green-700 mx-2">
                    <div ref={ref} className=' my-5'>
                        <div className='col-span-1'>
                            <figure><img className=' h-68' src={img} alt="car!" /></figure>
                        </div>
                        <div className="pl-4">
                            <h2 className="text-2xl mt-4 text-left text-semibold">{title}</h2>
                            <div className='flex my-2'>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                            </div>
                            <hr className='my-4 ' />
                            <p className='text-left'>{description}</p>
                            <hr className='my-4 ' />
                        </div>
                    </div>
                    <div>
                        <Review></Review>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;