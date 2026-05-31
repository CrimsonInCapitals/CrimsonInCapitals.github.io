import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass, URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Brand, Designer, DigitalMarketing, Figma, IconD, Instagram, MetaBS, Presentations } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/imedia/imediacover.png'
import { IMG } from "../../components/fullscreenable"

const properties = new PageClass('Pitstop Social Media Strategy','/articles/pitstop',4,'09/24/2025','article',{chips:[Brand,Figma,Instagram,DigitalMarketing,MetaBS]})

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
                <IMG className="inline" src={require('../../images/articles/imedia/logo.png')} alt="the pitstop logo with a bold yellow background"/>
                <div className="bff">
                    <h2>Design-led Social Media Stratagy</h2>
                    <p>When you first launch a new brand with a principal product you have the unique opportunity to tell a new story and attract the right people in the right ways. Pitstop if an app that offers rewards in exchange for visits to motorway service stations. This information gives us a broad target market for the app. Anyone from commuters to families. </p>


                <p>We will be focusing on Instagram strategy for this project though these offerings work best when you cover multiple platforms, we shall touch on this at the end. </p>
                <p>Social medias like Instagram and Facebook are great for discoverability through interest targeted content, especially with reels. They are also perfect for targeting those with families. 49.9% of Instagram users are aged between 25 and 44 in the UK according to Sprout Social. </p>
                </div>
                <IMG className="inline" src={require('../../images/articles/imedia/instagrammockup.png')} alt="A mockup of how the proposed changes would look on instagram"/>
                <p>With these criteria we need a strategy that is of interest to those with families and aligns with Pitstops service. For this I proposed destination recommendations, in both reel and carousel form, paired with stories linking to web articles on the topic. This gives pitstop the opportunity to suggest service stations to stop of at based on the destination.</p>
                    <IMG className="inline" src={require('../../images/articles/imedia/pinnedposts.png')} alt='the three pinned posts'/>
                    <p>We use pinned posts to outline how the app works and the content that the account shares, incentivising follows and promote the app organically.</p>
                    <IMG className="inline" src={require('../../images/articles/imedia/howitworks.png')} alt='a carousle outlining how the Pitstop app works'/>  
                <div className="bff">
                    <p>This is an example of how a carousel is structures, highlighting the location, notable features, followed by a subtle app push and a call for engagement.</p>
                </div>
                <IMG className="inline" src={require('../../images/articles/imedia/locationexample.png')} alt='example of a carousel post recomending a location to visit'/> 
                    
                <p>This strategy can also be leveraged online through SEO optimised pages on such topics. We can also create pages on topics like “best service station to stop of at on the way to Tintagel.” We can link the social media presence to the website. It also offers an exciting opportunity to integrate these trip recommendations into the app itself, further incentivising use. </p>
  
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