import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass, URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Adobe, AFHowTo, AfterEffects, AnimationChip, Brand, Designer, Illustrator, Mockups, Motion, PersonalProject, Tutorials } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/afhowto/mockupshowtocover.webp'
import { IMG, VIDEO } from "../../components/fullscreenable"

const properties = new PageClass('Using Mockups in Affinity','/articles/af-mockups',6,'05/26/2026','article',{chips:[AFHowTo,Tutorials,Designer,Mockups]})

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
// properties.image = backgroundImage

const Page = ()=>{
    return(
        <ArticalContainer properties={properties}>
            <div style={{gap:'0'}}>

                <p>
                    Today I am going to run through how you use symbols-based mock-up templates in Affinity.  
                </p>
                <p>
                    If you are interested, here is a bit of background about Affinity and how symbols work. Affinity combines vector and bitmap tools within one program. All edits, including effects, are non-destructive by default, making every element similar to a Photoshop smart object. Symbols are linked and synchronised, meaning a change to one version will be instantly copied to the others.
                </p>
                <p>
                    When you open your .af mock-up template, you will be greeted by at least two artboards. The one named mock-up and the rest are where you will place your assets. The number of artboards will depend on the mock-up you are using. 
                    </p>
                                </div>

                <IMG className="inline" src={require('../../images/articles/afhowto/usemockupone.png')} alt='placing an image in one of tbe slot artboards'/>
                <p>
                   For this example, I have created a mock-up template using a beautiful image from <a target="_blank" style={{textDecoration:'underline',color:'var(--Crimson)',fontStyle:'italic'}}href="https://www.instagram.com/ebahiir" >ebahiir</a> of three pieces of artwork running up a flight of stairs. On the mock-up, you will see small labels that correspond to the names of the artboards on the left. These are only visible in the file and won’t be on the final export.
                </p>
                <IMG className="inline" src={require('../../images/articles/afhowto/usemockuptwo.png')} alt='reagranging and updating in real time'/>
                <p>
                    I am going to select ‘Art Two’ and drag in an image from my files and you’ll see it instantly appear on the mock-up at the same time. You can now drag it around or add additional content until you are satisfied and it will update in real time.  
                </p>
                <IMG className="inline" src={require('../../images/articles/afhowto/mockupcover.webp')} alt='final export of mockup with three peaces of artwork'/>
                <div style={{gap:'0'}}>
                <p>
                    From there, select the mock-up and export.
                </p>
                <p>
                    The beautiful florals are from  <a target="_blank" style={{textDecoration:'underline',color:'var(--Crimson)',fontStyle:'italic'}}href="https://unsplash.com/@rikonavt" >Rikonavt</a> on Unsplash.
                </p>
                <p>
                    So, what is the benefit to using Affinity and this style of template over more common tools like Photoshop? Accessibility is the main benefit. For example, this approach doesn’t require using the layers panel, and anyone with a computer can download Affinity for free to access these templates. Another significant benefit is file size because the templates don’t rely on embedded objects. This means that the average file size is significantly smaller. Across nineteen files, I saw a 60% reduction in file size, from 6.8 to 2.6GB when converting from PSDs to AF files using symbols. 
                </p>
                <p>
                    If you are interested in learning about how you can make these mock-up templates, get in contact or leave a comment on my LinkedIn post.
                </p>
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