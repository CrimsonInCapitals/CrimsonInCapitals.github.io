// import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Button from './button';
import { useThemeContext } from '../context/theme';
import { dark, light } from '../colors';

const Footer = ({darkmode})=> {
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
    class Social {
        constructor(name,handle,link,icon){
            this.name=name
            this.handle=handle
            this.link=link
            if(icon){this.icon=icon}else{this.icon=name}
        }
    }
    const Socials = [
        new Social('Instagram','@crimson.svg','https://www.instagram.com/crimson.svg/','instagram'),
        new Social('Facebook','Crimson in capitals art','https://www.facebook.com/Crimsonincapitals','facebook'),
        new Social('LinkedIn','CRIMSON (in capitals)','https://www.linkedin.com/company/79029565/','linkedin'),
        new Social('Displate','Displate','https://displate.com/crimsonincapitals1?art=5f0d09c08e6b6','displate')
    ]
    return (
    <footer style={styling}>
        <h2>Social Links</h2>
        {Socials.map(({name,handle,link,icon})=>(<Button key={handle} use='a'icon={icon}url={link}>{name}: {handle}</Button>))}
        {/* <button type='button' onClick={()=>setUserTheme(!userTheme)}>Change theme</button> */}
    </footer>
    );
}

export default Footer;