import React from 'react';

const ServiceSction = () => {
    return (
        <div className='max-w-6xl mx-auto  mb-[7.56rem]'>
           <div className='flex lg:flex-row md:flex-col justify-between items-center bg-gradient-to-r from-[#11101D] via-[#2b2a2a] to-[#504d4d] rounded-[1.25rem] px-[6.25rem] pb-[6.5rem] pt-[2.5rem]'>
            <div className=''>
            <h1 className='text-[#FFFFFF] mb-6 font-semibold lg:text-5xl md:3xl leading-[1.4rem]'>Let’s try our service now!</h1>
            <span className='text-[#FFFFFF] font-normal leading-6 text-base '>Everything you need to accept card payments <br/>
             and grow your business anywhere on the planet.</span>
            </div>
            <button className=" mt-12 bg-gradient-to-b from-[#DEF9FA] from-[#BEF3F5]  via-[#9DEDF0] via-[#7DE7EB] to-[#5CE1E6] to-[#33BBCF] text-black font-semibold rounded-[0.68rem] py-[1.12rem] px-[2.06rem] " >
   Get Started
      </button>
            </div> 
        </div>
    );
};

export default ServiceSction;