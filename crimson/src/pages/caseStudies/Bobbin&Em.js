import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const BobbinEm = ()=> {

    return (
        <main className='home'>
            <section id='cardDeck'>
                <CaseText size='exwide'Header='Bobbin & Em'>a small sole operator Emily, who was at university doing fashion, had started making and selling facemasks on social media and in small boutiques in her local area.</CaseText>

                <CaseCard size='medium' Image={require('../../sources/caseStudies/bobboin&Em/instructioncard.jpg')}/>
                <CaseText>I worked with the Emily to create a unique word mark that was appropriate for the business and its sales channels.</CaseText>
                <CaseCard Image={require('../../sources/caseStudies/bobboin&Em/default.jpg')}/>
                <CaseCard size='large' Image={require('../../sources/caseStudies/bobboin&Em/facemask.jpg')}/>

            </section>
        </main>
    );
}

export default BobbinEm;