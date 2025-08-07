import {Routes,Route, useLocation} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { NameText, VectorText } from '../components/TextComponants';
import { FocusedContentSection } from '../components/FocusedContentSection';
import { Logo, MaskedLogo } from '../components/logo';
import { MenuLogoMask, MenuPartA, MenuPartB } from '../components/Menu';
import { Footer } from '../components/Footer';
import { PageClass } from '../classes';


const Index =()=>{
  const main = useRef(null)
  console.log( new Date())
  useEffect(()=>{
    document.title = 'CRIMSON: Home'
    window.scrollTo(0,0)
  },[])
    return(
        <main className='layer_one' ref={main}>
              <MenuPartA/>
              {/* <MenuLogoMask/> */}
              <div style={{gap:'-11em',display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} className='hero'>
              <FocusedContentSection minHeight='90vh'>
                <section>
                  <h1>Why design matters</h1>
                </section>
                <video>
        
                </video>
                
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
                                <h2>Introduction</h2>
                    <h2>Ethos</h2>
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