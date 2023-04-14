import React from 'react';
import logo from '../Assets/ORBIDO.svg'
import circalogo from '../Assets/orbidoCircLogo.svg'
import facebook from '../Assets/fb.svg'
import twitter from '../Assets/twiter.svg'
import linkdin from '../Assets/linkedin.svg'
const Footer = () => {
    const UsefullLinks = [
        {id:1,name:'Content'},
        {id:2,name:'How it Works'},
        {id:3,name:'Create'},
        {id:4,name:'Explore'},
        {id:5,name:'Terms & Services'},
    ]

    const Communitys = [
        {id:1,name:'Help Center'},
        {id:2,name:'Partners'},
        {id:3,name:'Suggestions'},
        {id:4,name:'Blog'},
        {id:5,name:'Newsletters'},
    ]

    const Partners = [
        {id:1,name:'Our Partner'},
        {id:2,name:'Become a Partner'},
        ]
   
    return (
        <div className='max-w-6xl mx-auto '>
            {/* parent */}
           <div className='grid lg:grid-cols-5 md:grid-cols-1 gap-4 justify-between mb-[2.5rem]'>
            <div className="col-span-2">
                <span className='flex flex-row'>
                <img src={circalogo} alt="" />
                <img src={logo} alt="" />
                </span>
                <span className='text-[#FFFFFF] text-lg leading-8 font-norma'>A new way to make the payments <br/>
                 easy, reliable and secure.</span>
            </div>
            {/* Usefull Links */}
            <div className="div">
                <p className='text-[#FFFFFF] text-xl font-medium leading-[1.68rem]'>Usefull Links</p>
                <ul>
            {
                UsefullLinks.map(link=><li className='text-[#FFFFFF]  font-normal text-base leading-6 hover:text-[#17C7C0]' key={link.id}>{link.name}</li>)
            }
                </ul>
            </div>
            {/* Community */}
            <div className="div">
            <p className='text-[#FFFFFF] text-xl font-medium leading-[1.68rem]'>Community</p>
                <ul>
            {
                Communitys.map(link=><li className='text-[#FFFFFF]  font-normal text-base leading-6 hover:text-[#17C7C0]' key={link.id}>{link.name}</li>)
            }
                </ul>
            </div>
            {/* Partner */}
            <div className="div">
            <p className='text-[#FFFFFF] text-xl font-medium leading-[1.68rem]'>Partner</p>
                <ul>
            {
                Partners.map(link=><li className='text-[#FFFFFF]  font-normal text-base leading-6 hover:text-[#17C7C0]' key={link.id}>{link.name}</li>)
            }
                </ul>
            </div>
            </div> 
            {/* border part */}
<div className='border-t-2 pt-[2.15rem] pb-[1.87rem] flex flex-row justify-between items-center'>
    <p className='text-[#FFFFFF] text-lg leading-[1.68rem] font-norma'>Copyright &copy; 2023 Orbido. All Rights Reserved.</p>
    <span className='flex flex-row gap-4'>
        
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={linkdin} alt="" />
    </span>
</div>
        </div>
    );
};

export default Footer;