import { isValidElement, useEffect } from "react"
import { useThemeContext } from "../context/theme"
import { FocusedContentSection } from "./FocusedContentSection"
import { MenuFull } from "./Menu"
import { Footer } from "./Footer"
import * as Pages from '../Pages'
import { InDesign, New } from "./Chips"
import { DisplayDate, getAgo, ProjectCard, ProjectReel } from "./ProjectCard"


export const ArticalContainer = ({properties,children})=>{
    const theme = useThemeContext()
    useEffect(()=>{
        document.title = properties.name
        window.scrollTo(0,0)
    },[])
    const isArtical=(r)=>{
        let Page = Pages[r]()
        return(Page.type == 'article')
    }
    const getHeat=(r)=>{
        let Page = Pages[r]()
        if(Page.type !== 'article')return false
        if(Page.name == properties.name)return false
        let overlap = Page.chips.filter(chip=>{
            return properties.chips.some(Cchip=>Cchip.type === chip.type) 
        }).length
        return overlap
    }
    const PageswithHeat= Object.keys(Pages).filter(isArtical).map(r=>{                let Page = Pages[r]()
        return {...Pages[r](),heat:getHeat(r)}
    })
    return(
        <main id={theme} className='layer_one'>
            <MenuFull/>
            <FocusedContentSection style={{gap:'0'}}>

                <section style={{gap:'40px',paddingTop:'calc(70px + 3em)'}}>
                <div>
                    <h1>{properties.name}</h1>
                    <p className="date">{DisplayDate(properties.date,'recent')} —  {properties.subtype}</p>
                    <div className='artical_chip_holder'>                {getAgo(properties.date)<30 && <New/>}
                    {...properties.chips}</div>
                </div>
                {children}
                </section>
                <section className='fill layer_three' style={{backgroundColor:'var(--Background)'}}>
                  <section style={{display:'flex',gap:'20px'}}>   
                        <h2>Similar Projects</h2>
                        <ProjectReel>
                            {PageswithHeat.filter((page)=>page.heat!==false).sort((a,b)=>b.heat-a.heat).map((page)=><ProjectCard page={page} type='recent'/>)}
                        </ProjectReel>
                </section>
                </section>
            </FocusedContentSection>
            <Footer/>
        </main>
    )
}