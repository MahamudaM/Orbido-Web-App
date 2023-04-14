import React from 'react';

const GetStartButton = ({text}) => {
    
    return (
      <button className="bg-gradient-to-r from-[#DEF9FA] from-[#BEF3F5]  via-[#9DEDF0] via-[#7DE7EB] to-[#5CE1E6] to-[#33BBCF] text-black font-semibold rounded-[0.68rem] py-[1.12rem] px-[2.06rem]" >
        {text}
      </button>
    );
};

export default GetStartButton;