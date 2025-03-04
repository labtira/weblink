import React from 'react';
import banner from '../assets/img/Banner1.png';

const HeroSection = () => {
  return (
  <section style={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className=" text-gray-800 py-24  px-10 w-full left-0 flex items-center ">
      <div  className="container text-white mx-auto  sm:max-w-screen-md pt-14">
        <h2 className="text-3xl font-bold mb-4 max-w-lg">Master Any Language with Our <span className='text-primary'>Expert</span> Courses!</h2>
        <p className="text-sm mb-8 text-lightgrey max-w-sm">Welcom to our Language Center, we offer expert courses to help you master any language. Join us to achieve fluency quickly and effectively. Unlock the world through language!</p>
        {/* <div className='flex justify-center'>
        <a href="#courses" className="bg-primary text-white px-5 py-3 w-fit text-sm rounded-md hover:bg-blue-700 font-bold flex items-center"><UserAddIcon className='w-5 h-5 mr-1'/>Join Now !</a>
        </div> */}
        
      </div>
    </section>
  );
};

export default HeroSection;
