// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import '../styling/casestudies.css'
import React, { useEffect } from 'react';

import { CaseCard, CaseText } from '../components/casecard';

const CaseStudies = ()=> {
    useEffect(()=>{document.title = 'Crimson in Capitals - Case Studies'},[])
    return (
        <>
            <section id='cardDeck'>
                <CaseText size='exwide' back={false} Header='Case Studies'>Since 2019, I have had the great privilege of working with some fantastic people and businesses to create personal and meaningful content for a variety of mediums. I have collated several projects I have worked on for your exploration.</CaseText>
                <CaseCard size='small' Header='Bobbin & Em (Freelance)'  To='/casestudies/bobbin&em' Image={require('../sources/caseStudies/bobboin&Em/default.jpg')}/>
                <CaseCard size='medium' Header='The Dog Room (Freelance)' To='/casestudies/thedogroom' Image={require('../sources/caseStudies/theDogRoom/default.jpg')}/>
                <CaseCard size='small' Header='Amazing Grace (Freelance)' To='/casestudies/amazinggrace' Image={require('../sources/caseStudies/amazingGrace/default.jpg')}/>
                <CaseCard size='medium' Header='Ask Italian (In-House)' To='/casestudies/askitalian' Image={require('../sources/caseStudies/askItalian/default.jpg')}/>
                <CaseCard size='small' Header='Icons (Perosnal)' To='/casestudies/icondesign' Image={require('../sources/caseStudies/MicrosoftIcons/line icons.jpg')}/>
                <CaseCard size='small' Header='Vecotor Illustration (Presonal)' To='/casestudies/vectorillustration' Image={require('../sources/caseStudies/Portaits/default.jpg')}/>
                <CaseCard size='large' Header='Aspinal of London (Freelance)' To='/casestudies/aspinaloflondon' Image={require('../sources/caseStudies/AspinalOfLondon/default.jpg')}/>
                <CaseCard size='medium' Header='Minecraft Posters (Presonal)' To='/casestudies/minecraaftdisplates' Image={require('../sources/caseStudies/Displate/default.jpg')}/>
                <CaseCard size='small' Header='Cudoni (Employee)' To='/casestudies/cudoni' Image={require('../sources/caseStudies/Cudoni/default.jpg')}/>
                <CaseCard size='small' Header='Minesweeper (What?)' To='/casestudies/minesweeper' Image={require('../sources/caseStudies/minesweeper/default.jpg')}/>
            </section>
        </>
    );
}

export default CaseStudies;