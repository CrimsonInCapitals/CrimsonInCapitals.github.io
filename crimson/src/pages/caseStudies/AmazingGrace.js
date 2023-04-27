import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const AmazingGrace = ()=> {

    return (
        <main className='home'>
            <section id='cardDeck'>
                <CaseText size='exwide'Header='Amazing Grace'>By researching the brand and analysing its asthetic I was able to design this set of icons for use on social media and on their website.</CaseText>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/pallet.jpg')}/>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/chart.jpg')}/>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/strokes.jpg')}/>
                <CaseText size='exwide'>By Identifing colours then the distribution I was able to determin the makup of the icons I was to design. Looking deeper I concluded using jental tapering strokes would be the best fit for the brand.</CaseText>
                <CaseCard size='large' Image={require('../../sources/caseStudies/amazingGrace/icons.jpg')}/>
                <CaseText size='exwide'></CaseText>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/above.jpg')}/>
                <CaseText >These icons were designed for the messurment page.</CaseText>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/bust.jpg')}/>
            </section>
        </main>
    );
}

export default AmazingGrace;