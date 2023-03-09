import React from 'react';
import Footer from '../components/footer';

const Moreinfo = () => {
    return (
        <div className='pt-16 p-3 fade-in'>
            <p className='text-3xl text-center m-5'>Frequently Asked Questions / Additional Info</p>
            <div className='m-2 p-3 fade-in'>
                <p className='underline text-lg mb-3'>Who should consider therapy?</p>
                <p>Therapy can be beneficial for many different types of people who are experiencing a range of difficulties or challenges. Some common reasons people seek therapy include:</p>
                <p>1: Struggling with mental health issues such as depression, anxiety, or trauma.</p>
                <p>2: Experiencing relationship or family issues, such as conflicts or communication difficulties.</p>
                <p>3: Coping with life transitions such as a major loss, career change, or illness.</p>
                <p>4: Dealing with stress or burnout.</p>
                <p>5: Seeking personal growth and self-improvement</p>
            </div>
            <div className='m-2 p-3 fade-in'>
                <p className='underline text-lg mb-3'>What are the different types of therapy/counseling?</p>
                <p>There are many different types of therapy and counseling, each with its own unique approach and techniques. Some of the most common types of therapy are: </p>
                <p><span className='italic underline'>Cognitive Behavioral Therapy (CBT)</span> CBT focuses on identifying and changing negative thought patterns and behaviors that may be contributing to mental health issues.</p>
                <p><span className='italic underline'>Psychodynamic Therapy</span> This type of therapy focuses on exploring the unconscious mind and how past experiences may be influencing current thoughts and behaviors.</p>
                <p><span className='italic underline'>Humanistic Therapy</span> Humanistic therapy emphasizes empathy, unconditional positive regard, and self-actualization, with the goal of helping individuals reach their full potential.</p>
                <p><span className='italic underline'>Mindfulness-Based Therapy</span> This type of therapy involves learning mindfulness techniques to help manage stress, anxiety, and other mental health issues.</p>
            </div>
            <div className='m-2 p-3 fade-in'>
                <p className='underline text-lg mb-3'>Location?</p>
                <p>Currently I am only available for online sessions. In-person sessions will resume august 3rd after the office space is available.</p>
            </div>
          
        <Footer/>
        </div>
    );
}

export default Moreinfo;
