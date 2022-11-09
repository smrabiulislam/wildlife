import React from 'react';
import person from '../../../assets/images/img9.png'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full " />

                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5  text-5xl font-bold">
                        Build A Moment with <br />
                        One Snap Shoot</h1>
                    <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-2">
                        <div className="border-l-2 mt-10">
                            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                                <div className="flex-auto text-center">
                                    <div className="w-full pt-4 flex flex-col justify-center items-center">
                                        <div className="mb-4">
                                            <div className="radial-progress bg-accent text-accent-content border-4 border-accent">70%</div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl text-white font-bold">Animal Photography</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>
                                <div className="flex-auto text-center">
                                    <div className="w-full pt-4 flex flex-col justify-center items-center">
                                        <div className="mb-4">
                                            <div className="radial-progress bg-accent text-accent-content border-4 border-accent">60%</div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl text-white font-bold">After Event Videography</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>
                                <div className="flex-auto text-center">
                                    <div className="w-full pt-4 flex flex-col justify-center items-center">
                                        <div className="mb-4">
                                            <div className="radial-progress bg-accent text-accent-content border-4 border-accent">80%</div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl text-white font-bold">Aesthetic Editing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;