import React from 'react';
import img6 from '../../../assets/images/img6.jpg'
import img7 from '../../../assets/images/img7.jpg'
import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.jpg'
import { Link } from 'react-router-dom';

const Bannar = () => {
    return (
        <div className="carousel w-full mb-4">
            <div id="slide1" className="carousel-item relative w-full  ">
                <div>
                    <img src={img7} className="w-full rounded-lg " />
                </div>
                <div className=" mt-16 absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
                    <h1 className='text-6xl  font-bold text-white text-left'>
                        Welcome to our <br />
                        Wildlife <br />
                        Photography<br />
                    </h1>
                </div>
                <div className="  absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4 ">
                    <p className=' text-left text-xl  text-white'>
                        Photography is a profession that exposes <br />
                        you to the real world.
                    </p>
                </div>
                <div className=" -mt-28 absolute flex justify-end transform -translate-y-1/2 left-24  top-3/4 ">
                    <Link to="/signup">
                        <button className="btn btn-warning mr-2">Get Started</button>
                    </Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div>
                    <img src={img6} className="w-full rounded-lg " />
                </div>
                <div className=" mt-16 absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
                    <h1 className='text-6xl font-bold text-white text-left'>
                        Welcome to our <br />
                        Wildlife <br />
                        Photography<br />
                    </h1>
                </div>
                <div className="  absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4 ">
                    <p className='  text-xl  text-white'>
                        Photography is a profession that exposes <br />
                        you to the real world.
                    </p>
                </div>
                <div className=" -mt-28 absolute flex justify-end transform -translate-y-1/2 left-24  top-3/4 ">
                    <Link to="/signup">
                        <button className="btn btn-warning mr-2">Get Started</button>
                    </Link>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div>
                    <img src={img3} className="w-full rounded-lg " />
                </div>
                <div className=" mt-16 absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
                    <h1 className='text-6xl font-bold text-white text-left'>
                        Welcome to our <br />
                        Wildlife <br />
                        Photography<br />
                    </h1>
                </div>
                <div className="  absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4 ">
                    <p className='  text-xl  text-white'>
                        Photography is a profession that exposes <br />
                        you to the real world.
                    </p>
                </div>
                <div className=" -mt-28 absolute flex justify-end transform -translate-y-1/2 left-24  top-3/4 ">
                    <Link to="/signup">
                        <button className="btn btn-warning mr-2">Get Started</button>
                    </Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div>
                    <img src={img4} className="w-full rounded-lg " />
                </div>
                <div className=" mt-16 absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
                    <h1 className='text-6xl font-bold text-white text-left'>
                        Welcome to our <br />
                        Wildlife <br />
                        Photography<br />
                    </h1>
                </div>
                <div className="  absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4 ">
                    <p className='  text-xl  text-white'>
                        Photography is a profession that exposes <br />
                        you to the real world.
                    </p>
                </div>
                <div className=" -mt-28 absolute flex justify-end transform -translate-y-1/2 left-24  top-3/4 ">
                    <Link to="/signup">
                        <button className="btn btn-warning mr-2">Get Started</button>
                    </Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Bannar;