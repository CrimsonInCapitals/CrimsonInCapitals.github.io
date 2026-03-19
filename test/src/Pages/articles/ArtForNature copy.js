import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass, URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Adobe, Designer, Helen, IconD, InDesign, PhotoShop, PrintDesign } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/ArtForNature/cover.webp'
import { IMG } from "../../components/fullscreenable"

const properties = new PageClass('Art For Nature','/articles/artfornature2',4,'02/08/2026','article',{chips:[InDesign,Designer,PhotoShop,PrintDesign,Helen,Adobe]})

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
            <div>
                <p>I worked with Helen Faircloughs team do deliver the print and digital collateral for the auction and wider exhibition for Art for Nature. The exhibition was hosted in collaboration with Yaba Chic Reserve, a Costa Rican wildlife charity to raise money for wildlife preservation in the region through the actioning of sculptures by Zac Goldsmith.</p>
                <p>Assessing the requirements for success we determined what collateral would be required and then worked within a 5-week timeline for development and delivery.</p>
                <IMG className="inline" src={require('../../images/articles/ArtForNature/donationform.webp')} alt="Art for nature Donation form"/>
                <p>The first group were forms, for collecting donations, placing bids and purchasing for-sale items. Each form was delivered in 4 formats to meet the clients and guest needs. This included 2 print versions, one for at home printing and the other that was professionally printed for the event. The other 2 were optimised for digital use. The first being a digital pdf with Acrobat signatures for authentication and the second being a web form, which is easier to use on phones and doesn’t require specialised software.</p>
                <IMG className="inline" src={require('../../images/articles/ArtForNature/invite.webp')} alt='Press preview digital invite'/>
                <p>We created and sent out 2 invites, one for the private action and the other for the press preview. These were distributed digitally via email and as such have ‘click to RSVP’ buttons for ease of use.</p>
                <IMG className="inline" src={require('../../images/articles/ArtForNature/itemlist.webp')} alt='list of action and sale items'/>
                <p>We also had several on location assets, including wall prints, exhibition catalogue, display plaques and a double-sided item list. All were professionally printed and delivered to the venue in time for setup.</p>
                <IMG className="inline" src={require('../../images/articles/ArtForNature/plack.webp')} alt='display item with label'/>      
                <p>The successful execution of the exhibition met both the requirements of the client and resulted in the raising of ~£300k for Costa Rican wildlife charities.</p>  
                <a target="_blank" href="https://zacgoldsmithart4nature.com/" style={{textDecoration:'underline',color:'var(--Crimson)',fontStyle:'italic'}}>Learn more about Art For Nature here</a> 
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