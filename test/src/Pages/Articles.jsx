import { Link, useParams, useSearchParams } from "react-router-dom"
import { MenuFull } from "../components/Menu"
import { FocusedContentSection } from "../components/FocusedContentSection"
import { Footer } from "../components/Footer"
import { PageClass } from "../classes"
import { useThemeContext } from "../context/theme"
import { useEffect, useState } from "react"
import * as Pages from '.'
import { BrandCard, ProjectCard, ProjectReel } from "../components/ProjectCard"
import * as Chips from "../components/Chips"

export const getRecent =()=>Object.keys(Pages).filter(r=>Pages[r]('rank') > 2).sort((a,b)=> Pages[b]('date') - Pages[a]('date')).slice(0,2)
export const getCaseStudies=()=>Object.keys(Pages).filter(r=>Pages[r]('rank') == 3).sort((a,b)=> Pages[b]('date') - Pages[a]('date'))
export const getProjects = ()=>Object.keys(Pages).filter(r=>Pages[r]('rank') == 4).sort((a,b)=> Pages[b]('date') - Pages[a]('date'))
export const getBrand = ()=>Object.keys(Pages).filter(r=>Pages[r]('rank') == 2).sort((a,b)=> Pages[b]('date') - Pages[a]('date'))
export const getPerspectives = ()=>Object.keys(Pages).filter(r=>Pages[r]('rank') == 5 || Pages[r]('rank') == 6).sort((a,b)=> Pages[b]('date') - Pages[a]('date'))


const Page = ()=>{
    const theme = useThemeContext()
    useEffect(()=>{
        document.title = 'CRIMSON: Articles'
        window.scrollTo(0,0)
    },[])
    const [ArticalFilter,setArticalFilter]=useState(undefined)
    const [title,setTitle]=useState(false)
    const [maxHeat,setMaxHeat]=useState(0)

    const getPageHeat = (r,list=ArticalFilter) => {
        let page = Pages[r]()
        if(list == undefined || list == false || page.chips == undefined)return {...page, heat:false}
        let filteredlist = page.chips.filter(chip => list.some(Cchip => Cchip.name === chip.name))
        return {...page, heat: filteredlist.length == 0? false : filteredlist.reduce((overlap,chip)=> overlap + chip.weight,0)}
    }
    const ArticalHasChip=(r,chip)=>{
        let Page = Pages[r]()
        if(Page.type !== 'article')return false
        if(Page.name == properties.name)return false
        return Page.chips.some(Pagechip=>Pagechip.name==chip.name)
    }
    const ArticalsWithChip=(chip)=>Object.keys(Pages).filter(i=>ArticalHasChip(i,chip))
    
    const getPagesHeat=(chiplist=ArticalFilter)=>Object.keys(Pages).map(r => getPageHeat(r,chiplist))
    const [PagesWithHeat,setPagesWithHeat]=useState(getPagesHeat())
    const [showFilter,setShowFilter]=useState(false)

    const UpdateFilter=(chip)=>{
        let newList = ArticalFilter == undefined ? [chip]: ArticalFilter.indexOf(chip)<0? [...ArticalFilter,chip]:ArticalFilter.filter(item=>item!==chip)
        setArticalFilter(newList.length == 0 ? undefined:newList)
        setMaxHeat(newList.length == 0?0:newList.reduce((max,chip)=>max+chip.weight,0))
        setPagesWithHeat(getPagesHeat(newList))
    }


return(
    <main id={theme} className='layer_one'>
        <MenuFull/>
            <FocusedContentSection style={{gap:'0'}}>
                <section style={{gap:'40px',paddingTop:'calc(70px + 3em)'}}>
                    {/* <div> */}
                        <span className={'headerSpan'}>
                            {!title && <h1 className='aboutIntro'>Articles</h1>}
                            {title && <h2>{title}</h2>}
                            {ArticalFilter == undefined && <button className="basicbutton" onClick={()=>setShowFilter(!showFilter)}>{showFilter? 'Close Filter': 'Filter Articles'}</button>}
                            {ArticalFilter!== undefined && <button className="basicbutton primary" onClick={()=>{setArticalFilter(undefined);setTitle(false)}}>Clear Fitler</button>}
                        </span>
                    
                        {showFilter && <>
                            <div>
                                <h5>Filter by Tools Used</h5>
                                <div className="artical_chip_holder">
                                    {Object.keys(Chips).filter(r=>Chips[r].type=='Software').map((i)=>{
                                        let Comp = Chips[i].Componant
                                        return(<Comp key={i}
                                                    action='f' 
                                                    active={ArticalFilter!==undefined && ArticalFilter.indexOf(Chips[i])>=0} 
                                                    f={()=>UpdateFilter(Chips[i])}
                                                />)
                                    })}
                                </div>
                            </div>
                            <div>
                                <h5>Filter by Services</h5>
                                <div className="artical_chip_holder">
                                    {Object.keys(Chips).filter(r=>Chips[r].type=='Service').map((i)=>{
                                        let Comp = Chips[i].Componant
                                        return(<Comp key={i}
                                                    action='f' 
                                                    active={ArticalFilter!==undefined && ArticalFilter.indexOf(Chips[i])>=0} 
                                                    f={()=>UpdateFilter(Chips[i])}
                                                />)
                                    })}                    
                                </div>
                            </div>
                        </>}
                    {ArticalFilter == undefined ? <>
                        <div>
                            <h2>Latest</h2>
                            <ProjectReel >
                            {getRecent().map((r)=><ProjectCard key={Pages[r]('name')} page={Pages[r]()} type="recent"/>)}
                            </ProjectReel>
                        </div>
                        {getCaseStudies().length >0&&
                        <div>
                            <h2>Case Studies</h2>
                            <ProjectReel display={6}>
                            {getCaseStudies().map((r)=><ProjectCard key={Pages[r]('name')} page={Pages[r]()}/>)}
                            </ProjectReel>
                        </div>}
                        {getBrand().length >0 &&
                        <div>
                            <h2>Multi Project Brands</h2>
                            <ProjectReel brands>
                                {getBrand().filter((brand)=>brand).map((r)=>ArticalsWithChip(Pages[r]('chip')).length >1 &&<BrandCard key={Pages[r]('name')} page={Pages[r]()} />)}
                            </ProjectReel>
                        </div>}
                        {getProjects().length > 0 &&
                        <div>
                            <h2>Smaller Projects</h2>
                            <ProjectReel>
                                {getProjects().map((r)=><ProjectCard key={Pages[r]('name')} page={Pages[r]()}/>)}
                            </ProjectReel>
                        </div>}
                        {getPerspectives().length >0&&
                        <div>
                            <h2>Perspectives & Explorations</h2>
                            <p>Sharing my opinions on the latest desgin trends and indipendant exploration projects.</p>
                            <ProjectReel>
                                {getPerspectives().map((r)=><ProjectCard key={Pages[r]('name')} page={Pages[r]()} type="recent"/>)}
                            </ProjectReel>

                        </div>}
                    </>
                :
                <>  
                <span style={{display:'flex',alignItems:'baseline',gap:'0.5em'}} ><h3>Resaults</h3><h5>({PagesWithHeat.filter((page) => page.heat > 0 && page.heat !== false).length})</h5></span>
                    {PagesWithHeat.filter((page) => page.heat == maxHeat && page.heat !== false).length>0 &&
                    <div>
                        {PagesWithHeat.filter((page) => page.heat < maxHeat && page.heat >= 1).length>0 && <h5>Complete Match ({PagesWithHeat.filter((page) => page.heat == maxHeat && page.heat !== false).length})</h5>}
                        <ProjectReel cropped={false} fixed={true}>
                            {PagesWithHeat.filter((page) => page.heat == maxHeat && page.heat !== false).sort((a,b)=> b.date - a.date).map((page, index) => <ProjectCard page={page} key={page.name} type='recent' />)}
                        </ProjectReel>
                    </div>
                    }
                    {PagesWithHeat.filter((page) => page.heat < maxHeat && page.heat >= 1).length>0 &&
                        <div>
                            <h5>Partial Match ({PagesWithHeat.filter((page) => page.heat < maxHeat && page.heat >= 1).length})</h5>
                            <ProjectReel cropped={false} fixed={true}>
                                {PagesWithHeat.filter((page) => page.heat < maxHeat && page.heat >= 1).sort((a, b) => b.heat - a.heat).map((page, index) => <ProjectCard page={page} key={page.name} type='recent' />)}
                            </ProjectReel>
                        </div>
                    }
                </>}
                </section>
            </FocusedContentSection>
            <Footer/>
        </main>
    )
}

const properties = new PageClass('Articles','/articles/',1,'01/05/2022',{card:{}})
properties.element = <Page/> 
export default properties.get
