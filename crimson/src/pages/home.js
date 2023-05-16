// import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { H1, H2, P } from '../components/StyledComponents';

export const Home = ()=> {
    useEffect(()=>{document.title = 'Crimson in Capitals - Home'},[])
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
                <H1>Welcome</H1>
                <P>
                This site was created to share my perspective on design. Good design is about combining principles of aesthetics and principles of user experience. As everything we create is created to be experienced, the context in which it will be experienced is vital to consider when we design. Good user experience and good design are not the same thing. The former is only a portion of the latter - aesthetics is the other part. Creating visual cues, selecting colours and fonts and borders and background, that is all driven by aesthetics. When I design, I do so with both in mind.
                </P>
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

