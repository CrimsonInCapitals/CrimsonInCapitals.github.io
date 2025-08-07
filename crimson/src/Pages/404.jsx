import {Routes,Route, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { NameText, VectorText } from '../components/TextComponants';
import { FocusedContentSection } from '../components/FocusedContentSection';
import { Logo, MaskedLogo } from '../components/logo';
import { MenuLogoMask, MenuPartA, MenuPartB } from '../components/Menu';
import { Footer } from '../components/Footer';
import { PageClass } from '../classes';


const FourZeroFour =()=>{
    useEffect(()=>{
      document.title = 'CRIMSON: 404 Page not found'
      window.scrollTo(0,0)
    },[])
    return(
        <main id='light main'>
              <MenuPartA/>
              {/* <MenuLogoMask/> */}
              <div style={{gap:'-11em',display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} className='hero'>
              <FocusedContentSection minHeight='90vh'>
                <section>
                  <h1>404</h1>
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
const properties = new PageClass('404','*',<FourZeroFour/>,4)


export default properties.get