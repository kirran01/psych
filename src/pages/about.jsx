import React from 'react';
import Footer from '../components/footer';
import DU2 from '../../public/img/DU2.png'
import Bbk2 from '../../public/img/bbk2.jpg'

const About = () => {
    return (
        <div className='pt-16 p-3 flex flex-col items-center'>
            <p className='text-3xl m-3'>About Me</p>
            <div className='p-3'>
                <p className='italic underline'>Who Am I?</p>
                <p>Hello! I'm Kirran Kirpalani, and I'm a 27-year-old counselor from Trinidad and Tobago. I'm passionate about helping people overcome their challenges and lead more fulfilling lives. As a licensed counselor with a Bachelor's degree in Psychology from the University of Denver and a Master's degree in Health and Clinical Psychological Sciences from Birkbeck University of London, I bring a wealth of knowledge and experience to my work.</p>

            </div>
            <div className='p-3'>
                <p className='italic underline'>My Approach</p>
                <p>My approach to counseling is collaborative and client-centered. I work with clients to identify their goals and develop a personalized plan for achieving them. Whether you're struggling with anxiety, depression, relationship issues, or other challenges, I'm here to help.</p>
            </div>
            <div className='p-3 flex flex-col items-center'>
                <p className='italic underline m-3'>Education</p>
                <div className='flex'>
                    <img className='h-16' src={DU2} />
                    <img className='h-16' src={Bbk2} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
