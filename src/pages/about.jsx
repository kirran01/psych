import React from 'react';
import Footer from '../components/footer';
import pic2 from '../../public/img/k11.jpg'
import DU2 from '../../public/img/DU2.png'
import Bbk2 from '../../public/img/bbk2.jpg'

const About = () => {
    return (
        <div className='pt-16 flex flex-col fade-in'>
            <p className='text-3xl m-5 my-10 mb-12 text-center underline'>About Me</p>
            <div className='p-3 py-6 flex flex-col lg:flex-row md:flex-row bg-slate-50 items-center'>
                <img className='h-60 border-2 border-black m-2 shrink-0' src={pic2} alt="" />
                <div className='flex flex-col items-center'>
                    <p className='italic underline text-lg'>Who Am I?</p>
                    <div className='border-2 p-3 m-3'>
                        <p className='fade-in'>My name is Kirran Kirpalani and I'm a 27-year-old counselor from Trinidad and Tobago 🇹🇹. I'm passionate about helping people overcome their challenges and lead more fulfilling lives. As a licensed counselor with a Bachelor's degree in Psychology from the University of Denver and a Master's degree in Health and Clinical Psychological Sciences from Birkbeck University of London, I bring a wealth of knowledge and experience to my work.</p>
                    </div>
                </div>
            </div>
            <div className='p-3 py-6 mb-10'>
                <p className='italic underline text-lg text-center m-5'>My Approach</p>
                <div className='border-2 p-5'>
                    <p className='fade-in'>My approach to counseling is collaborative and client-centered. I work with clients to identify their goals and develop a personalized plan for achieving them. Whether you're struggling with anxiety, depression, relationship issues, or other challenges, I'm here to help.</p>
                </div>
            </div>
            <div className='p-3 flex flex-col bg-slate-50'>
                <p className='italic underline text-lg text-center'>Education</p>
                <div className='flex justify-center'>
                    <div className='m-5 flex flex-col items-center fade-in border-2 p-3 w-60'>
                        <img className='h-16 m-3 rounded-md border-2 border-black shrink-0' src={DU2} />
                        <p className='italic text-md text-center'>University of Denver</p>
                        <p className='text-center'>Bachelors in Psychology</p>
                    </div>
                    <div className='m-5 flex flex-col items-center fade-in border-2 p-3 w-60'>
                        <img className='h-16 m-3 rounded-md border-2 border-black shrink-0' src={Bbk2} />
                        <p className='italic text-md text-center'>Birkbeck University of London </p>
                        <p className='text-center'>Masters in Psychology</p>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <p className='italic underline text-lg text-center m-5'>Experience</p>
                <div className='border-2 p-3'>
                    <p className='fade-in'>As a seasoned counselor, I have gained expertise in a range of psychological disciplines, including general counseling, Applied Behavioral Analysis (ABA), neuropsychological testing, art therapy, and occupational therapy techniques. With several years of experience across multiple states in the US and in Trinidad and Tobago, I have had the opportunity to work with individuals from diverse backgrounds and cultures. My approach to counseling is grounded in evidence-based practices, and I am committed to helping my clients achieve their goals and live their best lives.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
