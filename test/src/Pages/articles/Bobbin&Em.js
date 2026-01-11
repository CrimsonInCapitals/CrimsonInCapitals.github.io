import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass, URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Brand, Designer, IconD, PrintDesign } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/bobbinandem/facemaskrowscovered.png'
import { IMG, Reel } from "../../components/fullscreenable"

const properties = new PageClass('Bobbin & Em','/articles/bobbinandem',4,'11/13/2020','article',{chips:[Brand,Designer,PrintDesign]})

const Background =()=>{
    const style={    
        backgroundImage: URL(backgroundImage),
        backgroundSize: 'cover',
        backgroundPosition:'center bottom',
        // opacity: '30%'
    }
    return(
        <Link to={properties.route} style={style} className="fill"/>
    )
}
properties.fill = <Background/>

const Page = ()=>{
    return(
        <ArticalContainer properties={properties}>
                <IMG className="inline" src={require('../../images/articles/bobbinandem/logoscale.png')} alt="the Bobbin and Em logo for a range of sizes"/>
                <IMG className="inline" src={require('../../images/articles/bobbinandem/facemaskrowscovered.png')} alt="face mask display with branded stickers"/>
                <IMG className="inline" src={require('../../images/articles/bobbinandem/colour.png')} alt="a colour pallete"/>

                <Reel col={3}>
                    <IMG className="inline" src={require('../../images/articles/bobbinandem/internalboxmockup.webp')} alt='a set of 8 icons of different styles of underware'/>
                    <IMG className="inline" src={require('../../images/articles/bobbinandem/externalboxmockup.webp')} alt='incons depicting how to take messurments for bra sizing'/>         
                    <IMG className="inline" src={require('../../images/articles/bobbinandem/stickerreel.webp')} alt='incons depicting how to take messurments for bra sizing'/>         

                </Reel>
                <IMG className="inline" src={require('../../images/articles/bobbinandem/baepattern.png')} alt="a sawing inspired brand pattern"/>

         </ArticalContainer>
    );
}

const Bento = ()=>{
    return(
        <Link to='../articles/amazinggrace' className='QuickBento Amazinggracebento'/>
    )
}
properties.element = <Page/> 
export default properties.get


// export const properties=[[2,2],'Amazing Grace',1,'Eye capturing visuals for a small botique','amazinggrace',<Bento,Page/>]