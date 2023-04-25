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
                <CaseCard size='small' Header='Bobbin & Em'  To='/casestudies/bobbin&em' Image={require('../sources/caseStudies/bobboin&Em/default.jpg')}/>
                <CaseCard size='medium' Header='The Dog Room' To='/casestudies/thedogroom' Image={require('../sources/default.png')}/>
                <CaseCard size='small' Header='Amazing Grace' To='/casestudies/amazinggrace' Image={require('../sources/caseStudies/amazingGrace/default.jpg')}/>
                <CaseCard size='medium' Header='Ask Italian' To='/casestudies/askitalian' Image={require('../sources/default.png')}/>
                <CaseCard size='small' Header='Icons' To='/casestudies/icondesign' Image={require('../sources/default.png')}/>
                <CaseCard size='small' Header='Vecotor Illustration' To='/casestudies/vectorillustration' Image={require('../sources/default.png')}/>
                <CaseCard size='large' Header='Aspinal of London' To='/casestudies/aspinaloflondon' Image={require('../sources/default.png')}/>
                <CaseCard size='medium' Header='Minecraft Posters' To='/casestudies/minecraaftdisplates' Image={require('../sources/default.png')}/>
                <CaseCard size='small' Header='Cudoni' To='/casestudies/cudoni' Image={require('../sources/default.png')}/>
                <CaseCard size='small' Header='Eden Gardens' To='/casestudies/edengardens' Image={require('../sources/default.png')}/>
            </section>
            
        </main>
    );
}

export default CaseStudies;