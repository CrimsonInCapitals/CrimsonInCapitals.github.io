import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const AskItalian = ()=> {

    return (
        <main className='home'>
            <section>
                <h1>Ask Italian</h1>
            </section>
            <section id='cardDeck'>
                <CaseText CaseText size='exwide'>Below are examples of posts created to announce 'Ask Perks'</CaseText>
                <CaseCard Header='December Ask Perk' Image={require('../../sources/caseStudies/askItalian/perkdecember.jpg')}/>
                <CaseCard Header='Febuary Ask Perk' Image={require('../../sources/caseStudies/askItalian/perkfebury.jpg')}/>
                <CaseCard Header='March Ask Perk' Image={require('../../sources/caseStudies/askItalian/perkmarch.png')}/>
                <CaseText size='exwide'>Ask Italians 'primo' style has a few key building blocks. The first is colour, a combinations of brigt and muted tones. The second is tone of speeking, ask italian is a friend. That personal bond is something they construct comunications around. The third is art direction designed to refelect it's Italian athenticity. The content I created were designed with this in mind.</CaseText>
                <CaseCard Header='Enjoy A Coca Cola Facebook Banner' size='medium' Image={require('../../sources/caseStudies/askItalian/enjoyacoke.jpg')}/>
                <CaseCard Header='Post to promote the Peroni selection on offer' Image={require('../../sources/caseStudies/askItalian/peroni.jpg')}/>
                <CaseCard Header='Post to announce they now sell Oat milk' Image={require('../../sources/caseStudies/askItalian/milk.jpg')}/>
                <CaseText size='exwide'>Carasol post to explain the kids menu options.</CaseText>
                <CaseCard Header='Kids menu: 1' size='small' Image={require('../../sources/caseStudies/askItalian/kids1.jpg')}/>
                <CaseCard Header='Kids menu: 2' size='small' Image={require('../../sources/caseStudies/askItalian/kids2.jpg')}/>
                <CaseCard Header='Kids menu: 3' size='small' Image={require('../../sources/caseStudies/askItalian/kids3.jpg')}/>
                <CaseCard Header='Kids menu: 4' size='small' Image={require('../../sources/caseStudies/askItalian/kids4.jpg')}/>
                <CaseCard Header='Kids menu: 5' size='small' Image={require('../../sources/caseStudies/askItalian/kids5.jpg')}/>
                <CaseCard Header='Kids menu: 6' size='small' Image={require('../../sources/caseStudies/askItalian/kids6.jpg')}/>

            </section>
        </main>
    );
}

export default AskItalian;