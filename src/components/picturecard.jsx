import React from 'react';

const Picturecard = ({ key, pic }) => {
    return (
        <div className='bg-slate-50 border-2 rounded-lg shadow-md m-2 flex flex-col items-center'>
            <div>
                <img className='h-28 m-1' src={pic.img} />
            </div>
            <div className=''>
                <p className='m-1'>{pic.title}</p>
            </div>
        </div>
    );
}

export default Picturecard;
