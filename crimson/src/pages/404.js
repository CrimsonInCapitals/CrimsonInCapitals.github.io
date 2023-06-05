// import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { H1, H2, HL, P } from '../components/StyledComponents';

export const FourZeroFour = ()=> {
    useEffect(()=>{document.title = 'Crimson in Capitals - Home'},[])
    const{theme}= useThemeContext()
    const[shadow,setShadow] = useState()
    useEffect(()=>{
        setShadow({
            boxShadow: theme.Shadow
        })
    },[theme])
    if(theme){

    }
    return (
        <>

            <section>
                <H1>Error 404</H1>
                <P>Page not found</P>
                <HL to='/' name='Return Home'/>
            </section>
    </>
    );
}

