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
import backgroundImage from "../../../images/articles/askitalian/M2.jpg"
import { ArticalContainer } from "../../../components/ArticalHolder"


const properties = new PageClass('Ask Italian Menus','/askitalian/menus',4,'02/12/2022','article',{chips:[AskItalian,Brand,DigitalMarketing,Instagram,MetaBS]})

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
            <h2>Father's Day Set Menu</h2>
                <Reel>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/1.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/2.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/3.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/4.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/5.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/6.jpg')} alt='the cover page of the ffe brochure'/>
                </Reel>
                <h2>Kids Menu</h2>
                <Reel col='5'>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/M2b.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/M3.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/M4.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/M5.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/M6.jpg')} alt='the cover page of the ffe brochure'/>
                </Reel>
                <h2>Wine Pairing</h2>
                <Reel >
                    <IMG className='inline' src={require('../../../images/articles/askitalian/w1.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/w2.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/w3.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/w4.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/w5.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/w6.jpg')} alt='the cover page of the ffe brochure'/>
                </Reel>
                <h2>Cocktails & More</h2>
                <Reel >
                    <IMG className='inline' src={require('../../../images/articles/askitalian/cocktails1.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/cocktails2.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/cocktails3.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/cocktails4.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/cocktails5.jpg')} alt='the cover page of the ffe brochure'/>
                </Reel>
                <h2>Menu Update Posts</h2>
                <Reel col='4'>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/new menu.png')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/NEW PASTA.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/OAT MILK.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/SOFT & SPECIAL STRAWBERRY SPRITZ.png')} alt='the cover page of the ffe brochure'/>
                </Reel>
        </ArticalContainer>
    )
}






properties.element = <Page/> 
export default properties.get
// export const properties=[[4,6],'David Phillips',0,'During the cource of my time at David Phillips I carried out a number of major projects','davidphillips',<BentoContent,page1/>]
