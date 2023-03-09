import React from 'react';
import Prof from '../../public/img/prof.png'
import Footer from '../components/footer';
import Picturecard from '../components/picturecard';
import { useState } from 'react';
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";
import CBT from '../../public/img/CBT.png'
import Maslow from '../../public/img/maslow1.png'
import Mindful from '../../public/img/mindful.png'
import Subc from '../../public/img/subc.png'

const Home = () => {
    const [pics, setPics] = useState([{ id: 1, img: CBT, title: 'Cognitive Behavioural Therapy', caption: '' }, { id: 2, img: Maslow, title: 'Humanistic Therapy', caption: '' }, { id: 3, img: Mindful, title: 'Mindfulness', caption: '' }, { id: 4, img: Subc, title: 'Psychoanalysis', caption: '' }])
    return (
        <div className='pt-16 p-3 flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <p className='m-3 text-3xl text-center'>Kirran Kirpalani - General Counselor, MA</p>
                <p className='m-3 text-2xl text-center'>General Adolescent and Adult Counseling Accross the Caribbean, ages 13+</p>
                <img className='w-32 h-32 m-2 object-cover rounded-full border-4 border-black' src={Prof} />
            </div>
            <div className='flex flex-col items-center m-3'>
                <p className='text-xl underline mb-2'>Contact Info</p>
                <p>Phone: 3937199</p>
                <p>Email: Kirran-@live.com</p>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    pics.map(p => {
                        return (
                            <Picturecard key={p.id} pic={p} />
                        )
                    })
                }
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
