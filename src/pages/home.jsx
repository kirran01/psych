import React from 'react';
import view from '../../public/img/view2.jpg'
import Footer from '../components/footer';
import Wordcard from '../components/wordcard';
import { useState } from 'react';
import { PopupWidget } from "react-calendly";
import CBT from '../../public/img/CBT.png'
import Maslow from '../../public/img/maslow1.png'
import Mindful from '../../public/img/mindful.png'
import Subc from '../../public/img/subc.png'

const Home = () => {
    const [pics, setPics] = useState([{ id: 1, img: CBT, title: 'Cognitive Behavioural Therapy', URL: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/cognitive-behavioural-therapy-cbt/overview/#:~:text=Cognitive%20behavioural%20therapy%20(CBT)%20is,mental%20and%20physical%20health%20problems.' },
    { id: 2, img: Maslow, title: 'Humanistic Therapy', URL: 'https://www.bacp.co.uk/about-therapy/types-of-therapy/humanistic-therapy/#:~:text=The%20humanistic%20approach%20is%20about,with%20the%20world%20around%20you.' },
    { id: 3, img: Mindful, title: 'Mindfulness', URL: 'https://www.verywellhealth.com/mindfulness-therapy-5212796#:~:text=Summary-,Mindfulness%20therapy%20is%20a%20type%20of%20talk%20therapy%20that%20focuses,and%20to%20reduce%20automatic%20responses.' },
    { id: 4, img: Subc, title: 'Psychoanalysis', URL: 'https://tavistockandportman.nhs.uk/care-and-treatment/treatments/psychoanalytic-psychotherapy/#:~:text=Psychoanalytic%20psychotherapy%20is%20a%20talking,may%20contribute%20to%20your%20problems.' }])

    const [wCards, setWCards] = useState([{ id: 1, title: 'Cognitive Behavioral Therapy', description: 'Cognitive behavioural therapy (CBT) is a talking therapy that can help you manage your problems by changing the way you think and behave.', URL: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/cognitive-behavioural-therapy-cbt/overview/#:~:text=Cognitive%20behavioural%20therapy%20(CBT)%20is,mental%20and%20physical%20health%20problems.' },
    { id: 2, title: 'Humanistic Therapy', description: 'The humanistic approach is about free will, self-discovery and achieving your full potential as a human being, rather than concentrating on individual problems or symptoms.', URL: 'https://www.bacp.co.uk/about-therapy/types-of-therapy/humanistic-therapy/#:~:text=The%20humanistic%20approach%20is%20about,with%20the%20world%20around%20you.' },
    { id: 3, title: 'Mindfulness', description: 'Mindfulness therapy is a type of talk therapy that focuses on learning how to be more aware of thoughts, feelings, emotions, surroundings, and situations, and to reduce automatic responses.', URL: 'https://www.verywellhealth.com/mindfulness-therapy-5212796#:~:text=Summary-,Mindfulness%20therapy%20is%20a%20type%20of%20talk%20therapy%20that%20focuses,and%20to%20reduce%20automatic%20responses.' },
    { id: 4, title: 'Psychoanalysis', description: 'Psychoanalytic therapy helps clients gain insight into their unconscious thoughts and behaviors in order to address and resolve conflicts that may be causing emotional distress or problematic patterns of behavior.', URL: 'https://tavistockandportman.nhs.uk/care-and-treatment/treatments/psychoanalytic-psychotherapy/#:~:text=Psychoanalytic%20psychotherapy%20is%20a%20talking,may%20contribute%20to%20your%20problems.' }])
    return (
        <div className='pt-14 flex flex-col items-center fade-in'>
            <div className='relative'>
                <img className='object-cover w-full' src={view} />
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <p className='m-5 text-lg lg:text-3xl md:text-3xl text-center text-white bg-slate-800 rounded-lg p-1'>Kirran Kirpalani - General Counselor, MA</p>
                    <p className='m-3 text-lg md:m-0 lg:m-0 mb-5 lg:text-2xl md:text-2xl text-center text-white bg-slate-800 rounded-lg p-2'>General Adolescent and Adult Counseling Across the Caribbean (ages 13+)</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center p-3 py-10'>
                {
                    wCards.map(wc => {
                        return (
                            <Wordcard key={wc.id} wordCard={wc} />
                        )
                    })
                }
            </div>
            <div className='flex flex-col items-center m-3'>
                <p className='text-xl underline mb-2'>Contact Info</p>
                <p>Phone: 3937199</p>
                <p>Email: Kirran-@live.com</p>
            </div>
            <Footer />
            <PopupWidget
                url="https://calendly.com/kirran-1"
                rootElement={document.getElementById("root")}
                text="Schedule an Appointment"
                textColor="#ffffff"
                color="black"
            />
        </div>
    );
}

export default Home;
