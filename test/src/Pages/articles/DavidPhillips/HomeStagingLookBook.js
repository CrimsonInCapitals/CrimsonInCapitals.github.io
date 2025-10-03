import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass,URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { Adobe, AfterEffects, AnimationChip, Brand, DavidPhillips, Designer, Figma, Illustrator, InDesign, PrintDesign } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"
import backgroundImage from "../../../images/articles/davidphillips/homestaginglookbook/coverLarge.png"
import { IMG } from "../../../components/fullscreenable"

const properties = new PageClass('Home Staging Look Book','/articles/davidphillips/homestaginglookbook',4,'06/21/2025','article',{chips:[<DavidPhillips/>,<InDesign/>,<PrintDesign/>,<Adobe/>]})

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
            <IMG className='inline'src={require('../../../images/articles/davidphillips/homestaginglookbook/coverm.png')} alt='a mochup of the front of the brochure'/>

            <p>Designed to both showcase past projects and highlight capabilities, this brochure is a carefully considered tool. Created to target London based estate agents the document is structured to showcase projects most relevant to that market.</p>
            <IMG className='inline'src={require('../../../images/articles/davidphillips/homestaginglookbook/dm.png')} alt='a mochup of an inner spread showing a definition of the term home staging'/>
            <IMG className='inline'src={require('../../../images/articles/davidphillips/homestaginglookbook/hitm.png')} alt='a mochup of an inner spread explaining the David Phillips home staging process'/>
            <p>This brochure is also the first major print project following the 2024 brand refresh. The examples below are pure interpretations of the refresh. We prioritize subtle layering and texture to introduce the impression of ‘materiality’. You can see this demonstrated in he frosted glass cover with the textured border that raps round to the back.</p>
            <IMG className='inline'src={require('../../../images/articles/davidphillips/homestaginglookbook/dfm.png')} alt="a mochup of the last spread of the brochure showing a don't forget section"/>

    </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get