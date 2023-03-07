// import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';

const About = ()=> {
    return (
    <main className='home'>
 <section>
        <h1>About Me</h1>
        <p>I'm a designer that combines my understanding of front-end web development, vector graphics, and photography to create visually cohesive brand assets and online media.</p>
    </section>
    <section>
        <h2>My First Computer</h2>
        <p>Disregarding the Nintendo DS I received as a gift one Christmas, my first computer was a Microsoft Surface RT. It was a device that by all accounts was a failure but for me, it unlocked a world of possibilities I'd never before had access to. I remember creating an animation of falling triangles on PowerPoint, which was my design software of choice when I was 12.</p>
    </section>
    <section>
        <h2>A Pen Without Paper</h2>
        <p>A few years after I received my Surface, I upgraded to another, the Surface 3. This time I bought the Pen to go with it. I had always loved drawing and wanted to try digital illustration. This was in 2015 and up until 2019, when I started using Affinity Designer, I used OneNote to draw. Despite its limitations or perhaps because of them, I found new ways of making what I envisoned . If you scroll back enough on my Instagram, you'll see this.</p>
    </section>
    <section>
        <h2>Affinity By Serif</h2>
        <p>Despite using the Adobe Suite while in school, the cost led me to choose Affinity Designer when looking for professional design software. With it, I have created my best work to date, from designing this site, to working with businesses on branding. I can't recommend it enough to anyone with an interest. Robust vector tools allowed me to create high-resolution art and design mathematically precise assets for countless projects.</p>
    </section>
    <section>
        <h2>Family</h2>
        <p>Both of my parents have a love of photography, which is how they met. I remember going through the boxes of negatives my Mum has and seeing the years preserved. My Mum also loves design, in her case, that's interior design. Conversations with her sparked my interest in this field.</p>
    </section>
    <section>
        <h2>My Perspective On UX</h2>
        <p>UX is usually a concept discussed in a digital landscape but the principles stem from the real world. Software may have left skeuomorphism in the past but what's on the screen isn't so different from IRL. Your news feed is a street, each webpage is a room and your profile is the clothes you put on. The way things are designed impacts how we go to interact with them. Everyone’s pushed a pull door in their life but it's not your fault: it's the designer's. We shouldn't settle for poor design when it can be so much better.
            </p>
    </section>
    <section>
        <h2>Overall</h2>
        <p>My story is unique but only as unique as any other. My experience and perspective are my own but I still draw a similar conclusion. Skills are an investment of time; this is how I've chosen to invest mine. To view things in less ambiguous terms, read my <a href="./resume.pdf" target="_blank">résumé</a>.</p>
    </section>
    </main>
    );
}

export default About;