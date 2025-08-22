import {Routes,Route, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { NameText, VectorText } from '../components/TextComponants';
import { FocusedContentSection } from '../components/FocusedContentSection';
import { Logo, MaskedLogo } from '../components/logo';
import { MenuFull, MenuLogoMask, MenuPartA, MenuPartB } from '../components/Menu';
import { Footer } from '../components/Footer';
import { PageClass } from '../classes';
import { useThemeContext } from '../context/theme';
import { Figma } from '../components/Icons/Figma';
import { Canva } from '../components/Icons/Canva';
import { HorizontalAutoScroller } from '../components/InfinateScroller';


const About =()=>{
  const theme = useThemeContext()
    useEffect(()=>{
      document.title = 'CRIMSON: About'
      window.scrollTo(0,0)
    },[])
    return(
        <main id={theme} className='layer_one'>
              <MenuFull/>

              <FocusedContentSection>
                <section>
                  <Figma width='10%'/>
                  <Canva width='30%'/>
                </section>
                <section className='fill' style={{backgroundColor:'var(--background03)'}}>
                  <section style={{gap:'-60px'}}>
                    <h1>I am Harrison</h1>
                    <h1>Adam Cole</h1>
                    <img></img>
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
const properties = new PageClass('About','/about',<About/>,1)


export default properties.get