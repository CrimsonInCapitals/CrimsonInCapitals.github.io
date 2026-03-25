import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass, URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { DavidPhillips } from "../../../components/Chips"
import { ParentContainer } from "../../../components/ParentPage"
import { IMG, VIDEO } from "../../../components/fullscreenable"
import backgroundImage from "../../../images/articles/davidphillips/brochurescoverstack.png"
import screenimage from '../../../images/articles/davidphillips/New+Berkley+House+-+pantry+6+©+Amy+Hunter+Photography.webp'
import { Review, reviews } from "../../../components/review"


const properties = new PageClass('David Phillips','/articles/davidphillips',2,'07/15/2025','parent',{chip:DavidPhillips,image:screenimage,description:'A leader in the large-scale furnishing industry, servicing the residential real estate market. Offering a broad range of services from furniture rental to window dressings, David Phillips for over 26 years.'})

const Background =()=>{
    const style={    
        backgroundImage: URL(screenimage),
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
                <p>A leading player in the BTR furnishing industry, David Phillips was a large-scale furnishing business with offices and logistics centres based in London and Manchester. Founded in 1998, the company first entered the BTR space with the redevelopment of the Olympic Park in 2013 into residential accommodation. David Phillips specialises in three main sectors: property development, operational real estate, and real estate. To serve these sectors, they have the following services: incentives, rental, projects, and packages.</p>
                <IMG className={'inline'} title='Image by Amy Hunter' src={require('../../../images/articles/davidphillips/The+Haydon+1+©+Amy+Hunter+Photography.webp')}alt='an open spread in a brochure demonstraiting the use of the new icons'/>
                <div>
                    <h2>Incentives</h2>
                    <p>Incentives primarily serve the development sector. By forming partnerships with developers, they offer furniture as incentives to potential buyers in the form of either a prepaid gift card or a preselected package designed to fit within the development. This model has also been used in the operational real estate market, in build to rent units, where occupation is slow.</p>
                </div>
                                <VIDEO controls style={{aspectRatio:'16/9'}}>
                                    <source src={require('../../../images/articles/scottishwidows/IconTrueSizeback.mp4')} type="video/mp4" />
                                </VIDEO> 
                <div>
                    <h2>Rental</h2>
                    <p>Rental as a model is used across all sectors, with the primary service of home staging being used to boost interest in properties. For rental properties and those seeking to relocate, they also offer rental for use services for those who need a property furnished on a temporary basis. </p>
                </div>
          
                      <div>
                    <h2>Packages</h2>
                    <p>Packages are any small-scale furnishing, usually without the involvement of an interior designer. They can consist of single items for the purpose of replenishment and can be carried out either by contacting a salesperson and having a quote created or through the online store.</p>
                </div>
                  <div>
                    <h2>Large-Scale Projects</h2>
                    <p>Comprising 80% of the business's activity, projects are large-scale by nature. With two groups managing projects, the furniture group and the fitted group, they work in isolation or together to turn a hollow building into a living space. The furniture group is comprised of interior designers, product experts, and project managers. Units are first space-planned with schemes that are created to suit potential residents. Then the product is selected and a schedule is created. From there, orders are placed, and installation is managed. The fitted team works similarly, but instead of furniture, they are dealing with kitchens and wardrobes.</p>
                </div>
                <IMG className={'inline'} title='Image by Amy Hunter' src={require('../../../images/articles/davidphillips/New+Berkley+House+-+pantry+1+©+Amy+Hunter+Photography.webp')}alt='an open spread in a brochure demonstraiting the use of the new icons'/>
                <div>
                    <p>All the Photography fetured on this page and within the other David Phillis projects is by Amy Hunter. website linked bellow:</p>
                    <a href="https://www.amyhunterphoto.com/" target="_blank" style={{textDecoration:'underline',color:'var(--Crimson)',fontStyle:'italic'}}>Amy Hunters Photography</a>
                </div>
               <Review review={reviews[2]}focal/>
        </ParentContainer>
    )
}

const BentoContent = ()=>{
    return(
        <div className="DPbento window">
            <Link to='articles/davidphillips' style={{position:'absolute',width:'100%',height:'100%'}}/>
            <Draggable defaultPosition={{x:380,y:80}}><div className="DPslide nine"/></Draggable>
            <Draggable defaultPosition={{x:340,y:120}}><div className="DPslide eight"/></Draggable>
            <Draggable defaultPosition={{x:300,y:160}}><div className="DPslide seven"/></Draggable>
            <Draggable defaultPosition={{x:260,y:200}}><div className="DPslide six"/></Draggable>
            <Draggable defaultPosition={{x:220,y:240}}><div className="DPslide five"/></Draggable>
            <Draggable defaultPosition={{x:180,y:280}}><div className="DPslide four"/></Draggable>
            <Draggable defaultPosition={{x:140,y:320}}><div className="DPslide three" /></Draggable>
            <Draggable defaultPosition={{x:100,y:360}}><div className="DPslide two" /></Draggable>
            <Draggable defaultPosition={{x:60,y:400}}><div className="DPslide one" /></Draggable>

        </div>
    )
}


const IconsBentoBackground =()=>{
    return(<Link className='QuickBento IconsBentoBackground'to={'../articles/davidphillips/iconlibrary'}/>)
}
const FigmaBentoBackground =()=>{
    return(<Link className='QuickBento FigmaBentoBackground'to={'../articles/davidphillips/figmapresentations'}/>)
}
const OtherBentoBackground =()=>{
    return(<Link className='QuickBento OtherBentoBackground'to={'../articles/davidphillips/smallerprojects'}/>)
}
const BrandBentoBackground =()=>{
    return(<Link className='QuickBento BrandBentoBackground'to={'../articles/davidphillips/brandrefresh'}/>)
}




properties.element = <Page/> 
export default properties.get
// export const properties=[[4,6],'David Phillips',0,'During the cource of my time at David Phillips I carried out a number of major projects','davidphillips',<BentoContent,page1/>]
