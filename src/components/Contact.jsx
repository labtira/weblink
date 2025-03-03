import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="Contact" className=" py-20 mx-5">
      <div className="container mx-auto text-center sm:max-w-screen-md text-white">
        <h1 className='text-center text-3xl mb-8 font-bold'>Have Question ? Get in touch!</h1>
        <p className='text-center text-xs text-grey mb-8'>Feel free to ask.</p>
        <div className='flex justify-center items-center'>
        <a href="#courses" className="bg-primary text-white mb-10 px-5 py-2 flex items-center rounded-md text-xs hover:bg-blue-700 font-bold"><FontAwesomeIcon className="h-4 w-4 mr-1" icon={faWhatsapp} />Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
