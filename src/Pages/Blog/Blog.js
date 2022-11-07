import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-20 grid md:grid-cols-4 sm:grid-cols-1'>
            <div className='md:mx-2 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                <h1 className='mb-2 text-xl text-left text-red-700'>Difference between SQL and NoSQL</h1>
                <p className='text-sm text-left'>SQL is the programming language used to interface with relational databases.
                    (Relational databases model data as records in rows and tables with logical links between them).
                    NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='md:mx-2 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                <h1 className='mb-2 text-xl text-left text-red-700'>What is JWT, and how does it work?</h1>
                <p className='text-sm text-left'>SON Web Token (JWT) is an open standard (RFC 7519) for securely
                    transmitting information between parties as JSON object. It is compact, readable and digitally
                    signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
            </div>
            <div className='md:mx-2 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                <h1 className='mb-2 text-xl text-left text-red-700'>What is the difference between javascript and NodeJS?</h1>
                <p className='text-sm text-left'>JavaScript is a simple programming language that can be used with any browser
                    that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution
                    environment for the JavaScript programming language.</p>
            </div>
            <div className='md:mx-2 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                <h1 className='mb-2 text-xl text-left text-red-700'>How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-sm text-left'>NodeJS receives multiple client requests and places them into EventQueue.
                    NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an
                    infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;