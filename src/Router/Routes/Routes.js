import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Services from '../../Pages/Services/Services';


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
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp></SignUp>
            // },
            // {
            //     path: '/checkout/:id',
            //     element: <Checkout></Checkout>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            // },
            // {
            //     path: '/orders',
            //     element: <Orders></Orders>
            // }
        ]

    }
])

export default router;