// import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { H1, H2, P } from '../components/StyledComponents';
import { BentoCard } from '../components/BentoCard';
import { Articals } from '../context/Articals';

export const Home = ()=> {
    useEffect(()=>{document.title = 'Crimson in Capitals - Home'},[])
    const{theme}= useThemeContext()
    const[shadow,setShadow] = useState()
    useEffect(()=>{
        setShadow({
            boxShadow: theme.Shadow
        })
    },[theme])
    if(theme){

    }
    const contentTypes=['Case Study','Project Gallery','Though Leadership','Code Proejct']
    return (
        <>
            <section className='content'>
                <H1>Introduction</H1>
                <P>Hello, I am Harrison, a London based graphic designer. I have worked on a full breadth of design projects, both print and digital, on short term consulting as well as fulltime positions. I’ve had the opportunity to be both a fresh perspective and make considered choices based on a deep understanding of complex business workings.                 </P>
                <H1>My Projects</H1>
            </section>
           
            <section className='grid'>
                {Articals.map(artical=>{
                    console.log(artical)
                    if(artical.priority === 1)return(<BentoCard {...artical}/>)
                })}
            </section>
             <section className='content'>
                <H2>My Ethos</H2>
                <P>Design represents the intersection of creativity and function. Graphic design like all design requires finding a balance between the two. As a designer you must strive for a solution that looks visually appealing, and easily consumable. This means considering, accessibility, learned patterns and expected outcomes, while also seeking to stand out, and define a unique solution. Looking around, you can see a myriad of examples of how a product can consider both and still be itself. This is most clear in the systems of design we interact with every day. On a single device we might see the likes of Google, Microsoft, Adobe, Amazon, and Meta. While we once saw design pioneered by Type setters and Furniture makers, we now see companies like Apple define visual eras, marking them not by decades but by software updates.
</P><P>Designers create systems by which they build consistent experiences, but in order to create these experiences one must understand the limitations of their mediums. As someone designing a chair must consider the limitations of the timber, and an architect must consider the limitations of steel, so must a graphic designer understand the limitations of their technology. 
</P>
            </section>
            {/* <section className='content'>
                <img style={shadow} className='poster' src={require('../sources/images/poster1.jpg')} alt='a breakdown of the scalling and construction of the 2021 red hat logo'/>
            </section>
            <section className='content row'>
                <img  style={shadow} className='profilehero' src={require('../sources/images/harrisonadamcole.jpg')} alt='portrait of Harrison Adam Cole'/>
                <div>
                    <H2>
                        I'm Harrison Adam Cole
                    </H2>
                    <P>My main goal is personal growth, through learning and applying myself to everything I do. I find a balance between aesthetic and efficient frameworks to produce a result that maximises both without detracting from either. As a designer I have a drive to achieve perfection and create beautiful things. As a developer I strive for efficient well-planned systems. My ability to find compromise in these missions allows me to understand perspectives and find a path that works to fulfil both. I thrive when working with people with clear goals that I can help achieve. </P>
                </div>
            </section> */}
    </>
    );
}

