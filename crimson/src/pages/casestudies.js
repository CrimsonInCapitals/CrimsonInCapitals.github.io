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
                <p>Since 2019 I've had the great privelage to work with some fantastic people and businessies to create personal and meaningful content for a veriaty of mediums. I've colated a number of projects I've worked on for your exploration.</p>
            </section>
            <section id='cardDeck'>
                <CaseCard size='small' Header='Bobbin & Em'  To='/casestudies/bobbin&em' Image={require('../sources/caseStudies/bobboin&Em/default.jpg')}/>
                <CaseCard size='medium' Header='The Dog Room' To='/casestudies/thedogroom' Image={require('../sources/caseStudies/theDogRoom/default.jpg')}/>
                <CaseCard size='small' Header='Amazing Grace' To='/casestudies/amazinggrace' Image={require('../sources/caseStudies/amazingGrace/default.jpg')}/>
                <CaseCard size='medium' Header='Ask Italian' To='/casestudies/askitalian' Image={require('../sources/caseStudies/askItalian/default.jpg')}/>
                <CaseCard size='small' Header='Icons' To='/casestudies/icondesign' Image={require('../sources/caseStudies/MicrosoftIcons/line icons.jpg')}/>
                <CaseCard size='small' Header='Vecotor Illustration' To='/casestudies/vectorillustration' Image={require('../sources/caseStudies/Portaits/default.jpg')}/>
                <CaseCard size='large' Header='Aspinal of London' To='/casestudies/aspinaloflondon' Image={require('../sources/caseStudies/AspinalOfLondon/default.jpg')}/>
                <CaseCard size='medium' Header='Minecraft Posters' To='/casestudies/minecraaftdisplates' Image={require('../sources/caseStudies/Displate/default.jpg')}/>
                <CaseCard size='small' Header='Cudoni' To='/casestudies/cudoni' Image={require('../sources/caseStudies/Cudoni/default.jpg')}/>
                <CaseCard size='small' Header='Minesweeper' To='/casestudies/minesweeper' Image={require('../sources/caseStudies/minesweeper/default.jpg')}/>
            </section>
            
        </main>
    );
}

export default CaseStudies;