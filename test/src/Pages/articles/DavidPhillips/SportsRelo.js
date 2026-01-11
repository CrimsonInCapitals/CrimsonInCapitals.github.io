import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass,URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { Adobe, AfterEffects, AnimationChip, Brand, DavidPhillips, Designer, Figma, Illustrator, InDesign, PrintDesign } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"
import backgroundImage from "../../../images/articles/davidphillips/sportsRelocation/sportrelomockup.png"
import { IMG } from "../../../components/fullscreenable"

const properties = new PageClass('Sports Relocation','/articles/davidphillips/sportsrelocation',4,'06/14/2025','article',{chips:[DavidPhillips,InDesign,PrintDesign,Adobe,Illustrator]})

const Background =()=>{
    const style={    
        backgroundImage: URL(backgroundImage),
        backgroundSize: 'cover',
        backgroundPosition:'center center',
        // opacity: '80%'
    }
    return(
        <Link to={properties.route} style={style} className="fill"/>
    )
}
properties.fill = <Background/>

const Page = ()=>{

    return(
        <ArticalContainer properties={properties}>
            <IMG className='inline'src={require('../../../images/articles/davidphillips/sportsRelocation/sportrelomockup.png')} alt='a mochup of the front of the brochure'/>

                <IMG className='inline'src={require('../../../images/articles/davidphillips/sportsRelocation/chair page.png')} alt='a mochup of an inner spread showing a definition of the term home staging'/>
            <div>
                <h4>Premium Sub-Brand Spread</h4>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/sportsRelocation/milcspreadmuckup.png')} alt='a mochup of an inner spread explaining the David Phillips home staging process'/>
            </div> 
        </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get