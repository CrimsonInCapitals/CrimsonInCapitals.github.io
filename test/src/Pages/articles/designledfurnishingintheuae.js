import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass,URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Adobe, Designer, Illustrator, InDesign, PhotoShop, PrintDesign ,GLC} from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/glc/dlfuae.webp'
import { IMG, Reel } from "../../components/fullscreenable"
const properties = new PageClass('Design-Led Furnishing in the UAE Brochure','/articles/thegloballivingcompany/dlfuae',4,'01/15/2026','article',{chips:[
GLC,
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
            <Reel col={1}>
                <IMG className='inline'src={require('../../images/articles/glc/dlfuae.webp')} alt='the cover page of the Design-Led Furnishing in the UAE brochure'/>
                <IMG className='inline'src={require('../../images/articles/glc/packages.webp')} alt='an inner spead showcasing the furniture packages on offer'/>
                <IMG className='inline'src={require('../../images/articles/glc/globe.webp')} alt='our partners page with a globe style gallery of past projects'/>
            </Reel>
    </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get