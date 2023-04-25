import React from 'react';
import { CaseCard,CaseText } from '../../components/casecard';

const AspinalofLondon = ()=> {

    return (
        <main className='home'>
            <section>
                <h1>Aspinal of London </h1>
                <p></p>
            </section>
            <section id='cardDeck'>
                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/font.jpg')} Header='#23231C - Secondary Colour: Medium'/>
                <CaseText size='small'>In order to have to have to word House match Aspinal I had to design the letters, as custom lettering had been used in the original Aspinal of London logo.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Primary Brand Mark'/>
                <CaseText size='small'>We explored multiple variations of both designs settling on a Black and gold Sceme for House of Aspinal, with the lions head on the crest.</CaseText>
                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/houseofaspinalvariations.jpg')} Header='#F1F1C4 - Secondary Colour: Light'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Primary Brand Mark'/>

                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/aspinaloflondonvariations.jpg')} Header='#EF9400 - Primary Colour'/>

                <CaseText size='small'>While Aspinal of london would keep it's original look while still switching to the simplified crest design.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/logoonwhite.jpg')} Header='Alternative Brand Mark'/>
                
                <CaseText size='exwide'>we explored several alternative options, including buttons and designs with the originsal crest and without any crest, brofre altimatly agreeing on the options above.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/064f0a.jpg')} Header='#064F0A- Other Brand Colour: Green'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/064f0a.jpg')} Header='#064F0A- Other Brand Colour: Green'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/064f0a.jpg')} Header='#064F0A- Other Brand Colour: Green'/>

                <CaseCard size='large' Image={require('../../sources/caseStudies/AspinalOfLondon/default.jpg')}/>
                <CaseText size='exwide'>The final think I did was design the A letter mark for use as an umbrella that both companies could exist under. While plans where delayed due to the pandemic we should start to see the business develope in the coming years.</CaseText>

                </section>
        </main>
    );
}

export default AspinalofLondon;