import {Routes,Route, useLocation} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { NameText, VectorText } from '../components/TextComponants';
import { FocusedContentSection } from '../components/FocusedContentSection';
import { Logo, MaskedLogo } from '../components/logo';
import { MenuLogoMask, MenuPartA, MenuPartB } from '../components/Menu';
import { Footer } from '../components/Footer.jsx';
import { PageClass } from '../classes';
import { useThemeContext } from '../context/theme.jsx';


const Index =()=>{
  const theme = useThemeContext()
  const main = useRef(null)
  console.log( new Date())
  useEffect(()=>{
    document.title = 'CRIMSON: Home'
    window.scrollTo(0,0)
  },[])
    return(
        <main className='layer_one' ref={main} id={theme}>
              <MenuPartA/>
              {/* <MenuLogoMask/> */}
              <div style={{gap:'-11em',display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} className='hero'>
              <FocusedContentSection minHeight='90vh' style={{justifyContent:'center'}}>
                <section style={{height:'100%',gap:'20px'}}>
                  <h2>Design is the process of finding the best solution to the problem.</h2>
                  <p>- Harrison Adam Cole</p>
                </section>
                
              </FocusedContentSection>
              <VectorText/>
              </div>
              <MenuPartB/>
              <></>
              <FocusedContentSection>
                <section>
                  <h1>Where have we come from?</h1>
                  <div>
                    <article>example</article>
                  </div>
                  <h1>Where are we going next?</h1>
        
                </section>
                <section className='fill' style={{backgroundColor:'var(--background03)'}}>
                  <section>
                    <h2>Case Studies</h2>
                    <div>
                      <h2>Introduction</h2>
                      <p>Hello, I am Harrison, a London based graphic designer. I have worked on a full breadth of design projects, both print and digital. Previously, I worked as a short-term consultant, which allowed me to offer a fresh perspective to clients. I have also worked in full-time positions, making considered choices based on a deep understanding of complex business needs.</p>
                    </div>
                    <div>
                      <h2>Ethos</h2>
                      <p>Design represents the intersection of creativity and function. Graphic design, like all design, requires finding a balance between the two. As a designer you must strive for a solution that looks visually appealing and easily consumable. This means considering accessibility, learned patterns and expected outcomes, while also seeking to stand out and define a unique solution. Looking around, you can see a myriad of examples of how a product can consider both and still be itself. This is most clear in the systems of design we interact with every day. On a single device, we might see the likes of Google, Microsoft, Adobe, Amazon, and Meta. While we once saw design pioneered by Type Setters and Furniture Makers, we now see companies like Apple define visual eras, marking them not by decades but by software updates.</p>
                      <p>Designers create systems by which they build consistent experiences but in order to create these experiences, one must understand the limitations of their mediums. As someone designing a chair must consider the limitations of the timber and an architect must consider the limitations of steel, so must a graphic designer understand the limitations of their technology.</p>
                    </div>
                    <h2>Other Projects</h2>
                  </section>
                </section>
                <section>
                <h2>The latst from TikTok</h2>
        
                </section>
              </FocusedContentSection>
              <Footer/>
             
        
            </main>
    )
}
const properties = new PageClass('Home','/',<Index/>,1,'07/08/2025')


export default properties.get