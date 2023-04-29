import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const VectorIllustration = ()=> {

    return (
        <main className='home'>
            <section id='cardDeck'>
                <CaseText size='exwide'Header='Vector Illustration'>Made using a tablet & pen these illustrations are an example of some of the Portraits I have drawn.</CaseText>
                <CaseCard Header='Ana de Armas'size='large' Image={require('../../sources/caseStudies/Portaits/anadearmas.jpg')}/>
                <CaseCard size='solomedium' Header='Close up' Image={require('../../sources/caseStudies/Portaits/anadearmascloseup.jpg')}/>
                <CaseText size=''>This method involves the layering of multiple groups of strokes in different shades.</CaseText>
                <CaseCard Header='Close up'size='small' Image={require('../../sources/caseStudies/Portaits/kattyperrycloseup.jpg')}/>

                <CaseCard Header='Katy Perry'size='medium' Image={require('../../sources/caseStudies/Portaits/kattyperry.jpg')}/>
                <CaseText size='small'>I did this by isolating light and dark areas on a background colour.</CaseText>
                <CaseCard Header='Lauren Mayberry - Chvches'size='medium' Image={require('../../sources/caseStudies/Portaits/chvchs.jpg')}/>
                <CaseText size='small'>Like the above but with the addition of the colours in the face and hands and using the pen instead of the pencil tool.</CaseText>
                <CaseCard Header='Close up'size='small' Image={require('../../sources/caseStudies/Portaits/default.jpg')}/>
                <CaseCard Header='Maisie Peters'size='medium' Image={require('../../sources/caseStudies/Portaits/mp.jpg')}/>
                <CaseCard size='small' Header='Close up'Image={require('../../sources/caseStudies/Portaits/mpcloseup.jpg')}/>
                <CaseText size='small'>This I made by using large broad strokes and then going back with smaller lines to add detail.</CaseText>


            </section>
        </main>
    );
}

export default VectorIllustration;