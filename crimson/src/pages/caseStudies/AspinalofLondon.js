import React from 'react';
import { CaseCard,CaseText } from '../../components/casecard';

const AspinalofLondon = ()=> {

    return (
        <main className='home'>
    
            <section id='cardDeck'>
            <CaseText size='exwide'Header='Aspinal London'>Working closely with the key stakeholder I aided in his exploration of future business oportunities. This required explanding on their current deep library of brand symbols. 'House of Aspinal' is a sister business thay wanted to create.</CaseText>

                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/font.jpg')} Header='This is the full charicter setl. Note that the brand uses small caps instead of lowercase.'/>
                <CaseText size='small'>In order to have to have to word House match Aspinal I had to design the letters, as custom lettering had been used in the original Aspinal of London logo.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/houseofaspinal.jpg')} Header='Examplem of font in context'/>
                <CaseText size='small'>We explored multiple variations of both designs settling on a Black and gold Sceme for House of Aspinal, with the lions head on the crest.</CaseText>
                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/houseofaspinalvariations.jpg')} Header='Variations of the House of Aspinal logo'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/lion on red.jpg')} Header='"Tamed Lion"'/>

                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/aspinaloflondonvariations.jpg')} Header='Variations of the Aspinal of London logo'/>

                <CaseText size='small'>While Aspinal of london would keep it's original look while still switching to the simplified crest design.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/feather.jpg')} Header='This feather in unchanged'/>
                
                <CaseText size='exwide'>we explored several alternative options, including buttons and designs with the originsal crest and without any crest, brofre altimatly agreeing on the options above.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/Aspinallondon.jpg')} Header='Aspinal London variation'/>
                <CaseCard size='medium' Image={require('../../sources/caseStudies/AspinalOfLondon/pattern.jpg')} Header='Proposed pattern'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/AspinalOfLondon/Aspinalhouse.jpg')} Header='Aspinal House variation'/>

                <CaseCard size='large' Image={require('../../sources/caseStudies/AspinalOfLondon/AspinalGroup.jpg')} Header="'A' letter mark"/>
                <CaseText size='exwide'>The final think I did was design the A letter mark for use as an umbrella that both companies could exist under. While plans where delayed due to the pandemic we should start to see the business develope in the coming years.</CaseText>

                </section>
        </main>
    );
}

export default AspinalofLondon;