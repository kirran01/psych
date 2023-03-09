import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';


const Mobilenav = ({ closeModal }) => {
    return (
        <div className='flex flex-col text-center p-5'>
            <ul>
                <div className='flex flex-col'>
                    <Link className='m-5' to={'/about'} onClick={closeModal}>About</Link>
                    <Link className='m-5' to={'/more-info'} onClick={closeModal}>FAQ</Link>
                </div>
            </ul>
        </div>
    );
}

export default Mobilenav;
