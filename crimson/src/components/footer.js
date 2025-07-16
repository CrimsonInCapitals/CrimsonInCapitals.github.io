// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import {ButtonL} from './button';
import { useThemeContext } from '../context/theme';
import { useInternalContext, useSocialContext } from '../context/links';
import { Ap, H2, P } from './StyledComponents';

const Footer = ()=> {
    const{theme}= useThemeContext()

    const Socials = useSocialContext()
    const Internals = useInternalContext()
    return (
    <footer style={theme.background}>
        <nav>
        <section>
            <H2>Internal Links</H2>
            {Internals.map(({name,to,component,rank})=>(rank ===1 && <ButtonL use='link' key={to} url={to}> {name} </ButtonL>))}
            <details style={theme.textStyle.p}>
                <summary>More</summary>
            {Internals.map(({name,to,component,rank})=>(rank ===2 && <ButtonL use='link' key={to} url={to}> {name} </ButtonL>))}

            </details>
        </section>
        <section>
        <H2>Social Links</H2>
        {Socials.map(({name,handle,link,icon})=>(<ButtonL key={handle} use='a'icon={icon}url={link}>{name}: {handle}</ButtonL>))}
        </section>
        </nav>
        <Ap>Crimson in capitals - Harrison Adam Cole</Ap>
        {/* <button type='button' onClick={()=>setUserTheme(!userTheme)}>Change theme</button> */}
    </footer>
    );
}

export default Footer;