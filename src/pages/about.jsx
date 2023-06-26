import React from 'react';
import Footer from '../components/footer';
import pic2 from '../../public/img/k11.jpg'
import DU2 from '../../public/img/DU2.png'
import Bbk2 from '../../public/img/bbk2.jpg'

const About = () => {
    return (
        <div className='pt-14 flex flex-col fade-in'>
            <div className="w-full bg-cover bg-center h-60 bg-view">
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <p className="text-white text-md lg:text-2xl md:text-3xl m-3">About Me</p>
                    </div>
                </div>
            </div>
            <div className='p-3 py-10 flex flex-col justify-center lg:flex-row md:flex-row items-center'>
                <div className='m-5 mx-10'>
                    <p className='italic underline text-3xl'>Quick Biography</p>
                </div>
                <div className='border-2 p-10 m-5 mx-10 w-96 shrink-0'>
                    <p className='fade-in'>My name is Kirran Kirpalani and I'm a 27-year-old counselor from Trinidad and Tobago. I'm passionate about helping people overcome their challenges and lead more fulfilling lives. As a licensed counselor with a Bachelor's degree in Psychology from the University of Denver and a Master's degree in Health and Clinical Psychological Sciences from Birkbeck University of London, and more than 7 years of industry experience, I bring a wealth of knowledge and expertise to my work.</p>
                </div>
                <div className='m-5 mx-10 shrink-0'>
                    <img className='h-80 border-2 border-black m-2 shrink-0' src={pic2} alt="" />
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center bg-slate-50 p-3 py-10 mb-10'>
                <div className='flex items-center justify-center w-80 h-80 m-5'>
                    <p className='italic underline text-3xl text-center m-5'>My Approach</p>
                </div>
                <div className='border-2 p-10 m-5 w-72 shrink-0'>
                    <p className='fade-in text-center'>My approach to counseling is collaborative and client-centered. I work with clients to identify their goals and develop a personalized plan for achieving them. Whether you're struggling with anxiety, depression, relationship issues, or other challenges, I'm here to help.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row md:flex-row p-3 py-10 items-center justify-center'>
                <div className='mx-5'>
                <p className='italic underline text-3xl text-center m-5'>Experience (Continued)</p>
                </div>
                <div className='border-2 p-10 mx-5'>
                    <p className='fade-in'>As a seasoned counselor, I have gained expertise in a range of psychological disciplines, including individual and group counseling, Applied Behavioral Analysis (ABA), Neuropsychology (administration and evaluation of psychometric tests and evaluations), Art Therapy, Occupational Therapy, Research and more. With several years of experience across multiple states in the US and in Trinidad and Tobago, I have had the opportunity to work with individuals from diverse backgrounds and cultures. My approach to counseling is grounded in evidence-based practices, and I am committed to helping my clients achieve their goals and live their best lives.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
