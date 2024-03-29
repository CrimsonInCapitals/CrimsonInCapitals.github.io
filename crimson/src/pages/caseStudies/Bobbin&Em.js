import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const BobbinEm = ()=> {

    return (
        <>
            <section id='cardDeck'>
                <CaseText size='exwide'Header='Bobbin & Em'>A small Sole proprietor, Emily, who was at university doing fashion, had started making and selling facemasks on social media and in small boutiques in her local area.</CaseText>

                <CaseCard size='medium' Header='Purchase card' Image={require('../../sources/caseStudies/bobboin&Em/instructioncard.jpg')}/>
                <CaseText>I worked with Emily to create a unique word mark that was appropriate for the business and its sales channels.</CaseText>
                <CaseCard Header='Word Mard' Image={require('../../sources/caseStudies/bobboin&Em/default.jpg')}/>
                <CaseCard Header='Packaging' size='large' Image={require('../../sources/caseStudies/bobboin&Em/facemask.jpg')}/>

            </section>
        </>
    );
}

export default BobbinEm;