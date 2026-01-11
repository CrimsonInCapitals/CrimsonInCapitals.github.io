import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass, URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { AskItalian, Brand, DavidPhillips, DigitalMarketing, Instagram, MetaBS } from "../../../components/Chips"
import { ParentContainer } from "../../../components/ParentPage"
import { IMG, Reel } from "../../../components/fullscreenable"
import backgroundImage from "../../../images/articles/askitalian/christmasday2021.jpg"
import { ArticalContainer } from "../../../components/ArticalHolder"


const properties = new PageClass('Ask Christmas 2021','/askitalian/christmas',4,'12/25/2021','article',{chips:[AskItalian,Brand,DigitalMarketing,Instagram,MetaBS]})

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
            <h2>General Christmas Content</h2>
                <Reel>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/christmasday2021.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/3DECMARKET.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/deliveroo christmas.jpg')} alt='the cover page of the ffe brochure'/>
                </Reel>
                <div style={{gap:'20px'}}>
                <h2>Perks Promotion</h2>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/12daysofChristmas2021.jpg')} alt='the cover page of the ffe brochure'/>
                <Reel col='4'>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/day3.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/day4.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/day6.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/day7.jpg')} alt='the cover page of the ffe brochure'/>
                </Reel>
                </div>
        </ArticalContainer>
    )
}






properties.element = <Page/> 
export default properties.get
// export const properties=[[4,6],'David Phillips',0,'During the cource of my time at David Phillips I carried out a number of major projects','davidphillips',<BentoContent,page1/>]
