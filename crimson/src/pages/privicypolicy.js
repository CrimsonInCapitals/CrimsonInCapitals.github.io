// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import React from 'react';
import { H1, P } from '../components/StyledComponents';

const PrivacyPolicy = ()=> {
    return (
    <main className='home'>
        <section>
            <H1>Privacy Policy</H1>
            <P>all data provided by the user on this domain is stored strictly on the users device. No additional data is collected or stored as that may be able to identify an indervidual or organisation unless explicitly stated.</P>
        </section>
    </main>
    );
}

export default PrivacyPolicy;