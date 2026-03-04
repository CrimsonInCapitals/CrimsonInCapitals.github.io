import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass,URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { AfterEffects, AnimationChip, Brand, DavidPhillips, Designer, Developer, Figma, IconD, Illustrator, InDesign, Motion, PrintDesign, ProcessOpt, Reactchip, WebDesign } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"
import backgroundImage from '../../../images/articles/davidphillips/idesign/mockupofend.png'
import { IMG, Reel } from "../../../components/fullscreenable"

const properties = new PageClass('Bespoke Packages Platform','/articles/davidphillips/resolve',4,'05/13/2025','article',{chips:[DavidPhillips,Figma,Developer,WebDesign,ProcessOpt,IconD,Motion]})

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
            <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/mockupofend.png')} alt='a mochup of a leaflet unfolding'/>
            <video className="inline" controls>
                <source src={require('../../../images/articles/davidphillips/idesign/Componantscroll.mp4')} type="video/mp4"/>
            </video>
            <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/atoms.png')} alt='a mochup of a leaflet unfolding'/>
            <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/iconsforpackages.png')} alt='a mochup of a leaflet unfolding'/>
            <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/votemobile.png')} alt='a mochup of a leaflet unfolding'/>
            <Reel col='2'>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-Login-Light.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-Login-Dark.png')} alt='a mochup of a leaflet unfolding'/>
            </Reel>
            <Reel>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-Product-Light.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-Product-Dark.png')} alt='a mochup of a leaflet unfolding'/>
            </Reel>
            <Reel>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-Overview-Light.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-Overview-Dark.png')} alt='a mochup of a leaflet unfolding'/>
            </Reel>
            <Reel>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-PaySum-Light.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-PaySum-Dark.png')} alt='a mochup of a leaflet unfolding'/>
            </Reel>
            <Reel>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-Tenant-Light.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Desktop-Mockup-Tenant-Dark.png')} alt='a mochup of a leaflet unfolding'/>
            </Reel>
            <Reel>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Mobile-Login-Light.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Mobile-User-Light.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Mobile-Product-Light.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Mobile-Login-Dark.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Mobile-User-Dark.png')} alt='a mochup of a leaflet unfolding'/>
                <IMG className='inline'src={require('../../../images/articles/davidphillips/idesign/Mobile-Product-Dark.png')} alt='a mochup of a leaflet unfolding'/>

            </Reel>
    </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get