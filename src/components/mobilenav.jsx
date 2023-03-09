import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';


const Mobilenav = () => {
    const [copiedM, setCopiedM] = useState(false);
    const copyContactM = () => {
        navigator.clipboard.writeText('18683937199').then(() => {
            setCopiedM(true);
            setTimeout(() => {
                setCopiedM(false);
            }, 3000);
        });
    };
    return (
        <div className='flex flex-col text-center p-5'>
            <ul>
                <div className='flex flex-col'>
                    <Link className='m-5' to={'/about'}>About</Link>
                    <Link className='m-5' to={'/more-info'}>FAQ</Link>
                </div>
            </ul>
        </div>
    );
}

export default Mobilenav;
