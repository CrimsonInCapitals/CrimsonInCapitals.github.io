import React from 'react';
import { CaseCard,CaseText } from '../../components/casecard';
import '../../styling/casestudies.css'


const TheDogRoom = ()=> {

    return (
        <main className='home'>
            <section>
                <h1>The Dog Room</h1>
                <p>The dog room is an independed dog grooming business that opened in May 2022.</p>
            </section>
            <section id='cardDeck'>
                <CaseCard size='medium' Image={require('../../sources/caseStudies/theDogRoom/default.jpg')} Header='Primary Brand Mark'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/logoonwhite.jpg')} Header='Alternative Brand Mark'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/dogondark.jpg')} Header='Alternative Brand Mark'/>
                <CaseText size='exwide'>The Primary brand mark as well as the variations where deisnged in acordance with the brief broved by the business owner.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/ef9400.jpg')} Header='#EF9400 - Primary Colour'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/f1f1c4.jpg')} Header='#F1F1C4 - Secondary Colour: Light'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/23231c.jpg')} Header='#23231C - Secondary Colour: Medium'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/090907.jpg')} Header='#090907 - Secondary Colour: Dark'/>
                <CaseText size='wide'>The primary palete is soft and complimentry while remaining eye catching. The other primary colours were selected to be inkeeping with the look of the brand while also be bringt and atention grabbing.</CaseText>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/064f0a.jpg')} Header='#064F0A- Other Brand Colour: Green'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/ff0d0d.jpg')} Header='#FF0D0D - Other Brand Colour: Red'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/081d65.jpg')} Header='#081D65 - Other Brand Colour: Blue'/>
                <CaseText size='exwide'/>
                <CaseCard size='medium' Image={require('../../sources/caseStudies/theDogRoom/postexample1.jpg')} Header='Post to help potential customers locate the business'/>
                <CaseCard size='small' Image={require('../../sources/caseStudies/theDogRoom/postexample2.jpg')} Header='Post to announce that the business was now open'/>
                <CaseText size='small'>I also created a handful of social media templates to allow the businnes owner to share updates and information in a profecinal maannor</CaseText>
            </section>
        </main>
    );
}

export default TheDogRoom;