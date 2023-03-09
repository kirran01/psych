import React from 'react';
import DU from '../../public/img/DU.png'
import Bbk from '../../public/img/birkbeck.png'

const Footer = () => {
    return (
        <div className='m-3'>
            <p className='text-center text-sm italic'>"We cannot teach people anything; we can only help them discover it within themselves."</p>
            <div className='flex justify-center items-center m-2'>
                <img className='h-14' src={DU} />
                <img className='h-12' src={Bbk} />
            </div>

        </div>
    );
}

export default Footer;
