import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass, URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Designer, IconD } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/amazinggrace/icons.png'
import { IMG } from "../../components/fullscreenable"

const properties = new PageClass('Amazing Grace','/articles/amazinggrace',4,'06/14/2021','article',{chips:[<IconD/>,<Designer/>]})

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
                <p>By researching the brand and analysing its aesthetic, I was able to design this set of icons for use on social media and on their website.</p>
                <IMG className="inline" src={require('../../images/articles/amazinggrace/stylebreakdown.png')} alt="a colour ration pie chart, and storke style indicaotr"/>
                <p>I first focused on identifying key colours the boutique used. Then I worked out ratios in which they were used. Looking deeper, I concluded that using gentle tapering strokes would be the best fit for the brand.</p>
                <IMG className="inline" src={require('../../images/articles/amazinggrace/typeicons.png')} alt='a set of 8 icons of different styles of underware'/>

                <p>These icons I designed for the measurements page.</p>
                <IMG className="inline" src={require('../../images/articles/amazinggrace/sizing icons.png')} alt='incons depicting how to take messurments for bra sizing'/>         
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


// export const properties=[[2,2],'Amazing Grace',1,'Eye capturing visuals for a small botique','amazinggrace',<Bento/>,<Page/>]