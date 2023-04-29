import React from 'react';
import { CaseText, CaseWithAside } from '../../components/casecard';

const MinecraftDisplate = ()=> {

    return (
        <main className='home'>
            <section id='cardDeck'>
                <CaseText size='exwide' Header='Minecraft Posters - Displate'>Inspired by the works of MC Escher I recreated some of his iconic works to look like Minecraft. I decided to replicate the style of Minecraft promotional posters, as I felt the Isometric design would suit the style well.</CaseText>
                <CaseWithAside Image={require('../../sources/caseStudies/Displate/mine waterfall.jpg')}>This was the first in the series. This is based on 'Waterfall' by the artist.</CaseWithAside>
                <CaseWithAside Right={false} Image={require('../../sources/caseStudies/Displate/STRONGHOLD.jpg')}>The second design was based on his work 'Relativity and was designed to look like a Minecraft stronghold.’</CaseWithAside>
                <CaseWithAside Image={require('../../sources/caseStudies/Displate/the climb minecraft.jpg')}>Ascending and Descending was the basis for the third peace, and I designed to look like a nether fortress.</CaseWithAside>
                <CaseWithAside Right={false} Image={require('../../sources/caseStudies/Displate/mc5.jpg')}>Being the only one not replicating a specific one of his works, this design is of an infinite staircase like Ascending and Descending with the setting of a woodland mansion.</CaseWithAside>
            </section>
        </main>
    );
}

export default MinecraftDisplate;