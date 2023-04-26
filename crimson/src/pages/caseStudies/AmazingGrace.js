import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const AmazingGrace = ()=> {

    return (
        <main className='home'>
            <section>
                <h1>Amazing Grace</h1>
            </section>
            <section id='cardDeck'>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/pallet.jpg')}/>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/chart.jpg')}/>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/strokes.jpg')}/>
                <CaseText size='exwide'></CaseText>
                <CaseCard size='large' Image={require('../../sources/caseStudies/amazingGrace/icons.jpg')}/>
                <CaseText size='exwide'></CaseText>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/above.jpg')}/>
                <CaseText ></CaseText>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/bust.jpg')}/>
            </section>
        </main>
    );
}

export default AmazingGrace;