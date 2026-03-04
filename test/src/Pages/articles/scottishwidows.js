import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass, URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Adobe, AfterEffects, AnimationChip, Brand, Illustrator, Motion } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/scottishwidows/swframes.png'
import { IMG, VIDEO } from "../../components/fullscreenable"

const properties = new PageClass('Scottish Widows: Brand Mark Animation','/articles/scottishwidows',6,'09/03/2025','article',{chips:[Brand,Motion,AfterEffects,AnimationChip,Adobe,Illustrator]})

const Background =()=>{
    const style={    
        backgroundImage: URL(backgroundImage),
        backgroundSize: 'cover',
        backgroundPosition:'center center',
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
                <VIDEO style={{aspectRatio:'16/9'}}>
                    <source src={require('../../images/articles/scottishwidows/TrueSizeback.mp4')} type="video/mp4" />
                </VIDEO>
                <div>
                <h2>Scottish Widows Logo Animation Study</h2>
                <p>In this study I chose to reflect the brands message of 'looking to the future'. The character takes a step forward (Right) and opens up in the face of the wind, being emboldened.</p></div>
                <IMG className="inline" style={{background:'white'}} src={require('../../images/articles/scottishwidows/TrueSize0000212.png')}/>
                <div>
                <IMG className="inline" src={require('../../images/articles/scottishwidows/devide.png')} alt='a set of 8 icons of different styles of underware'/>

                <p>Dividing the logo into its animatable parts</p>
                </div>
                <div>
                <VIDEO controls style={{aspectRatio:'16/9'}}>
                    <source src={require('../../images/articles/scottishwidows/IconTrueSizeback.mp4')} type="video/mp4" />
                </VIDEO>                
                <p>Brand mark animation in isolation</p></div>
                <div>
                <IMG className="inline" src={require('../../images/articles/scottishwidows/swframes.png')} alt='incons depicting how to take messurments for bra sizing'/>
                <p>Brand mark animation frames</p>   
                </div>
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