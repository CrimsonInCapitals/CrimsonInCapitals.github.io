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
import backgroundImage from "../../../images/articles/askitalian/fromcalibriawithlove.jpg"
import { ArticalContainer } from "../../../components/ArticalHolder"


const properties = new PageClass('Ask Italian','/articles/askitalian',2,'12/25/2021','parent',{chip:AskItalian,image:backgroundImage,description:'Social media content designed inline with Ask Italian branding to promote services and provide updates to the local comunity in Haslemere.'})

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
        <ParentContainer properties={properties}>
            <h2>FaceBook Banners</h2>
                <Reel >
                    <IMG className='inline' src={require('../../../images/articles/askitalian/APEROL TIME.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/Coca-Cola facebook banner.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/open for takeaways.png')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/map.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/peroni.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/WINE AND DINE.jpg')} alt='the cover page of the ffe brochure'/>
                </Reel>
                <h2>Covid-19 Measures Awareness</h2>
                <Reel>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/CLEANING.png')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/MASKS MAYBE.png')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/PRONTOPROMPT.png')} alt='the cover page of the ffe brochure'/>
                </Reel>
                <h2>Ask Perks Promotion</h2>
                <Reel>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/perk December 2021.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/PERKSFEB2022.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/november perk.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/october.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/MARCH 2022 PERK.png')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/limoncello.jpg')} alt='the cover page of the ffe brochure'/>

                </Reel>
                <div>
                             <h2>Dinner and a Show</h2>
                             <p>Promotion in partnership with Haslemere Hall</p>
                </div>
                <Reel >
                    <IMG className='inline' src={require('../../../images/articles/askitalian/d&smap.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/EXPLAIN.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/d&scover.jpg')} alt='the cover page of the ffe brochure'/>
                </Reel>
                <Reel col='4'>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/5tht 1.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/12a.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/17B.jpg')} alt='the cover page of the ffe brochure'/>
                    <IMG className='inline' src={require('../../../images/articles/askitalian/21.jpg')} alt='the cover page of the ffe brochure'/>
                </Reel>

        </ParentContainer>
    )
}






properties.element = <Page/> 
export default properties.get
// export const properties=[[4,6],'David Phillips',0,'During the cource of my time at David Phillips I carried out a number of major projects','davidphillips',<BentoContent,page1/>]
