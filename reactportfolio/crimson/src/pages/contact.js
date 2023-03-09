// import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';

const Contact = ()=> {
    return (
    <main className='home'>
        <section>
            <h1>Reach Out</h1>
            <p className='contact'><a href="mailto:harrison.cole@crimsonincapitals.com">Email</a> me, <a href="tel:+07922407596" target="_blank">text</a>  me, or send a message on <a href="http://m.me/Crimsonincapitals" target="_blank">Facebook</a>, <a href="https://www.instagram.com/crimson.svg/" target="_blank">Instagram</a> or <a href="https://www.linkedin.com/in/harrison-cole-crimson-in-capitals/" target="_blank">LinkedIn</a>, let's have a chat.</p>
        </section>
    </main>
    );
}

export default Contact;