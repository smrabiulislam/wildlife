import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Service from '../../Pages/Home/Service/Service';
import Login from '../../Pages/Login/Login';
import MyReviews from '../../Pages/Reviews/MyReviews/MyReviews';
import Review from '../../Pages/Reviews/Review/Review';
import AddService from '../../Pages/Services/AddService';
import Services from '../../Pages/Services/Services';
import SignUp from '../../Pages/SignUp/SignUp';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Service></Service>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
            },
            {
                path: '/review',
                element: <Review></Review>

            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },


        ]

    }
])

export default router;