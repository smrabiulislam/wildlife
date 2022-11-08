import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card my-4 card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title">{title}</h2>
                    <p className='text-left my-4'>{description.slice(0, 200)}</p>

                </div>
                <div className=" ">
                    <div className='flex justify-between'>
                        <p className='text-2xl text-left text-orange-600 font-semibold'>Price ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn bg-green-700">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;