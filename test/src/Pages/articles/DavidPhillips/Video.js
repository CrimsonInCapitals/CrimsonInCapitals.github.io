import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass, URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { Adobe, AfterEffects, AnimationChip, Brand, DavidPhillips, Designer, Figma, Illustrator } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"

const properties = new PageClass('Website Launch Social Video','/articles/davidphillips/websitelaunch',4,'02/06/2025','article',{chips:[<DavidPhillips/>,<AfterEffects/>,<Illustrator/>,<Figma/>,<AnimationChip/>,<Adobe/>]})

import backgroundImage from '../../../images/articles/davidphillips/Phonemockups.png'
import { IMG } from "../../../components/fullscreenable"


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
                <h2></h2>
                <p>When we relaunched our website, I was tasked with storyboarding and creating the video to announce it on social media. Taking the list of pages and features that the marketing executive wanted to highlight, I created a detailed story board. This story board was sent for approval and after minor changes based on specific additional inclusion requests, I started creating the video using Adobe After Effects. Because each page needed to be animated, I started by creating images of the full length of the page, creating and animating buttons to match the site. I also recreated the before and after section, a key feature to highlight. Each page on the site was its own composition, so I could pick where to stop and at what times banner videos would play.</p>
                <IMG src={require('../../../images/articles/davidphillips/webimages.png')}/>

                <p>The video opens with the logo morphing into a search bar. This uses vector path keyframing in a similar fashion to letter morphing. Another notable feature is the masking used when the text disappears into the pill at the start and end. </p>
                <div style={{display:'flex',alignItems:'center',borderRadius:'8px',overflow:'hidden'}} className="instagram holder">
 <article className='instagrampost'>
                    <video style={{width:'51.43%',aspectRatio:'9/16'}} controls>
                    <source src={require('../../../images/articles/davidphillips/BA-250110-01_06.mp4')}/>
                    </video>
                    <IMG style={{width:'48.57%',margin:'0'}}src={require('../../../images/articles/davidphillips/instagramrightside.png')}/>

                </article>
                </div>
               
                <p>If I were to approach a similar project again, I would reduce the amount of content being shown, to allow for more time on certain sections while making the video shorter. This style of content doesn’t perform very well on reels and similar formats because it lacks insightful or interesting information specific to a target niche.</p>


         </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get