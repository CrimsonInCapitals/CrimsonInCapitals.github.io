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


const Page =()=>{
  const theme = useThemeContext()
    useEffect(()=>{
      document.title = 'CRIMSON: About'
      window.scrollTo(0,0)
    },[])
    return(
      <main id={theme} className='layer_one'>
        <MenuFull/>
        <FocusedContentSection style={{gap:'0'}}>
          <section style={{flexDirection:'column',display:'flex',gap:'0px',alignItems:'center',paddingTop:'calc(70px + 3em)',paddingBottom:'0'}}>
            <h1 className='aboutIntro'>I am Harrison</h1>
            <h1 className='aboutIntro'>Adam Cole</h1>
            <img style={{aspectRatio:'1/1',borderRadius:'50%',width:'clamp(25vw,10em,90vw',marginTop:'-2em',outline:'none'}} src={require('../images/about/headshot.png')}></img>
          </section>
          <section style={{gap:'0'}}>
            <h2>About me</h2>
            <p>Hello, I am Harrison Adam Cole. Graphic design is just as complex as any other discipline, with a rich history underpinned by the human spirit’s innate desire to solve problems and create beautiful things. Design decisions should be the result of considered actions. I take into account legacy, expectation, and forward momentum when I design to deliver not just a product, but a solution.</p>               
            <p>I am based in the cultural hub of London, which gives me insight into perspective, trends and heritage. The city is an epicentre of creation, from Sir Christopher Wren who designed awe inspiring monuments, to Harry Beck who defined how we visualise metropolitan transportation. London has a rich history but an equally vibrant present; it is a place where new technology and ideas are pushing boundaries.</p>
            <p>Heritage is so important in design. For example, it is important to acknowledge the reason why paragraphs have indents at the start (because of the Pilcrow*) and that serif fonts are the result of the techniques of stone inscribes of the Roman period. These examples of creative expression extend to today’s design thinking.</p>
            <p>Cultural background is a lens by which we see the world and we must take it into consideration when we design. Every aspect of a person’s background affects how they see the world and how they solve problems. Our backgrounds are an important tool, giving us invaluable insight, but they can also be a blindness to issues only others might spot. That is why working in a team of engaged and passionate people is essential.  Collaboration only works in an environment where people feel comfortable to share their unique perspectives and take risks.</p>
            <small>*A piece of punctuation indicating the start of a paragraph that has long since fallen out of use following the invention of the movable-type printing press in 1440.</small>
          </section>
          <section className='fill' style={{backgroundColor:'var(--background03)'}}>
          <section style={{gap:'24px'}}>
              <details>
                <summary>Problem solving</summary>
                <p>Design is an act of problem solving, but it is often also an act of problem identification. I solve business problems with design solutions. By listening and understanding, I design and deliver measurable improvements. Design is not just about what the customer sees, it is also about the journey a business goes on the reach that outcome.</p>
              </details>
              <hr/>
              <details>
                <summary>Buy-in</summary>
                <p>When creating and driving change, you need to understand both the impact of change and the underlying reasons certain practices were used in the first place. Getting buy-in is essential to create solutions that work. Once a negative feeling is linked to something, it is very hard to change its perception without rewriting the solution. I have worked with groups across different businesses to develop and design real solutions based on tangible input and feedback.</p>
              </details>
              <hr/>
              <details>
                <summary>Efficiency</summary>
                <p>What you deliver, as well as how productive you can be, depends on process. In situations where clear expectations do not exist, it is hard to measure success. I collaborate to create standardised systems to speed up delivery and ensure alignment throughout any project cycle. Work management systems and clear documentation help people stay informed and actively participate in delivering value.</p>
              </details>
            </section>
            </section>
            <section style={{gap:'24px'}}>
              <h2>Expertise</h2>


              <div>
                  <h5>Case Studies</h5>
                  <ProjectReel display={6}>

                  {getCaseStudies().map((r,key)=><ProjectCard key={key} page={Pages[r]()}/>)}
                  </ProjectReel>

              </div>
              <div>
              <h3>Tools</h3>
                <p>Tools are how we bring our ideas to life.  There is a near endless number of tools to choose from, all with different strengths and limitations. I select tools based on how appropriate they are to deliver the desired outcomes. For example, InDesign is excellent for creating print ready documents, Canva is perfect for giving differently skilled individuals access to creating brand content and Figma is great for giving hand-offs to developers. This is why it is important to consider who you are collaborating with.</p>
                <ul style={{display:'flex',flexDirection:'row',flexWrap:'wrap',padding:'0'}}>
                  <li>Indesign</li>
                  <li>Photoshop</li>
                  <li>Figma</li>
                  <li>Vs code</li>
                  <li>Git hub</li>
                  <li>Affinity designer</li>
                  <li>Affinity photo</li>
                  <li>Affinity publisher</li>
                  <li>Adobe illustrator</li>
                  <li>Adobe after effects</li>
                  <li>Adobe premiere pro</li>
                  <li>Canva</li>
                  <li>Meta business suite</li>
                  <li>Google analytics</li>
                  <li>PowerPoint</li>
                  <li>Word</li>
                  <li>Capture one</li>
                  <li>Instagram business</li>
                  <li>Blender</li>
                  <li>Monday.com</li>
                  <li>Trello</li>
                  <li>Microsoft planner </li>
                  <li>SketchUp</li>

                </ul>
              </div>
              <div>
                <h5>New Articles</h5>
                <ProjectReel>
                {getRecent().map((r)=><ProjectCard page={Pages[r]()} type="recent"/>)}
                </ProjectReel>
              </div>
            </section>

        </FocusedContentSection>
        <Footer/>
      </main>
    )
}
const properties = new PageClass('About','/about',1)


properties.element = <Page/> 
export default properties.get