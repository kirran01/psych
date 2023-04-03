import React from 'react';
import Footer from '../components/footer';

const Moreinfo = () => {
    return (
        <div className='pt-16 p-3 fade-in'>
            <p className='text-3xl text-center m-5'>Frequently Asked Questions / Additional Info</p>
            <div className='m-2 p-3 fade-in'>
                <p className='underline text-lg mb-3'>Location</p>
                <p>Currently I am only available for online sessions. In-person sessions will resume August 3rd after the office space is available.</p>
            </div>
            <div className='m-2 p-3 fade-in'>
                <p className='underline text-lg mb-3'>Cost</p>
                <p>My current rate is 200TTD per hour long session.</p>
            </div>
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
                <p className='underline text-lg mb-3'>What are some different types of therapy/counseling?</p>
                <p className='mb-3'>There are many different types of therapy and counseling, each with its own unique approach and techniques. Some of the most common types of therapy are: </p>

                <span className='italic underline'>Cognitive Behavioral Therapy (CBT)</span>
                <p className='my-3'>Cognitive-behavioral therapy (CBT) is a type of psychotherapy that aims to identify and change negative thought patterns and behaviors that contribute to mental health issues. It is based on the idea that our thoughts, emotions, and behaviors are interconnected and that by changing our thoughts and behaviors, we can improve our emotional wellbeing. CBT is a collaborative and goal-oriented approach that involves working with a therapist to develop skills and strategies to manage symptoms, solve problems, and improve overall functioning. CBT typically involves structured sessions that focus on specific issues and goals, and may include techniques such as cognitive restructuring, behavioral activation, and exposure therapy. Research has shown that CBT can be effective for a range of mental health conditions, including depression, anxiety, PTSD, and eating disorders.
                </p>
                <span className='italic underline mb-3'>Psychodynamic Therapy</span>
                <p className='my-3'>Psychodynamic therapy is a form of talk therapy that focuses on the unconscious mind and how it influences our thoughts, emotions, and behaviors. It is based on the premise that early childhood experiences shape our personality and behavior patterns, which may be outside of our awareness.
                    In psychodynamic therapy, the therapist helps the client explore and understand their unconscious thoughts and feelings. This is done through techniques such as free association, dream analysis, and transference. The goal of the therapy is to increase the client's self-awareness and insight into their patterns of behavior, enabling them to make positive changes in their lives
                    The therapist is seen as a supportive guide who helps the client navigate their unconscious material. Psychodynamic therapy is a long-term therapy that requires a strong therapeutic relationship between the client and therapist. It is an effective treatment for various mental health issues such as depression, anxiety, and personality disorders.</p>
                <span className='italic underline mb-3'>Humanistic Therapy</span>
                <p className='my-3'>Humanistic therapy is a form of talk therapy that emphasizes the individual's inherent worth and potential for growth. It is based on the belief that every person has an innate desire to reach their full potential and that this can be achieved through self-exploration and personal growth.
                    In humanistic therapy, the therapist provides a supportive, non-judgmental environment for the client to explore their feelings, thoughts, and behavior. The therapist works collaboratively with the client to help them gain self-awareness, self-acceptance, and develop a greater sense of responsibility for their own lives.
                    The therapy also emphasizes the importance of the present moment and the here-and-now experience, rather than focusing on past experiences or future goals. It is a client-centered approach, with the therapist actively listening and reflecting back the client's thoughts and feelings.
                    Humanistic therapy has been found to be effective for various mental health issues such as depression, anxiety, and relationship problems. It can also help individuals with personal growth and development, enhancing their overall sense of well-being and quality of life.</p>
                <span className='italic underline mb-3'>Mindfulness-Based Therapy</span>
                <p className='my-3'>Mindfulness therapy is a type of psychotherapy that aims to cultivate present-moment awareness and non-judgmental acceptance of one's thoughts, feelings, and experiences. It is based on the principles of mindfulness meditation, which involves paying attention to one's thoughts, feelings, and physical sensations in a non-judgmental way.
                    In mindfulness therapy, the therapist teaches the client mindfulness techniques such as breathing exercises, body scans, and guided meditations. The goal is to help the client develop the ability to observe their thoughts and emotions without getting caught up in them, thereby reducing emotional reactivity and increasing cognitive flexibility.
                    The therapy is effective for various mental health issues such as anxiety, depression, and stress-related disorders. It has also been found to be helpful in improving emotional regulation, enhancing self-awareness, and reducing rumination and worry.
                    Mindfulness therapy can be practiced individually or in a group setting. It is often used in combination with other therapies, such as cognitive-behavioral therapy, to achieve a more comprehensive treatment approach.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Moreinfo;
