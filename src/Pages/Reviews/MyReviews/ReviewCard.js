import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className='md:mx-2 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-green-700' >

            <div className=' -mb-4 ml-2 text-left'>{review.review}</div>
            <div className=" mt-8 flex items-center space-x-3">
                <div className="avatar">
                    <div className="rounded-full w-12 h-12">
                        <img src={review.userImg} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold text-left">{review.name}</div>
                    <div className="text-sm opacity-50">{review.email}</div>
                </div>
            </div>
            <div>
                <h1 className='my-4 text-left font-bold'>Service: {review.serviceTitle}</h1>
            </div>
            <div className='flex justify-between'>
                <button className="btn bg-green-700">Update</button>
                <button className="btn bg-green-700">Delete</button>
            </div>
        </div>
    );
};

export default ReviewCard;