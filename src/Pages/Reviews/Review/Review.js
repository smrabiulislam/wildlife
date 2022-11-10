import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Review = () => {

    const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    //review add handler
    const AddReview = (event) => {
        event.preventDefault();
        const serviceId = _id;
        const userImg = user.photoURL;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const review = event.target.comment.value;
        const reviewData = { serviceId, userImg, name, email, review };

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Your comment successfully upload')
                    event.target.reset();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => {
                const showReview = data.filter(
                    (shw) => shw.serviceId === _id
                );
                setReviews(showReview);
            });
    }, [_id]);
    console.log(reviews);

    return (
        <div className='text-left ml-4 '>

            <div className='my-20 rounded-2xl shadow-2xl p-4'>
                <h1 className='mb-4 text-2xl font-semibold'>Total Reviews: {reviews.length}</h1>
                {
                    reviews.map(review => <tbody key={review._id}>

                        <tr>
                            <td>
                                <div className=' -mb-4 ml-8'>{review.review}</div>
                                <div className=" my-8 flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="rounded-full w-12 h-12">
                                            <img src={review.userImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{review.name}</div>
                                        <div className="text-sm opacity-50">{review.email}</div>
                                    </div>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                    )
                }
            </div>

            <form onSubmit={AddReview} >


                <div className="w-full p-8 my-4 md:px-12  mx-auto   rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold uppercase text-3xl">Leave a Comment</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input name='name' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Name*" required />

                        <input defaultValue={user?.email} readOnly name='email' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email*" required />

                    </div>
                    <div className="my-4">
                        <textarea name='comment' placeholder="Review*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button type='submit' className="uppercase text-sm font-bold tracking-wide bg-green-700 text-gray-100 p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Review;