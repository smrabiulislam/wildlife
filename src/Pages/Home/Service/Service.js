import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import Review from '../../Reviews/Review/Review';
import ShortDiscription from './ShortDiscription';


const Service = () => {
    const { _id, img, price, title, description, facility } = useLoaderData();
    const ref = useRef()
    return (
        <div className=' '>
            <div className='grid md:grid-cols-4 md:px-20 py-20 gap-5'>
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
                            <h1 className='mt-2 text-left text-2xl'>Feature</h1>
                            <hr className='my-4 ' />
                            {
                                facility?.map(facilitys => <ShortDiscription
                                    facilitys={facilitys}
                                ></ShortDiscription>
                                )
                            }

                        </div>
                    </div>
                    <div>
                        <Review></Review>
                    </div>
                </div>

                <div>
                    <div className="p-10 rounded-lg shadow-2xl border-2 border-green-700 mx-2">

                        <div className="">
                            <h2 className="text-2xl mb-4">{title}</h2>
                            <hr className='mb-4 ' />
                            <p className='text-xl text-left my-1'>Price: ${price}</p>

                            <Link to='/checkout' className="card-actions">
                                <button className="btn btn-primary w-full  my-1 bg-green-700 hover:bg-violet-600 py-2 px-4 text-white rounded-md">Buy now</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;