import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const VectorIllustration = ()=> {

    return (
        <>
            <section id='cardDeck'>
                <CaseText size='exwide'Header='Vector Illustration'>Made using a tablet and pen, these illustrations are an example of some of the portraits I have drawn.</CaseText>
                <CaseCard Header='Ana de Armas'size='large' Image={require('../../sources/caseStudies/Portaits/anadearmas.jpg')}/>
                <CaseCard size='solomedium' Header='Close up' Image={require('../../sources/caseStudies/Portaits/anadearmascloseup.jpg')}/>
                <CaseText size=''>This method involves the layering of multiple groups of strokes in different shades.</CaseText>
                <CaseCard Header='Close up'size='small' Image={require('../../sources/caseStudies/Portaits/kattyperrycloseup.jpg')}/>

                <CaseCard Header='Katy Perry'size='medium' Image={require('../../sources/caseStudies/Portaits/kattyperry.jpg')}/>
                <CaseText size='small'>I did this by isolating light and dark areas on a background colour.</CaseText>
                <CaseCard Header='Lauren Mayberry - Chvches'size='medium' Image={require('../../sources/caseStudies/Portaits/chvchs.jpg')}/>
                <CaseText size='small'>Using the pen tool to achieve a similar effect to the previous design, with the addition of the colour on the face and hands.</CaseText>
                <CaseCard Header='Close up'size='small' Image={require('../../sources/caseStudies/Portaits/default.jpg')}/>
                <CaseCard Header='Maisie Peters'size='medium' Image={require('../../sources/caseStudies/Portaits/mp.jpg')}/>
                <CaseCard size='small' Header='Close up'Image={require('../../sources/caseStudies/Portaits/mpcloseup.jpg')}/>
                <CaseText size='small'>I made this by using large broad strokes and then going back with smaller lines to add detail.</CaseText>


            </section>
        </>
    );
}

export default VectorIllustration;