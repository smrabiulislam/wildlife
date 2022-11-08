import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logo from '../../../assets/logo/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const userLogOut = () => {
        logOut()
            .then(() => {
                console.log('userLogOut');
            })
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-20 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div>
                    <Link className='text-lg font-semibold' to='/'><img className='h-24 ' src={logo} /></Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <Link onClick={userLogOut}

                        className=" mx-2 bg-indigo-600 hover:bg-violet-600 py-2 px-4 text-white rounded-md"
                    >
                        Logout
                    </Link> :

                        <>
                            <Link to='/login'><button className='mx-2 bg-green-700 hover:bg-violet-600 py-2 px-4 text-white rounded-md'>Login</button></Link>
                            <Link to='/signup'><button className='mx-2 bg-green-700 hover:bg-violet-600 py-2 px-4 text-white rounded-md'>Sign Up</button></Link>
                        </>

                }
            </div>
            <div className="gap-2">
                {user?.uid && (
                    <div>
                        {user?.photoURL ? (
                            <img
                                className="w-12 h-10 text-white rounded-3xl"
                                alt="user icon"
                                title={user?.displayName}
                                src={user.photoURL}
                            />
                        ) : (
                            <FaUser>
                                title={user?.displayName}
                                className="w-10 h-9 text-white rounded-md"
                            </FaUser>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;