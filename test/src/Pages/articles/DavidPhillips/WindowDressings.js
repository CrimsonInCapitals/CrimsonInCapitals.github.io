import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass,URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { Adobe, AfterEffects, AnimationChip, Brand, DavidPhillips, Designer, Figma, Illustrator, InDesign, PrintDesign } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"
import backgroundImage from "../../../images/articles/davidphillips/windowdressings/windmock.png"
import { IMG } from "../../../components/fullscreenable"

const properties = new PageClass('Window Dressings Brochure','/articles/davidphillips/windowdressings',4,'09/04/2024','article',{chips:[<DavidPhillips/>,<InDesign/>,<PrintDesign/>,<Adobe/>]})

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
            <IMG className='inline'src={require('../../../images/articles/davidphillips/windowdressings/windmock.png')} alt='a mochup of the front of the brochure'/>
            <div>
                <h4>Intro Spread</h4>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/windowdressings/windresintro.png')} alt='a mochup of an inner spread showing a definition of the term home staging'/>
            </div>
            <div>
                <h4>Product Spec Sample</h4>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/windowdressings/windresspreadex.png')} alt='a mochup of an inner spread explaining the David Phillips home staging process'/>
            </div> 
            <div>
                <h4>Process Breakdown Spread</h4>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/windowdressings/windreshowitworks.png')} alt="a mochup of the last spread of the brochure showing a don't forget section"/>
            </div>
        </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get