import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass, URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Brand, Designer, Figma, IconD, PhotoShop, Presentations } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/overbury/cover.png'
import { IMG } from "../../components/fullscreenable"

const properties = new PageClass('Overbury Co-branded Deck','/articles/overbury',4,'09/06/2025','article',{chips:[Brand,Presentations,Figma,PhotoShop]})

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
                <IMG className="inline" src={require('../../images/articles/overbury/cover.png')}/>
                <div className="bff">
                    <h2>Co-branded Pitch Decks</h2>
                    <p>Pitch example: Charlotte Tilbury from Overbury</p>
                </div>
                <IMG className="inline" src={require('../../images/articles/overbury/12.png')}/>
                <p>Co-branding can be a heavily time intensive. The need for each presentation to be unique means that content that could otherwise be recycled may need to be designed from scratch with the partner brand in mind.</p>
                <IMG className="inline" src={require('../../images/articles/overbury/11.png')} alt='a set of 8 icons of different styles of underware'/>

                <p>That isn't to say it isn't a worth will time investment. In the case of Overbury, understanding the client you are pitching to is critical as they design office spaces that need to reflect that brand.</p>
                <IMG className="inline" src={require('../../images/articles/overbury/10.png')} alt='incons depicting how to take messurments for bra sizing'/>  
                <p>This example shows how content might be reused while heavily branding a clients deck. By creating overlay cards with your reusable content like case studies and CV slides you can reuse this content before dropping back to showcase the fully bespoke interior design constant that would be custom anyway.</p>
                <IMG className="inline" src={require('../../images/articles/overbury/13.png')} alt='incons depicting how to take messurments for bra sizing'/>   
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