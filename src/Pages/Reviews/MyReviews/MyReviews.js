import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    // const { reviews } = useLoaderData();
    // const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then(data => setReviews(data))
    }, []);
    console.log(reviews);

    return (
        <div>
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
    );
};

export default MyReviews;