import React from 'react';
import view from '../../public/img/view2.jpg';
import prof1 from '../../public/img/k1.jpg'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Wordcard from '../components/wordcard';
import { useState } from 'react';
import { PopupWidget } from "react-calendly";
import CBT from '../../public/img/CBT.png';
import Maslow from '../../public/img/maslow1.png';
import Mindful from '../../public/img/mindful.png';
import Subc from '../../public/img/subc.png';

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
            <section className='relative m-5'>
                <div className='z-20 relative text-white container text-center mx-auto'>
                    <p className='leading-normal text-lg lg:text-3xl md:text-3xl bg-slate-700 m-10 rounded-md p-2'>Kirran Kirpalani - General Counselor, MA</p>
                    <p className='leading-normal text-lg lg:text-3xl md:text-3xl bg-slate-700 m-10 rounded-md p-2'>General Adolescent and Adult Counseling Across the Caribbean (ages 13+)</p>
                </div>
                <div className='absolute inset-0 h-auto z-10'>
                    <img className='h-full w-full object-fit-cover rounded-md' src={view} />
                </div>
            </section>
            <div className='flex flex-wrap justify-center p-3 py-10'>
                {
                    wCards.map(wc => {
                        return (
                            <Wordcard key={wc.id} wordCard={wc} />
                        )
                    })
                }
            </div>
            <div className='flex flex-col lg:flex-row justify-center flex-wrap items-center m-3 bg-slate-50 w-full p-3 py-5'>
                <div className='mx-10 m-3 shrink-0'>
                    <img className='h-60 border-2 border-black' src={prof1} />
                </div>
                <div className='flex flex-col items-center text-center border-2 p-8 m-3'>
                    <p className='text-xl underline mb-2'>Contact Info</p>
                    <p className='m-1'>Phone: 3937199</p>
                    <p className='m-1'>Email: Kirran-@live.com</p>
                </div>
                <div className='m-5 mx-10'>
                    <Link className='bg-black hover:bg-neutral-800 text-white p-3' to={'/about'}>About</Link>
                </div>
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
