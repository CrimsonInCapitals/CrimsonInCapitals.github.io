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
import { FormSection } from '../components/form';
const properties = new PageClass('Services','/services',1)

const Page =()=>{
  const theme = useThemeContext()
    useEffect(()=>{
      document.title = 'CRIMSON: Services'
      window.scrollTo(0,0)
    },[])
    return(
      <main id={theme} className='layer_one'>
        <MenuFull/>
        <FocusedContentSection style={{gap:'0'}}>
          <section style={{gap:'20px'}}>
            <h1 className='aboutIntro'>Services Coming Soon</h1>


            <div>
              <h5>Case Studies</h5>
              <ProjectReel display={6}>
                {getCaseStudies().map((r,key)=><ProjectCard key={key} page={Pages[r]()}/>)}
              </ProjectReel>
            </div>
            <div>
              <h5>New Articles</h5>
              <ProjectReel>
                {getRecent().map((r)=><ProjectCard page={Pages[r]()} type="recent"/>)}
              </ProjectReel>
            </div>
          </section>
          <FormSection/>
          
        </FocusedContentSection>
        <Footer/>
      </main>
    )
}


properties.element = <Page/> 
export default properties.get