import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import Modal from 'react-modal';
import Mobilenav from './mobilenav';
import { useState } from 'react';
import { Link, Router, useNavigate } from 'react-router-dom'

const Nav = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const copyContact = () => {
        navigator.clipboard.writeText('1(868)3937199').then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 3000);
        });
    };

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            borderRadius: '10px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <nav className='fixed w-full'>
            <ul className='flex bg-slate-900 text-white p-4 items-center justify-between'>
                <div className='flex items-center'>
                    <Link className='flex items-center'>
                        <HomeIcon />
                    </Link>
                    <li className='flex lg:collapse md:collapse'>
                        <MenuIcon />
                    </li>
                </div>
                <div className='hidden lg:flex md:flex'>
                    <Link className='mx-2'>
                        About
                    </Link>
                    <Link className='mx-2'>
                        More Info
                    </Link>
                    <Link className='mx-2'>
                        Contact
                    </Link>
                </div>
            </ul>
        </nav>

    );
}

export default Nav;
