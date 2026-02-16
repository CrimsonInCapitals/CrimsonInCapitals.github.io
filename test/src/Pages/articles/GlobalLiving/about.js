import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass, URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { GLC } from "../../../components/Chips"
import { ParentContainer } from "../../../components/ParentPage"
import { IMG } from "../../../components/fullscreenable"
import backgroundImage from '../../../images/articles/glc/Indi_Sydney_City_1.webp'
import screenimage from '../../../images/articles/davidphillips/New+Berkley+House+-+pantry+6+©+Amy+Hunter+Photography.webp'
import { Review, reviews } from "../../../components/review"


const properties = new PageClass('The Global Living Company','/articles/thegloballivingcompany',2,'01/15/2026','parent',{
    chip:GLC,
    image:backgroundImage,
    description:'A leader in the residential furnishing market, The Global Living Company has furnished every corner of the map, with offices based in Dubai, Melbourne and London.'})

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
                <p>Responsible for deliver design-led furnishing and FF&E solutions for developers, agents and brokers, investors and landlords. They both designer created furniture packages and bespoke furnishing solutions tailored to each project and budget. The Global Living Companys interiors enhance marketability, accelerate sales and rental performance, and create high quality living environments across a global residential markets.</p>

                <Review review={reviews[0]} focal/>
                
               
        </ParentContainer>
    )
}





properties.element = <Page/> 
export default properties.get
// export const properties=[[4,6],'David Phillips',0,'During the cource of my time at David Phillips I carried out a number of major projects','davidphillips',<BentoContent,page1/>]
