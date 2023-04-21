// import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { useAppContext } from '../components/win95/context/app';
import DesktopButton from '../components/win95/desktopbutton';
import { AppProvider } from '../components/win95/context/app';
const Home = ()=> {
    const theme = useThemeContext()
    const[shadow,setShadow] = useState()
    useEffect(()=>{
        setShadow({
            boxShadow: theme? '0 0 20px 4px black':  '0 0 20px 4px #fff5ed'
        })
    },[theme])
    if(theme){

    }
    return (
        <main className='home'>
                  <AppProvider>
                    <DesktopButton appname='Minesweeper'/>
                  </AppProvider>

            <section>
                <h1>Hi There</h1>
                <p>Two forces will always be at odds, the efficent, and the asthetic. As people we exist on this sliding scale. The best design for the most people exists at the mean. As a designer I crave the asthetic, as a Developer I want the efficent, this intersection of the oposition is where I create.</p>
            </section>
            <section>
                <img style={shadow} className='poster' src={require('../sources/images/poster1.jpg')} alt='a breakdown of the scalling and construction of the 2021 red hat logo'/>
            </section>
            <section className='row'>
                <img  style={shadow} className='profilehero' src={require('../sources/images/harrisonadamcole.jpg')} alt='portrait of Harrison Adam Cole'/>
                <div>
                    <h2>
                        I'm Harrison
                    </h2>
                    <p>This reprecents the combination of my two personas, my to passions. When I create it's to express a goal, my goal here is making you familour with the sort of person I am.</p>
                </div>
            </section>
    </main>
    );
}

export default Home;