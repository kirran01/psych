import React from 'react';
import '../index.css'

const Picturecard = ({ key, pic }) => {
    return (
        <a className='bg-slate-50 border-2 rounded-lg shadow-md m-2 flex flex-col items-center cursor-pointer hover:pulsate' href={`${pic.URL}`} target="_blank">
            <div>
                <img className='h-28 m-1' src={pic.img} />
            </div>
            <div className=''>
                <p className='m-1'>{pic.title}</p>
            </div>
        </a>
    );
}

export default Picturecard;
