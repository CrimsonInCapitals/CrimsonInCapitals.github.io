import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass, URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { Adobe, AfterEffects, AnimationChip, Brand, DavidPhillips, Designer, Figma, Illustrator, InDesign, PhotoShop, PrintDesign } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"

const properties = new PageClass('Furniture Management Platform Launch Leaflet','/articles/davidphillips/Platformlaunchleaflet',4,'02/06/2025','article',{chips:[DavidPhillips,InDesign,PrintDesign,Adobe,Illustrator,PhotoShop]})

import backgroundImage from '../../../images/articles/davidphillips/linkleafletmockupset.png'
import { IMG, Reel } from "../../../components/fullscreenable"
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
            <div>
                <p>I worked with the Web Executive and the Marketing Manager to put together a leaflet highlighting the key features of our new platform to potential users, to be handed out to them by the sales team. This required displaying a lot of features and associated screenshots, meaning that careful consideration needed to be taken as to the layout. I ended up using an unconventional tri-fold design that allowed the user to open it in stages to gain more information.</p>
            </div>
            <IMG src={require('../../../images/articles/davidphillips/linkleafletmockupset.png')} alt='a mochup of a leaflet unfolding'/>

                <p>While the end result is something I am proud of, if I were to undertake this project on my own terms, I would focus on the benefits for the end user over features. In tandem to this, I would include photos of people using the tool, instead of exclusively screenshots of the interface.</p>
                <Reel>
                    <IMG className='inline'src={require('../../../images/articles/davidphillips/linkinside.png')} alt='the outside of the link leaflet layed flat'/>
                    <IMG className='inline'src={require('../../../images/articles/davidphillips/linkflat.png')} alt='the inside of the link leaflet layed flat'/>
                </Reel>
        </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get