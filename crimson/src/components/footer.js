// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Button from './button';
import { useThemeContext } from '../context/theme';
import { dark, light } from '../colors';
import { useInternalContext, useSocialContext } from '../context/links';

const Footer = ()=> {
    const theme = useThemeContext()
    const [styling,setStyle]=useState()
    useEffect(()=>{
    setStyle({
        backgroundColor: theme.Background,
        color: theme.Text
    })
},[theme])
    const Socials = useSocialContext()
    const Internals = useInternalContext()
    return (
    <footer style={styling}>
        <nav>
        <section>
            <h2>Internal Links</h2>
            {Internals.map(({name,url,component,rank})=>(rank ===1 && <Button use='link' key={url} url={url}> {name} </Button>))}
            <details>
                <summary>More</summary>
            {Internals.map(({name,url,component,rank})=>(rank ===2 && <Button use='link' key={url} url={url}> {name} </Button>))}

            </details>
        </section>
        <section>
        <h2>Social Links</h2>
        {Socials.map(({name,handle,link,icon})=>(<Button key={handle} use='a'icon={icon}url={link}>{name}: {handle}</Button>))}
        </section>
        </nav>
        <p>Crimson in capitals - Harrison Adam Cole</p>
        {/* <button type='button' onClick={()=>setUserTheme(!userTheme)}>Change theme</button> */}
    </footer>
    );
}

export default Footer;