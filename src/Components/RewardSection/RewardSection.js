import React from 'react';
import star from '../../Assets/Star.png'
import sand from '../../Assets/Send.png'
import secure from '../../Assets/secure.png'
// import { RiSecurePaymentLine } from 'react-icons/fa';

const RewardSection = () => {
  
    return (
        <div>
            <div className='max-w-6xl mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-[4.87rem] '>
                {/* left side content */}
            <div className=''>
<h1 className=' text-5xl text-[#FFFFFF] font-semibold tracking-[1%] leading-[4.8rem]'>You do the business,<br/>
 we’ll handle the money.</h1>
  <span className='text-[#FFFFFF] text-[1.12rem] leading-[1.91rem] font-normal'>With the right credit card, you can improve your financial life <br/>
   by building credit, earning rewards and saving money. But <br/>
   with hundreds of credit cards on the market.</span> <br/>
   <button className=" mt-12 bg-gradient-to-b from-[#DEF9FA] from-[#BEF3F5]  via-[#9DEDF0] via-[#7DE7EB] to-[#5CE1E6] to-[#33BBCF] text-black font-semibold rounded-[0.68rem] py-[1.12rem] px-[2.06rem] " >
   Get Started
      </button>
   {/* <GetStartButton text='Get Started'></GetStartButton> */}
            </div>
            {/*right side content*/}
            <div className='mt-16 flex flex-col '>
{/* reward */}
<div className={`flex flex-row gap-[2.37rem] `}>
            <img className='h-7 w-8' src={star} alt="" />
            <div className='flex flex-col'>
<h4 className='text-[#FFFFFF] font-semibold font-xl capitalize leading-[1.46rem] tracking-[1%]'>Rewards</h4>
<span className='text-[#FFFFFF] font-normal leading-6 text-base '>The best credit cards offer some tantalizing <br/>
 combinations of promotions and prizes</span>
            </div>
            </div>
{/* send mony */}
<div className={`flex flex-row gap-[2.37rem] my-9`}>
            <img className='h-7 w-8 bg-[#00F6FF]' src={secure} alt="" />
            <div className='flex flex-col'>
<h4 className='text-[#FFFFFF] font-semibold font-xl capitalize leading-[1.46rem] tracking-[1%]'>100% Secured</h4>
<span className='text-[#FFFFFF] font-normal leading-6 text-base '>We take proactive steps make sure your <br/>
information and transactions are secure</span>
            </div>
            </div>
{/* transfar */}
<div className={`flex flex-row gap-[2.37rem] `}>
            <img className='h-7 w-8' src={sand} alt="" />
            <div className='flex flex-col'>
<h4 className='text-[#FFFFFF] font-semibold font-xl capitalize leading-[1.46rem] tracking-[1%]'>Balance Transfer</h4>
<span className='text-[#FFFFFF] font-normal leading-6 text-base '>A balance transfer credit card can save you<br/>
a lot of money in interest charges.</span>
            </div>
            </div>
            </div>
            </div> 
        </div>
    );
};

export default RewardSection;