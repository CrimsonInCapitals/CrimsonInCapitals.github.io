import { isValidElement, useEffect } from "react"
import { useThemeContext } from "../context/theme"
import { FocusedContentSection } from "./FocusedContentSection"
import { MenuFull } from "./Menu"
import { Footer } from "./Footer"
import * as Pages from '../Pages'
import { InDesign } from "./Chips"
import { ProjectCard, ProjectReel } from "./ProjectCard"
import { URL } from "../classes"


export const ParentContainer = ({properties,children})=>{
    const theme = useThemeContext()
    useEffect(()=>{
        document.title = properties.name
        window.scrollTo(0,0)
    },[])
    const isArtical=(r)=>{
        let Page = Pages[r]()
        return(Page.type == 'article')
    }
    const getArticals=(r)=>{
        let Page = Pages[r]()
        if(Page.type !== 'article')return false
        if(Page.name == properties.name)return false
        return Page.chips.some(chip=>chip.name==properties.chip.name)
    }
    const ReliventArticals= Object.keys(Pages).filter(isArtical).filter(getArticals).map(r=>{                let Page = Pages[r]()
        return {...Pages[r]()}
    })
    console.log(ReliventArticals)
    return(
        <main id={theme} className='layer_one'>
            <MenuFull/>
            <div style={{height:'50vh',overflow:'hidden',position:'relative'}}>
                <div className="parentHeroSection" style={{backgroundImage:URL(properties.image)}}/>
            </div>
            <FocusedContentSection style={{gap:'0'}}>
                {properties.fill && properties.fill}

                <section style={{gap:'40px'}}>
                <h1>{properties.name}</h1>
                {children}
                </section>
                <section className='fill layer_three' style={{backgroundColor:'var(--Background)'}}>
                  <section style={{display:'flex',gap:'20px'}}>   
                        <h2>{properties.name} Projects</h2>
                        <ProjectReel>
                            {ReliventArticals.sort((a,b)=>b.date-a.date).map((page)=><ProjectCard page={page} type='recent'/>)}
                        </ProjectReel>
                </section>
                </section>
            </FocusedContentSection>
            <Footer/>
        </main>
    )
}