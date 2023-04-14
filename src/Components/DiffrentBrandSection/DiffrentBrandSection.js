import React from 'react';
import airbnb from '../../Assets/airBnb.png'
import binance from '../../Assets/binance.svg'
import coinbase from '../../Assets/coinbase.svg'
import dropbox from '../../Assets/dropbox.svg'
const DiffrentBrandSection = () => {
    return (
        <div className='max-w-6xl mx-auto  my-[8.5rem]'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-[6.25rem]'>
                <img src={airbnb} alt="" />
                <img src={binance} alt="" />
                <img src={coinbase} alt="" />
                <img src={dropbox} alt="" />
            </div>
        </div>
    );
};

export default DiffrentBrandSection;