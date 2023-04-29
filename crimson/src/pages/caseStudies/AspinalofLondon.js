import React from 'react';
import { CaseCard,CaseText } from '../../components/casecard';

const AspinalofLondon = ()=> {

    return (
        <main className='home'>
    
            <section id='cardDeck'>
            <CaseText size='exwide'Header='Aspinal London'>Working closely with the key stakeholder, I was involved in the exploration of future business opportunities. This required expanding on their current deep library of brand symbols. 'House of Aspinal' is a sister business they wanted to create.</CaseText>

                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/font.jpg')} Header='This is the full charicter setl. Note that the brand uses small caps instead of lowercase.'/>
                <CaseText size='small'>In order to have the word ‘House’ match ‘Aspinal’, I had to design the letters as custom lettering had been made for the original Aspinal of London logo.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/houseofaspinal.jpg')} Header='Examplem of font in context'/>
                <CaseText size='small'>We explored multiple variations of both designs, settling on a black and gold scheme for House of Aspinal, with the lion’s head on the crest.</CaseText>
                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/houseofaspinalvariations.jpg')} Header='Variations of the House of Aspinal logo'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/lion on red.jpg')} Header='"Tamed Lion"'/>

                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/aspinaloflondonvariations.jpg')} Header='Variations of the Aspinal of London logo'/>

                <CaseText size='small'>It was decided the Aspinal of London would remain the same except for the new simplified shield.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/feather.jpg')} Header='This feather in unchanged'/>
                
                <CaseText size='exwide'>We also explored several alternative options, including buttons and designs with the original crest and without any crest, before agreeing on the options above.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/Aspinallondon.jpg')} Header='Aspinal London variation'/>
                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/pattern.jpg')} Header='Proposed pattern'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/Aspinalhouse.jpg')} Header='Aspinal House variation'/>

                <CaseCard size='large' Image={require('../../sources/caseStudies/AspinalOfLondon/AspinalGroup.jpg')} Header="'A' letter mark"/>
                <CaseText size='exwide'>My final task was to design the A letter mark for use as an umbrella that both companies could exist under. While plans were delayed by the pandemic, we should start to see the business developed in the coming years.</CaseText>

                </section>
        </main>
    );
}

export default AspinalofLondon;