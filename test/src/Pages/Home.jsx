import {Routes,Route, useLocation, Form} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { NameText, VectorText } from '../components/TextComponants';
import { FocusedContentSection } from '../components/FocusedContentSection';
import { Logo, MaskedLogo } from '../components/logo';
import { MenuLogoMask, MenuPartA, MenuPartB } from '../components/Menu';
import { Footer } from '../components/Footer.jsx';
import { PageClass } from '../classes';
import { useThemeContext } from '../context/theme.jsx';
import { getCaseStudies, getProjects } from './Articles.jsx';
import { ProjectCard, ProjectReel } from '../components/ProjectCard.jsx';
import * as Pages from '.'
import { PictureSpace } from '../components/picturespace.jsx';
import { Review, ReviewReel } from '../components/review.js';
import { FormSection } from '../components/form.jsx';


const Page =()=>{
  const theme = useThemeContext()
  const main = useRef(null)
  console.log( new Date())
    return(
        <main className='layer_one' ref={main} id={theme}>
              <MenuPartA/>
              {/* <MenuLogoMask/> */}
              <div style={{gap:'-11em',display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} className='hero'>
              <FocusedContentSection  className='HomeHeroFocus' style={{justifyContent:'center',padding:'0',backgroundColor:'unset',backdropFilter:'unset',width:0}}>
                <section className='HomeHeroSection' >
                  {/* <svg width='100%' height='100%'>
                    <rect x='0'y='0' width='100' height='700' fill='blue'/>

                    <defs>
                      <clipPath id="heroMask"  clipPathUnits="objectBoundingBox" transform="scale(1,1)">
                        <rect x='0'y='0' width='100' height='100'/>
                      </clipPath>
                    </defs>
                  </svg> */}
                  {/* <PictureSpace/> */}
                </section>
              
              </FocusedContentSection>
              
              <PictureSpace/>
              <VectorText/>
              </div>
              <MenuPartB/>
              <></>
              <FocusedContentSection  blur style={{marginTop:'1em'}}>
                <section style={{gap:'0'}}>
                    <h2>Introduction</h2>
                      <p>Hello, I am Harrison, a London based graphic designer. I have worked on a full breadth of design projects, both print and digital. Previously, I worked as a short-term consultant, which allowed me to offer a fresh perspective to clients. I have also worked in full-time positions, making considered choices based on a deep understanding of complex business needs.</p>
        
                </section>
                <section className='fill' style={{backgroundColor:'var(--background03)'}}>
                  <section>
                    {/* <div> */}
                      {/* <h2>Introduction</h2>
                      <p>Hello, I am Harrison, a London based graphic designer. I have worked on a full breadth of design projects, both print and digital. Previously, I worked as a short-term consultant, which allowed me to offer a fresh perspective to clients. I have also worked in full-time positions, making considered choices based on a deep understanding of complex business needs.</p> */}
                    {/* </div> */}
                    <div>
                    <h2>Case Studies</h2>
                      <ProjectReel display={2}>
                      {getCaseStudies().map((r)=><ProjectCard page={Pages[r]()}/>)}
                      </ProjectReel>
                    </div>
                    <ReviewReel/>
                           <div>
                      <h2>Ethos</h2>
                      <p>Design represents the intersection of creativity and function. Graphic design, like all design, requires finding a balance between the two. As a designer you must strive for a solution that looks visually appealing and easily consumable. This means considering accessibility, learned patterns and expected outcomes, while also seeking to stand out and define a unique solution. Looking around, you can see a myriad of examples of how a product can consider both and still be itself. This is most clear in the systems of design we interact with every day. On a single device, we might see the likes of Google, Microsoft, Adobe, Amazon, and Meta. While we once saw design pioneered by Type Setters and Furniture Makers, we now see companies like Apple define visual eras, marking them not by decades but by software updates.</p>
                      <p>Designers create systems by which they build consistent experiences but in order to create these experiences, one must understand the limitations of their mediums. As someone designing a chair must consider the limitations of the timber and an architect must consider the limitations of steel, so must a graphic designer understand the limitations of their technology.</p>
                    </div>
                                          </section>
                      </section>
                      <FormSection/>

                      <section className='fill'>
<section>
             
                    <div>
                      <h3>Recent Projects</h3>
                      <ProjectReel fixed>
                          {getProjects().length === 0 ? <p>No Projects at this time</p> :getProjects().map((r)=><ProjectCard page={Pages[r]()} type='recent'/>)}
                      </ProjectReel>
                    </div>
       
                  </section>
                </section>
              </FocusedContentSection>
              <Footer/>
             
        
            </main>
    )
}
const properties = new PageClass('Home','/',1,'07/08/2025')


properties.element = <Page/> 
export default properties.get