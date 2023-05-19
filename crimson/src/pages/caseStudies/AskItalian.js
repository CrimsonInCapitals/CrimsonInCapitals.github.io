import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const AskItalian = ()=> {

    return (
        <>
            <section id='cardDeck'>
            <CaseText size='exwide'Header='Ask Italian'>My key focus was creating content in line with the company’s 'Primo' branding. Ask Italian’s 'Primo' style has a few key building blocks. The first is colour - a combination of bright and muted colours. The second is tone - Ask Italian is a friend, a safe place, a shelter. The third is art direction, which is designed to reflect its Italian authenticity. The content I created was designed with this in mind.</CaseText>
                <CaseText CaseText size='exwide'>Examples of posts created to announce 'Ask Perks':</CaseText>
                <CaseCard Header='December Ask Perk' Image={require('../../sources/caseStudies/askItalian/perkdecember.jpg')}/>
                <CaseCard Header='Febuary Ask Perk' Image={require('../../sources/caseStudies/askItalian/perkfebury.jpg')}/>
                <CaseCard Header='March Ask Perk' Image={require('../../sources/caseStudies/askItalian/perkmarch.png')}/>
                <CaseText size='exwide'>Examples of graphic based posts:</CaseText>
                <CaseCard Header='Enjoy A Coca Cola Facebook Banner' size='medium' Image={require('../../sources/caseStudies/askItalian/enjoyacoke.jpg')}/>
                <CaseCard Header='Post to promote the Peroni selection on offer' Image={require('../../sources/caseStudies/askItalian/peroni.jpg')}/>
                <CaseCard Header='Post to announce they now sell Oat milk' Image={require('../../sources/caseStudies/askItalian/milk.jpg')}/>
                <CaseText size='exwide'>Carousel post to explain the kid’s menu options:</CaseText>
                <CaseCard Header='Kids menu: 1' size='small' Image={require('../../sources/caseStudies/askItalian/kids1.jpg')}/>
                <CaseCard Header='Kids menu: 2' size='small' Image={require('../../sources/caseStudies/askItalian/kids2.jpg')}/>
                <CaseCard Header='Kids menu: 3' size='small' Image={require('../../sources/caseStudies/askItalian/kids3.jpg')}/>
                <CaseCard Header='Kids menu: 4' size='small' Image={require('../../sources/caseStudies/askItalian/kids4.jpg')}/>
                <CaseCard Header='Kids menu: 5' size='small' Image={require('../../sources/caseStudies/askItalian/kids5.jpg')}/>
                <CaseCard Header='Kids menu: 6' size='small' Image={require('../../sources/caseStudies/askItalian/kids6.jpg')}/>

            </section>
        </>
    );
}

export default AskItalian;