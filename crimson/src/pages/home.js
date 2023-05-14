// import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { H1, H2, P } from '../components/StyledComponents';

export const Home = ()=> {
    const theme = useThemeContext()
    const[shadow,setShadow] = useState()
    useEffect(()=>{
        setShadow({
            boxShadow: theme.Shadow
        })
    },[theme])
    if(theme){

    }
    return (
        <main className='home'>

            <section>
                <H1>Hi There</H1>
                <P>Two forces will always be at odds, the efficent, and the asthetic. As people we exist on this sliding scale. The best design for the most people exists at the mean. As a designer I crave the asthetic, as a Developer I want the efficent, this intersection of the oposition is where I create.</P>
            </section>
            <section>
                <img style={shadow} className='poster' src={require('../sources/images/poster1.jpg')} alt='a breakdown of the scalling and construction of the 2021 red hat logo'/>
            </section>
            <section className='row'>
                <img  style={shadow} className='profilehero' src={require('../sources/images/harrisonadamcole.jpg')} alt='portrait of Harrison Adam Cole'/>
                <div>
                    <H2>
                        I'm Harrison Adam Cole
                    </H2>
                    <P>My main goal is personal growth, through learning and applying myself to everything I do. I find a balance between aesthetic and efficient frameworks to produce a result that maximises both without detracting from either. As a designer I have a drive to achieve perfection and create beautiful things. As a developer I strive for efficient well-planned systems. My ability to find compromise in these missions allows me to understand perspectives and find a path that works to fulfil both. I thrive when working with people with clear goals that I can help achieve. </P>
                </div>
            </section>
    </main>
    );
}

