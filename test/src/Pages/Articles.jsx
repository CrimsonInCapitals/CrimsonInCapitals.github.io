import { Link } from "react-router-dom"
import { MenuFull } from "../components/Menu"
import { FocusedContentSection } from "../components/FocusedContentSection"
import { Footer } from "../components/Footer"
import { PageClass } from "../classes"
import { useThemeContext } from "../context/theme"
import { useEffect } from "react"
import * as Pages from '.'
import { BrandCard, ProjectCard, ProjectReel } from "../components/ProjectCard"

export const getRecent =()=>Object.keys(Pages).filter(r=>Pages[r]('rank') > 2).sort((a,b)=> Pages[b]('date') - Pages[a]('date')).slice(0,3)
export const  getCaseStudies=()=>Object.keys(Pages).filter(r=>Pages[r]('rank') == 3).sort((a,b)=> Pages[b]('date') - Pages[a]('date'))
export const getProjects = ()=>Object.keys(Pages).filter(r=>Pages[r]('rank') == 4).sort((a,b)=> Pages[b]('date') - Pages[a]('date'))
export const getBrand = ()=>Object.keys(Pages).filter(r=>Pages[r]('rank') == 2).sort((a,b)=> Pages[b]('date') - Pages[a]('date'))
export const getPerspectives = ()=>Object.keys(Pages).filter(r=>Pages[r]('rank') == 5).sort((a,b)=> Pages[b]('date') - Pages[a]('date'))

const Page = ()=>{
const theme = useThemeContext()

useEffect(()=>{
    document.title = 'CRIMSON: Articles'
    window.scrollTo(0,0)
},[])
return(
    <main id={theme} className='layer_one'>
        <MenuFull/>
            <FocusedContentSection style={{gap:'0'}}>
                <section style={{gap:'40px',paddingTop:'calc(70px + 3em)'}}>
                    <div>
                        <h5>New Articles</h5>
                        <ProjectReel>
                        {getRecent().map((r)=><ProjectCard page={Pages[r]()} type="recent"/>)}
                        </ProjectReel>

                    </div>
                    <div>
                        <h5>Case Studies</h5>
                        <ProjectReel display={6}>

                        {getCaseStudies().map((r)=><ProjectCard page={Pages[r]()}/>)}
                        </ProjectReel>

                    </div>
                    <div>
                        <h5>Multi Project Brands</h5>
                        <ProjectReel>
                            {getBrand().length === 0 ? <p>No Multi Project Brands at this time</p> :getBrand().map((r)=><BrandCard page={Pages[r]()} />)}
                        </ProjectReel>

                    </div>
                    <div>
                        <h5>Smaller Projects</h5>
                        <ProjectReel>
                            {getProjects().length === 0 ? <p>No Projects at this time</p> :getProjects().map((r)=><ProjectCard page={Pages[r]()}/>)}
                        </ProjectReel>

                    </div>
                    <div>
                        <h5>Perspectives</h5>
                        <ProjectReel>
                            {getPerspectives().length === 0 ? <p>No perspectives at this time</p> :getPerspectives().map((r)=><ProjectCard page={Pages[r]()}/>)}
                        </ProjectReel>

                    </div>
                </section>
            </FocusedContentSection>
            <Footer/>
        </main>
    )
}

const properties = new PageClass('Articles','/articles',1,'01/05/2022',{card:{}})
properties.element = <Page/> 
export default properties.get