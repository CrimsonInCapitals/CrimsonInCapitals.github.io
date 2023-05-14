// import './App.css';
import React from 'react';
import { H1, P } from '../components/StyledComponents';

const Contact = ()=> {
    return (
    <main className='home'>
        <section>
            <H1>Reach Out</H1>
            <P className='contact'><a href="mailto:harrison.colexcrimsonincapitals.com">Email</a> me, <a href="tel:+07922407596" target="_blank" rel='noreferrer'>text</a>  me, or send a message on <a href="http://m.me/Crimsonincapitals" target="_blank"rel='noreferrer'>Facebook</a>, <a href="https://www.instagram.com/crimson.svg/" target="_blank"rel='noreferrer'>Instagram</a> or <a href="https://www.linkedin.com/in/harrison-cole-crimson-in-capitals/" target="_blank"rel='noreferrer'>LinkedIn</a>, let's have a chat.</P>
        </section>
    </main>
    );
}

export default Contact;