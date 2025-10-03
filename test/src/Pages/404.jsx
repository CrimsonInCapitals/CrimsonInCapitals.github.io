import {Routes,Route, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { NameText, VectorText } from '../components/TextComponants';
import { FocusedContentSection } from '../components/FocusedContentSection';
import { Logo, MaskedLogo } from '../components/logo';
import { MenuFull, MenuLogoMask, MenuPartA, MenuPartB } from '../components/Menu';
import { Footer } from '../components/Footer';
import { PageClass } from '../classes';
import { useThemeContext } from '../context/theme';


const Page =()=>{
    const theme = useThemeContext()
  
    useEffect(()=>{
      document.title = 'CRIMSON: 404 Page not found'
      window.scrollTo(0,0)
    },[])
    return(
        <main id={theme} className='layer_one'>
                <MenuFull/>
                <section style={{height:'100vh',gap:'20px', justifyContent:'center'}}>
                  <h1 style={{color:'var(--Crimson)',fontSize:'70vw',position:'fixed',zIndex:'-1',opacity:'25%',width:'100vw',left:'-10vw',textAlign:'center',fontWeight:'700',fontStyle:'italic'}}>404</h1>
                  <h2>404</h2>
                  <p>the entered url could not be resolved. if this feels like an error constact <a href='mailto: harrison.cole@crimsonincapitals.com' style={{color:'var(--Crimson)'}}>harrison.cole@crimsonincapitals.com</a></p>
                </section>
              
            </main>
    )
}
const properties = new PageClass('404','*',0)


properties.element = <Page/> 
export default properties.get