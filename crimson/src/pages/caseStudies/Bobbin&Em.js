import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const BobbinEm = ()=> {

    return (
        <main className='home'>
            <section id='cardDeck'>
                <CaseText size='exwide'Header='Bobbin & Em'>a small sole oprator Emily, who was at university doing fashion, had started making and selling facemasks on sicila media and in small botiques in her local area.</CaseText>

                <CaseCard size='medium' Image={require('../../sources/caseStudies/bobboin&Em/instructioncard.jpg')}/>
                <CaseText>I worked with the Emily to create a unique word mark that was apropriote for the business and it's sales channels.</CaseText>
                <CaseCard Image={require('../../sources/caseStudies/bobboin&Em/default.jpg')}/>
                <CaseCard size='large' Image={require('../../sources/caseStudies/bobboin&Em/facemask.jpg')}/>

            </section>
        </main>
    );
}

export default BobbinEm;