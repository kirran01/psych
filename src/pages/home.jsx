import React from 'react';
import Prof from '../../public/img/prof.png'

const Home = () => {
    return (
        <div className='pt-16 p-3 flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <p className='m-2 text-2xl text-center'>Kirran Kirpalani - General Counselor, MA</p>
                <p className='m-2 text-center'>General Adolescent and Adult Counseling Accross the Caribbean, ages 13+</p>
                <img className='w-32 h-32 m-2 object-cover rounded-full border-4 border-black' src={Prof} alt="" />
            </div>
            <div>
                <p>Book an appointment</p>
            </div>
        </div>
    );
}

export default Home;
