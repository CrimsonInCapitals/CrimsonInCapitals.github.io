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
    if(theme){
        setStyle({
        backgroundColor: dark,
        color: light
    })
    }else{
        setStyle({
            backgroundColor: light,
            color: dark
        })
    }},[theme])
    const Socials = useSocialContext()
    const Internals = useInternalContext()
    return (
    <footer style={styling}>
        <section>
            <h2>Internal Links</h2>
            {Internals.map(({name,url,component})=>(<Button use='link' key={url} url={url}> {name} </Button>))}
        </section>
        <section>
        <h2>Social Links</h2>
        {Socials.map(({name,handle,link,icon})=>(<Button key={handle} use='a'icon={icon}url={link}>{name}: {handle}</Button>))}
        </section>
        {/* <button type='button' onClick={()=>setUserTheme(!userTheme)}>Change theme</button> */}
    </footer>
    );
}

export default Footer;