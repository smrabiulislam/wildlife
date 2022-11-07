import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white rounded-lg">
            <div>
                <Link to="/">
                    <img className=' h-24 ' src={logo} />
                </Link>
                <p className='pl-12'>WILD LIFE<br />Photography</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="#" className="link link-hover">Branding</Link>
                <Link to="#" className="link link-hover">Design</Link>
                <Link to="#" className="link link-hover">Marketing</Link>
                <Link to="#" className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="#" className="link link-hover">About us</Link>
                <Link to="#" className="link link-hover">Contact</Link>
                <Link to="#" className="link link-hover">Jobs</Link>
                <Link to="#" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="#" className="link link-hover">Terms of use</Link>
                <Link to="#" className="link link-hover">Privacy policy</Link>
                <Link to="#" className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;