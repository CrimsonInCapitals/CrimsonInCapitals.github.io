// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import '../styling/casestudies.css'
import React from 'react';
import Carasol from '../components/carasol'
import CarasolItem from '../components/carasolItem'
import Scroller from '../components/Scroller';
import CarasolCard from '../components/carasolCard';
import { CaseCard, CaseText } from '../components/casecard';

const CaseStudies = ()=> {

    return (
        <main className='home'>
            <section id='cardDeck'>
                <CaseText size='exwide' Header='Case Studies'>Since 2019 I've had the great privelage to work with some fantastic people and businessies to create personal and meaningful content for a veriaty of mediums. I've colated a number of projects I've worked on for your exploration.</CaseText>
                <CaseCard size='small' Header='Bobbin & Em (freelance)'  To='/casestudies/bobbin&em' Image={require('../sources/caseStudies/bobboin&Em/default.jpg')}/>
                <CaseCard size='medium' Header='The Dog Room (freelance)' To='/casestudies/thedogroom' Image={require('../sources/caseStudies/theDogRoom/default.jpg')}/>
                <CaseCard size='small' Header='Amazing Grace (freelance)' To='/casestudies/amazinggrace' Image={require('../sources/caseStudies/amazingGrace/default.jpg')}/>
                <CaseCard size='medium' Header='Ask Italian (Employee)' To='/casestudies/askitalian' Image={require('../sources/caseStudies/askItalian/default.jpg')}/>
                <CaseCard size='small' Header='Icons (perosnal)' To='/casestudies/icondesign' Image={require('../sources/caseStudies/MicrosoftIcons/line icons.jpg')}/>
                <CaseCard size='small' Header='Vecotor Illustration (Presonal)' To='/casestudies/vectorillustration' Image={require('../sources/caseStudies/Portaits/default.jpg')}/>
                <CaseCard size='large' Header='Aspinal of London (freelance)' To='/casestudies/aspinaloflondon' Image={require('../sources/caseStudies/AspinalOfLondon/default.jpg')}/>
                <CaseCard size='medium' Header='Minecraft Posters (Presonal)' To='/casestudies/minecraaftdisplates' Image={require('../sources/caseStudies/Displate/default.jpg')}/>
                <CaseCard size='small' Header='Cudoni (Employee)' To='/casestudies/cudoni' Image={require('../sources/caseStudies/Cudoni/default.jpg')}/>
                <CaseCard size='small' Header='Minesweeper (what?)' To='/casestudies/minesweeper' Image={require('../sources/caseStudies/minesweeper/default.jpg')}/>
            </section>
        </main>
    );
}

export default CaseStudies;