import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const Cudoni = ()=> {

    return (
        <main className='home'>
            <section id='cardDeck'>
            <CaseText size='exwide'Header='Cudoni'>Before they shut down, I worked for Cudoni in the photography department. This is a sample of the pictures I took during my time there.</CaseText>

                <CaseText size='exwide'>Gucci leather cross-body Bag in black</CaseText>
                <CaseCard Header='Item Photograph: One'Image={require('../../sources/caseStudies/Cudoni/faakik/1.jpg')}/>
                <CaseCard Header='Item Photograph: Two'Image={require('../../sources/caseStudies/Cudoni/faakik/2.jpg')}/>
                <CaseCard Header='Item Photograph: Three'Image={require('../../sources/caseStudies/Cudoni/faakik/3.jpg')}/>
                <CaseText size='exwide'>Gucci leather cross-body Bag in red</CaseText>

                <CaseCard Header='Item Photograph: One'Image={require('../../sources/caseStudies/Cudoni/izvxja/1.jpg')}/>
                <CaseCard Header='Item Photograph: Two'Image={require('../../sources/caseStudies/Cudoni/izvxja/2.jpg')}/>
                <CaseCard Header='Item Photograph: Three'Image={require('../../sources/caseStudies/Cudoni/izvxja/3.jpg')}/>
                <CaseText size='exwide'>Hermès 35cm Kelly in brown with gold hardware</CaseText>
                <CaseCard Header='Item Photograph: One'Image={require('../../sources/caseStudies/Cudoni/phtlpb/1.jpg')}/>
                <CaseCard Header='Item Photograph: Two'Image={require('../../sources/caseStudies/Cudoni/phtlpb/2.jpg')}/>
                <CaseCard Header='Item Photograph: Three'Image={require('../../sources/caseStudies/Cudoni/phtlpb/3.jpg')}/>
                <CaseText size='exwide'>Dolce & Gabbana leather drum backpack</CaseText>
                <CaseCard Header='Item Photograph: One'Image={require('../../sources/caseStudies/Cudoni/wga1u9/1.jpg')}/>
                <CaseCard Header='Item Photograph: Two'Image={require('../../sources/caseStudies/Cudoni/wga1u9/2.jpg')}/>
                <CaseCard Header='Item Photograph: Three'Image={require('../../sources/caseStudies/Cudoni/wga1u9/3.jpg')}/>
                <CaseText size='exwide'>Chanel gold foe pearl necklace with garnets</CaseText>
                <CaseCard Header='Item Photograph: One'Image={require('../../sources/caseStudies/Cudoni/pof75f/1.jpg')}/>
                <CaseCard Header='Item Photograph: Two'Image={require('../../sources/caseStudies/Cudoni/pof75f/2.jpg')}/>
                <CaseCard Header='Item Photograph: Three'Image={require('../../sources/caseStudies/Cudoni/pof75f/3.jpg')}/>
                <CaseText size='exwide'>Chanel Diamond monogram earrings</CaseText>
                <CaseCard Header='Item Photograph: One'Image={require('../../sources/caseStudies/Cudoni/lkrhu3/1.jpg')}/>
                <CaseCard Header='Item Photograph: Two'Image={require('../../sources/caseStudies/Cudoni/lkrhu3/2.jpg')}/>
                <CaseCard Header='Item Photograph: Three'Image={require('../../sources/caseStudies/Cudoni/lkrhu3/3.jpg')}/>
                <CaseText size='exwide'>Christion Dior monogram belt</CaseText>
                <CaseCard Header='Item Photograph: One'Image={require('../../sources/caseStudies/Cudoni/o90xur/1.jpg')}/>
                <CaseCard Header='Item Photograph: Two'Image={require('../../sources/caseStudies/Cudoni/o90xur/2.jpg')}/>
                <CaseCard Header='Item Photograph: Three'Image={require('../../sources/caseStudies/Cudoni/o90xur/3.jpg')}/>

                
            </section>
        </main>
    );
}

export default Cudoni;