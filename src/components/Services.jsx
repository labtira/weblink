import React from 'react';
import { faGlobe, faLanguage, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
  return (
    <section id="services" className=" py-20 mx-5">
      <div className="container mx-auto text-center sm:max-w-screen-md text-white">
        <h2 className="text-3xl font-bold mb-5">Services</h2>
        <p className='text-grey mb-4'>We provide our customers with many services to ensure a smooth experience.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="bg-black p-6 rounded-lg ">
            <div className='flex justify-center items-center mb-5'>
            <div className=' flex justify-center items-center h-24 w-24 rounded-full bg-darkgrey'>
            <FontAwesomeIcon className='h-8 text-primary' icon={faGlobe} />
            </div>
            </div>
            <h3 className='font-bold mb-2'>Online Courses</h3>
            <p className='text-grey text-xs'>We offer expert online courses to help you master any language from the comfort of your home.</p>
          </div>
          <div className="bg-black p-6 rounded-lg ">
            <div className='flex justify-center items-center mb-5'>
            <div className=' flex justify-center items-center h-24 w-24 rounded-full bg-darkgrey'>
            <FontAwesomeIcon className='h-8 text-primary' icon={faLanguage} />
            </div>
            </div>
            <h3 className='font-bold mb-2'>Language Proficiency Courses</h3>
            <p className='text-grey text-xs'>Comprehensive courses designed to help learners achieve fluency in their chosen language, with options for all levels from beginner to advanced.</p>
          </div>
          <div className="bg-black p-6 rounded-lg ">
            <div className='flex justify-center items-center mb-5'>
            <div className=' flex justify-center items-center h-24 w-24 rounded-full bg-darkgrey'>
            <FontAwesomeIcon className='h-8 text-primary' icon={faVoicemail} />
            </div>
            </div>
            <h3 className='font-bold mb-2'>Conversation Clubs</h3>
            <p className='text-grey text-xs'>Regular group sessions where learners can practice speaking and listening in a relaxed, social setting, guided by experienced facilitators to build confidence and fluency.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
