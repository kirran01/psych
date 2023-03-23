import React from 'react';
import { useState } from 'react';

const Wordcard = ({ wordCard }) => {
    const[expand, setExpand]=useState(false)
    console.log(wordCard, 'wc')
    return (
        <div className='flex flex-col items-center text-center p-3 border-2 m-2 w-60'>
            <p className='text-lg underline m-2'>{wordCard.title}</p>
            <p className='text-md'>{wordCard.description}</p>
            {/* <a className='text-sm underline m-2 text-cyan-600' href={`${wordCard.URL}`}>More info</a> */}
        </div>
    );
}

export default Wordcard;
