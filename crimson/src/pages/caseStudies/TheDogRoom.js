import React from 'react';
import CaseCard from '../../components/casecard';
import CaseText from '../../components/caseText';
import '../../styling/casestudies.css'


const TheDogRoom = ()=> {

    return (
        <main className='home'>
            <section>
                <h1>The Dog Room</h1>
            </section>
            <section id='cardDeck'>
                <CaseCard size='medium' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Primary Brand Mark'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Alternative Brand Mark'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Alternative Brand Mark'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Primary Colour'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Secondary Colour: Light'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Secondary Colour: Dark'/>
                <CaseText size='wide'>The primary palete is soft and complimentry while remaining eye catching. The other primary colours were selected to be inkeeping with the look of the brand while also be bringt and atention grabbing.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Other Brand Colour: Green'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Other Brand Colour: Red'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Other Brand Colour: Blue'/>

            </section>
        </main>
    );
}

export default TheDogRoom;