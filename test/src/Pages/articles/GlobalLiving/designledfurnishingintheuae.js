import { Link } from "react-router-dom"
import { Adobe, Designer, GLC, Illustrator, InDesign, PhotoShop, PrintDesign} from "../../../components/Chips"
import backgroundImage from '../../../images/articles/glc/dlfuae.webp'
import { IMG, Reel } from "../../../components/fullscreenable"
import { ArticalContainer } from "../../../components/ArticalHolder"
import { PageClass, URL } from "../../../classes"
import { Review, reviews } from "../../../components/review"

const properties = new PageClass('Design-Led Furnishing in the UAE Brochure','/articles/thegloballivingcompany/dlfuae',4,'01/30/2026','article',{chips:[
GLC,
InDesign,
PrintDesign,
Designer,
Adobe,
Illustrator,
PhotoShop
]})

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
                <p>Being the first large distribution brochure for The Global Living Company we went through several initial styles before landing on the below. As a business they are primarily targeting property agents while at the same time trying to evoke their design-led philosophy. That means the brochure had to be designed with the target market and that elevated aesthetic in mind.</p>
                <IMG className='inline'src={require('../../../images/articles/glc/dlfuae.webp')} alt='the cover page of the Design-Led Furnishing in the UAE brochure'/>
                <p>For the cover I opted to go for a large-scale image the wraps around to the back. This is both a nice effect and pulls the viewer in, to focus on the furniture. The colour palette throughout uses calm neutral like earthy brown and taupe. This again serves to make the photos the centre of attentions.</p>
                <IMG className='inline'src={require('../../../images/articles/glc/packages.webp')} alt='an inner spead showcasing the furniture packages on offer'/>
                <p>We initially explored more extravagant styling leaning into a vintage aviation inspired look. This approach would have worked better if their focus had been on a consumer audience, prioritising differentiation within the global and Emirati market. One aspect of this initial concept that did remain in the final version is the Globe gallery seen on the 'Trusted by Market Leaders' page.</p>
                <IMG className='inline'src={require('../../../images/articles/glc/globe.webp')} alt='our partners page with a globe style gallery of past projects'/>
            </div>
            <Review review={reviews[0]} focal/>
    </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get