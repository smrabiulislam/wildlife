import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const MyReviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then(data => setReviews(data))
    }, []);
    console.log(reviews);

    return (
        <div className='my-20 rounded-2xl shadow-2xl p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                ></ReviewCard>

                )
            }
        </div>
    );
};

export default MyReviews;