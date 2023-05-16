// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Button from './button';
import { useThemeContext } from '../context/theme';
import { useInternalContext, useSocialContext } from '../context/links';
import { Ap, H2, P } from './StyledComponents';

const Footer = ()=> {
    const theme = useThemeContext()
    const [styling,setStyle]=useState()
    useEffect(()=>{
    setStyle({
        backgroundColor: theme.Background,
        // borderTop: theme.Card.Accent+' 2px solid'
    })
},[theme])
    const Socials = useSocialContext()
    const Internals = useInternalContext()
    return (
    <footer style={styling}>
        <nav>
        <section>
            <H2 style={theme.TextStyle.CardHeading}>Internal Links</H2>
            {Internals.map(({name,to,component,rank})=>(rank ===1 && <Button use='link' key={to} url={to}> {name} </Button>))}
            <details style={theme.TextStyle.Aside}>
                <summary>More</summary>
            {Internals.map(({name,to,component,rank})=>(rank ===2 && <Button use='link' key={to} url={to}> {name} </Button>))}

            </details>
        </section>
        <section>
        <H2>Social Links</H2>
        {Socials.map(({name,handle,link,icon})=>(<Button key={handle} use='a'icon={icon}url={link}>{name}: {handle}</Button>))}
        </section>
        </nav>
        <Ap>Crimson in capitals - Harrison Adam Cole</Ap>
        {/* <button type='button' onClick={()=>setUserTheme(!userTheme)}>Change theme</button> */}
    </footer>
    );
}

export default Footer;