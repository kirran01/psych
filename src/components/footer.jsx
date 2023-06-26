import React from 'react';
import DU from '../../public/img/DU.png'
import Bbk from '../../public/img/birkbeck.png'
import FB from '../../public/img/fb1.png'
import Insta from '../../public/img/instagram.png'

const Footer = () => {
    return (
        <div className='m-5 mt-10'>
            <p className='text-center text-sm italic'>"We cannot teach people anything; we can only help them discover it within themselves." - Galileo</p>
            <div className='flex justify-center items-center m-2'>
                <img className='h-14 px-1' src={DU} />
                <img className='h-12 px-1' src={Bbk} />
                <a href="https://www.facebook.com/profile.php?id=100092720326874" target="_blank"><img className='h-12 px-1' src={FB} /></a>
                <a href="https://www.instagram.com/kirpalanicounselor" target="_blank"><img className='h-14 px-1' src={Insta} /></a>

            </div>
        </div>
    );
}

export default Footer;
