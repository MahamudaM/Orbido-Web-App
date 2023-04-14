import React, { useState } from 'react';
import bar from '../Assets/bar.svg'
import textLogo from '../Assets/ORBIDO.svg'
import circalLOgo from '../Assets/orbidoCircLogo.svg'
const Nabvar = () => {
    const [open,setOpen] = useState(false)
    const menus = [
        {id:1,name:'Home'},
        {id:2,name:'About Us'},
        {id:3,name:'Features'},
        {id:4,name:'Solution'},
    ]
    return (
        <div>
            <div>
            <nav className='max-w-6xl mx-auto  md:flex md:items-center md:justify-between'>
                 {/* logo */}
<div className='flex justify-between items-center '>
    <span className='cursor-pointer flex flex-row pt-2'>
        <img src={circalLOgo} alt="" />
        <img src={textLogo} alt="" />
    </span>
    {/* toggol manu */}
   <div onClick={()=>setOpen(!open)} className='w-[18.5px] h-[16px] mx-2  cursor-pointer md:hidden block'>
   {
        open? <span className='mb-4' >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
         </span>
        : 
        <span >
        <img src={bar} alt="" />
    </span>
    }
   </div>
  {/* responsive menu */}
</div>
<ul className={`md:flex md:w-auto md:static justify-center absolute w-full  transition-all ease-in duration-400 ${open?'top-16' : 'top-[-400px]'}`}>
    {
        menus.map(menu=> <li className='px-10 my-6 md:my-0' key={menu.id}>
        <a href="/" className='text-[#FFFFFF]  font-semibold text-[1rem] tracking-[0.2px] hover:text-[#17C7C0] duration-500'>{menu.name}</a>
    </li>)
    }
   
    
</ul>
            </nav>
            </div>
        </div>
    );
};

export default Nabvar;