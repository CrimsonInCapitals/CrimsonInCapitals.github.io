// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import '../styling/casestudies.css'
import React from 'react';
import Carasol from '../components/carasol'
import CarasolItem from '../components/carasolItem'
import Scroller from '../components/Scroller';
import CarasolCard from '../components/carasolCard';
import CaseCard from '../components/casecard';
const CaseStudies = ()=> {

    return (
        <main className='home'>
            <section id='Header'>
                <h1>Case Studies</h1>
                <p></p>
            </section>
            <section id='cardDeck'>
                <CaseCard size='small' Header='Bobbin & Em'  To='/casestudies/bobbin&em'/>
                <CaseCard size='medium' Header='The Dog Room' To='/casestudies/thedogroom'/>
                <CaseCard size='small' Header='Amazing Grace' To='/casestudies/amazinggrace'/>
                <CaseCard size='medium' Header='Ask Italian' To='/casestudies/askitalian'/>
                <CaseCard size='small' Header='Icons' To='/casestudies/icondesign'/>
                <CaseCard size='small' Header='Vecotor Illustration' To='/casestudies/vectorillustration'/>
                <CaseCard size='large' Header='Aspinal of London' To='/casestudies/aspinaloflondon'/>
                <CaseCard size='medium' Header='Minecraft Posters' To='/casestudies/minecraaftdisplates'/>
                <CaseCard size='small' Header='Cudoni' To='/casestudies/cudoni'/>
                <CaseCard size='small' Header='Eden Gardens' To='/casestudies/edengardens'/>
            </section>
            
        </main>
    );
}

export default CaseStudies;