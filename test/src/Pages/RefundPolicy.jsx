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
import { ProjectCard, ProjectReel } from '../components/ProjectCard';
import { getCaseStudies, getRecent } from './Articles';
import * as Pages from '.'

const properties = new PageClass('Refund Policy','/refundpolicy',1)

const Page =()=>{
  const theme = useThemeContext()
    return(
      <main id={theme} className='layer_one'>
        <MenuFull/>
        <FocusedContentSection style={{gap:'0'}}>
          <section style={{gap:'60px'}}>
            <div>
              <h1 className='aboutIntro'>Refund Policy</h1>
              <p>We aim to ensure you are satisfied with all digital products purchased from Crimson in Capitals. This includes icon packs and custom icon orders. Since this policy relates to digital products that cannot be returned, we do our best to help get your purchase up and running. Below is our resolution process.</p>
            </div>
            <div>
              <h2>Contact Us</h2>
              <p>Contact <a href='mailto:harrison.cole@crimsonincapitals.com'>harrison.cole@crimsonincapitals.com</a> within 30 days of purchase date to alert us of the issue</p>
            </div>
            <div>
              <h2>Assistance</h2>
              <p>We will work with you to ensure a product is working in line with its intended use and your reasonable expectations. For products held on a third party like Framer, Assistance may delay in line with platform process.</p>
            </div>
            <div>            
              <h2>Refund Issuance </h2>
              <p>If a refund is approved, you must remove or destroy all copies of the unwanted product to the best of your ability wherever applicable.</p>
            </div>
            <p>All refunds are at the sole discretion of the Harrison Adam Cole</p>
          </section>
        </FocusedContentSection>
        <Footer/>
      </main>
    )
}


properties.element = <Page/> 
export default properties.get