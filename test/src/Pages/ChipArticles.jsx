import { Link, Navigate, useParams} from "react-router"
import { MenuFull } from "../components/Menu"
import { FocusedContentSection } from "../components/FocusedContentSection"
import { Footer } from "../components/Footer"
import { PageClass } from "../classes"
import { useThemeContext } from "../context/theme"
import { useEffect, useState } from "react"
import * as Pages from '.'
import { BrandCard, ProjectCard, ProjectReel } from "../components/ProjectCard"
import * as Chips from "../components/Chips"


const Page = ()=>{
    const theme = useThemeContext()

    const {filter} = useParams()
    const search =()=>{
        let found = false
        if(filter==null)return found
        Object.keys(Chips).map((index)=>{
            let chip = Chips[index]
            if(chip.name == filter)found = chip
        }) 
        return found
    }
    const initaliseFilter=chip=>chip == false? undefined:[chip]


    const [ArticalFilter,setArticalFilter]=useState(initaliseFilter(search()))
    const [title,setTitle]=useState(search().display + ' Projects')
    console.log(ArticalFilter)
    const [maxHeat,setMaxHeat]=useState(initaliseFilter(search())[0].weight)

    const getPageHeat = (r,list=ArticalFilter) => {
        let page = Pages[r]()
        if(list == undefined || list == false || page.chips == undefined)return {...page, heat:false}
        let filteredlist = page.chips.filter(chip => list.some(Cchip => Cchip.name === chip.name))
        console.log({...page,heat: filteredlist.length})
        return {...page, heat: filteredlist.length == 0? false : filteredlist.reduce((overlap,chip)=> overlap + chip.weight,0)}
    }
    const getPagesHeat=(chiplist=ArticalFilter)=>Object.keys(Pages).map(r => getPageHeat(r,chiplist)).filter((page) => page.heat == maxHeat && page.heat !== false).sort((a,b)=> b.date - a.date)
  
    const [PagesWithHeat,setPagesWithHeat]=useState(getPagesHeat())

    const UpdateFilter=(chip)=>{
        let newList = [chip]
        setArticalFilter(newList.length == 0 ? undefined:newList)
        setMaxHeat(newList.length == 0?0:newList.reduce((max,chip)=>max+chip.weight,0))
        setPagesWithHeat(getPagesHeat(newList).filter((page) => page.heat == maxHeat && page.heat !== false).sort((a,b)=> b.date - a.date))
        setTitle(chip.display+' Projects')
    }
    useEffect(()=>{
        UpdateFilter(search())
        window.scrollTo(0,0)
    },[filter])

return(
    <main id={theme} className='layer_one'>
        {ArticalFilter == undefined && <Navigate to={Pages.Articles('route')} replace/>}
        <MenuFull/>
            <FocusedContentSection style={{gap:'0'}}>
                <section style={{gap:'40px',paddingTop:'calc(70px + 3em)'}}>
                    {/* <div> */}
                        <span className={'headerSpan'}>
                            {title && <h2>{title}</h2>}

                            {ArticalFilter!== undefined && title && <Link className="basicbutton primary" to={Pages.Articles('route')}>View All Articles</Link>}

                        </span>
                    
                
                    {PagesWithHeat.filter((page) => page.heat == maxHeat && page.heat !== false).length>0 &&
                    <div>
                        <ProjectReel cropped={false} fixed={true}>
                            {PagesWithHeat.sort((a,b)=> b.date - a.date).map((page, index) => <ProjectCard page={page} key={index} type='recent' />)}
                        </ProjectReel>
                    </div>
                    }
                </section>
            </FocusedContentSection>
            <Footer/>
        </main>
    )
}

const properties = new PageClass('Articles','/articles/:filter',0,'01/05/2022',{card:{}})
properties.element = <Page/> 
export default properties.get
