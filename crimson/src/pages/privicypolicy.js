// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import React from 'react';
import { H1, P } from '../components/StyledComponents';

const PrivacyPolicy = ()=> {
    return (
    <>
        <section>
            <H1>Privacy Policy</H1>
            <P>This page makes one interaction with cookies on load. It checks if a cookies have previocly been accepted on this site. All other actions relating to cookies can only be made after cookie setting are accepted. You will only be asked on pages that require cookies. All data provided by the user on this domain is stored strictly on the users device. No additional data is collected or stored as that may be able to identify an indervidual or organisation unless explicitly stated.</P>
        </section>
    </>
    );
}

export default PrivacyPolicy;