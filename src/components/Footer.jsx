import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/img/WEBLINKW.png';
import { faDiscord, faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="contact" className="text-white py-20  bg-darkgrey ">
      <div className="container mx-auto px-5 sm:max-w-screen-md">
        <div className='sm:flex sm:justify-between text-xs'>
          <div>
          <img src={logo} alt="" className='h-12 mb-5'/>
            <p className='mb-5 max-w-sm text-lightgrey'>A great plateform to help you master any language. Join us to achieve fluency quickly and effectively. Unlock the world through language!</p>
          </div>
          <div className='block mb-5'>
            <h1 className='mb-2 font-bold text-sm'>School</h1>
            <a href="#" className='w-fit'><div className='mb-1 hover:text-primary text-lightgrey flex items-center'><FontAwesomeIcon className='w-2 h-2 mr-1' icon={faGreaterThan} />About Us</div></a>
            <a href="#" ><div className='mb-1 hover:text-primary text-lightgrey flex items-center'><FontAwesomeIcon className='w-2 h-2 mr-1' icon={faGreaterThan} />Services</div></a>
          </div>
          <div className='block mb-5'>
          <h1 className='mb-2 font-bold text-sm'>Useful Links</h1>
            <a href="#" ><div className='mb-1 hover:text-primary text-lightgrey flex items-center'><FontAwesomeIcon className='w-2 h-2 mr-1' icon={faGreaterThan} />Courses</div></a>
            <a href="#" ><div className='mb-1 hover:text-primary text-lightgrey flex items-center'><FontAwesomeIcon className='w-2 h-2 mr-1' icon={faGreaterThan} />Subscribe</div></a>
          </div>
          <div className='block mb-5'>
          <h1 className='mb-2 font-bold text-sm'>Contact Details</h1>
            <p className='mb-1 text-lightgrey'>Casablanca</p>
            <a href="#" ><div className='text-primary mb-1'>View on Google map</div></a>
            <a href="#" ><div className='mb-1 hover:text-primary text-lightgrey flex items-center'><FontAwesomeIcon className='w-2 h-2 mr-1' icon={faGreaterThan} />Contact</div></a>
          </div>
        </div>
        <div className='sm:flex sm:justify-between sm:items-center sm:text-start text-center'>
          <div className='flex justify-center text-lightgrey mb-2.5'>
          <p className="copyright text-xs">
          &copy; 2024 All Right Reserved by <a href="https://labtira.com/#" className="copyright-link">LABTIRA</a>.
        </p>
          </div>
          <div className='flex justify-center text-xs text-lightgrey'>
          <a href="#"><FontAwesomeIcon className='w-4 h-4 mr-2 hover:text-primary' icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon className='w-4 h-4 mr-2 hover:text-primary' icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon className='w-4 h-4 mr-2 hover:text-primary' icon={faTiktok} /></a>
          <a href="#"><FontAwesomeIcon className='w-4 h-4 mr-2 hover:text-primary' icon={faDiscord} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
