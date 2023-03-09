import React from 'react';
import Footer from '../components/footer';
import DU2 from '../../public/img/DU2.png'
import Bbk2 from '../../public/img/bbk2.jpg'

const About = () => {
    return (
        <div className='pt-16 p-3 flex flex-col fade-in'>
            <p className='text-3xl m-5 text-center'>About Me</p>
            <div className='p-3'>
                <p className='italic underline text-lg'>Who Am I?</p>
                <p className='fade-in'>Hello! I'm Kirran Kirpalani, and I'm a 27-year-old counselor from Trinidad and Tobago 🇹🇹. I'm passionate about helping people overcome their challenges and lead more fulfilling lives. As a licensed counselor with a Bachelor's degree in Psychology from the University of Denver and a Master's degree in Health and Clinical Psychological Sciences from Birkbeck University of London, I bring a wealth of knowledge and experience to my work.</p>
            </div>
            <div className='p-3'>
                <p className='italic underline text-lg'>My Approach</p>
                <p className='fade-in'>My approach to counseling is collaborative and client-centered. I work with clients to identify their goals and develop a personalized plan for achieving them. Whether you're struggling with anxiety, depression, relationship issues, or other challenges, I'm here to help.</p>
            </div>
            <div className='p-3 flex flex-col'>
                <p className='italic underline text-lg'>Education</p>
                <div className=''>
                    <div className='my-2 fade-in'>
                        <img className='h-16 my-2 rounded-md shadow-md' src={DU2} />
                        <p className='italic text-md'>University of Denver Bachelors of Arts in Psychology</p>
                    </div>
                    <div className='my-2 fade-in'>
                        <img className='h-16 my-2 rounded-md' src={Bbk2} />
                        <p className='italic text-md'>Birkbeck University of London Masters in Health and Clinical Psychological Sciences</p>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <p className='italic underline text-lg'>Experience</p>
                <p className='fade-in'>As a seasoned counselor, I have gained expertise in a range of psychological disciplines, including general counseling, Applied Behavioral Analysis (ABA), neuropsychological testing, art therapy, and occupational therapy techniques. With several years of experience across multiple states in the US and in Trinidad and Tobago, I have had the opportunity to work with individuals from diverse backgrounds and cultures. My approach to counseling is grounded in evidence-based practices, and I am committed to helping my clients achieve their goals and live their best lives.</p>
            </div>
            <Footer />
        </div>
    );
}

export default About;
