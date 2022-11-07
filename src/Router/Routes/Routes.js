import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
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