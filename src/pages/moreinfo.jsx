import React from 'react';
import Footer from '../components/footer';

const Moreinfo = () => {
    return (
        <div className='pt-14 fade-in'>
           <div className="w-full bg-cover bg-center h-60 bg-view">
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <p className="text-white text-md lg:text-2xl md:text+pla -3xl m-3">Frequently Asked Questions (FAQ)</p>
                    </div>
                </div>
            </div>
            <div className='m-2 p-3 fade-in'>
                <p className='underline text-3xl mb-3 text-center'>Location</p>
                <p className='text-center' >I currently have an office space located in Mucorapo rd, Port of Spain. Office hours are 3-5 Monday-Friday. Outside of these hours, online video call and telephone sessions are available 10-5 Monday-Friday.</p>
                <p className='flex justify-center p-6'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.849337813827!2d-61.536550899999995!3d10.668800200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c36086ae879e635%3A0x9ef3cc0e6d4d9b3e!2sMucurapo%20Rd%2C%20Port%20of%20Spain!5e0!3m2!1sen!2stt!4v1687737940929!5m2!1sen!2stt" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
            </div>
            <div className='m-2 p-3 py-10 fade-in bg-slate-50'>
                <p className='underline text-3xl text-center pb-3'>Rates</p>
                <p className='text-center'><span className='underline' >Video call & telephone sessions: </span>$50TTD per hour long session</p>
                <p className='text-center'><span className='underline' >In-person session at office location: </span>$50TTD per hour long session</p>
                <p className='text-center'><span className='underline' >In-house session(I travel to you): </span>Port of Spain: $150TTD / East $200TTD / South $250TTD</p>
            </div>
            <div className='m-2 p-3 py-6 fade-in text-center'>
                <p className='underline text-3xl text-center mb-3'>Who should consider therapy?</p>
                <p>Therapy can be beneficial for many different types of people who are experiencing a range of difficulties or challenges. Some common reasons people seek therapy include:</p>
                <p>1: Struggling with mental health issues such as depression, anxiety, or trauma.</p>
                <p>2: Experiencing relationship or family issues, such as conflicts or communication difficulties.</p>
                <p>3: Coping with life transitions such as a major loss, career change, or illness.</p>
                <p>4: Dealing with stress or burnout.</p>
                <p>5: Seeking personal growth and self-improvement</p>
            </div>
            <Footer />
        </div>
    );
}

export default Moreinfo;
