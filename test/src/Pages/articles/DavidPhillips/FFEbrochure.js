import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass,URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { Adobe, AfterEffects, AnimationChip, Brand, DavidPhillips, Designer, Figma, Illustrator, InDesign, PhotoShop, PrintDesign } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"
import backgroundImage from '../../../images/articles/davidphillips/ffecovernew.png'
import { IMG } from "../../../components/fullscreenable"
const properties = new PageClass('Fitted Furniture Brochure','/articles/davidphillips/ffebrochure',4,'12/18/2024','article',{chips:[
DavidPhillips,
InDesign,
PrintDesign,
Designer,
Adobe,
Illustrator,
PhotoShop
]})

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
            <IMG src={require('../../../images/articles/davidphillips/ffecovernew.png')} alt='the cover page of the ffe brochure'/>

            <div className="bff">
                <p>The FF&E brochure features diagrams, maps, data and case studies and therefore, it is a good demonstration of a wide range of visualisation techniques.</p>
            </div>
                <IMG src={require('../../../images/articles/davidphillips/ffecover.png')} alt='the cover page of the ffe brochure'/>

                <p>The first page to highlight is the lead times and RIBA integration spread of pages. It gives a generalised overview of how David Phillips can integrate into a pre-existing works plan and install fourteen weeks after contract award. This is a key USP for David Phillips as it requires leveraging unique partnerships with a number of manufacturers to which they occupy about 80% of the production calendar.</p>
                <IMG src={require('../../../images/articles/davidphillips/riba.png')} alt='an open spread in a brochure'/>

                <p>Breaking down complex emissions calculations in a digestible way was essential for the carbon calculator spread. This section highlights another David Phillips USP — the ability to calculate the impact of specific product selection choices in terms of carbon impact. This page displays three variations on the same item of furniture and shows how changes in construction material and location affect impact.</p>
                <IMG src={require('../../../images/articles/davidphillips/carbon calculator.png')}alt='an open spread in a brochure'/>

                <p>The wardrobes and extra services spread highlights features using icons. By using icons with limited text, I was able to make the focus of this spread the full-page image of the wardrobe, highlighting construction quality and framing the content.</p>
                <IMG src={require('../../../images/articles/davidphillips/waredrobesspread.png')}alt='an open spread in a brochure'/>

    </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get