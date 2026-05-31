import Draggable, {DraggableCore} from 'react-draggable';
import { PageClass, URL } from "../../../classes"
import { DavidPhillips, Figma, PowerPoint, Presentations, ProcessOpt } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"
import { Link } from "react-router-dom"
import { useReducer, useRef } from 'react';
const properties = new PageClass('Figma Pitch Templates','/articles/davidphillips/figma',3,'04/15/2025','article',{chips:[DavidPhillips,Figma,ProcessOpt,Presentations,PowerPoint]})
import backgroundImage from '../../../images/articles/davidphillips/slidegallery.png'
import { IMG, Reel } from '../../../components/fullscreenable';


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
    const myRef =useRef(undefined)
    return(
        <ArticalContainer properties={properties}>
            <div>
                <h2>Overview</h2>
                <div style={{display:'flex',flexDirection:'row', gap:'16px',flexWrap:'wrap'}}>
                    <div className='OverviewCard layer_three'>
                    <h5>Removing friction in the business tender process at David Phillips by switching to Figma from PowerPoint and InDesign for better collaboration, brand consistency, and access to reusable content.</h5>
                    <p>Allowing Sales, Business, and Design teams to work together to quickly and accurately produce business tenders. These documents were responsible to securing 30% of total business revenue.</p>
                    </div>
                    <div className='OverviewCard layer_one'>
                        <h3 className='HeadlineNumber'>30%</h3><h3>reduction in tender development time.</h3>
                    </div>
                </div>
            </div>
            <div className="bff">
                <h2>The Problem</h2>
                <p>Large-scale projects are worked on by several teams, which include project product co-ordinators, project managers, interior designers, salespeople, and departmental heads. All these people have various levels of experience with presentation creation tools. The interior designers used Adobe InDesign to have access to the design features they needed, as such presentations had to be made using it. The drawback with this was that all content had to be added by an interior designer or the graphic design team, which presented a significant bottleneck. It also meant that content for slides about the business were being written up in PowerPoint or Word by a relevant expert and then added later by a designer. The third issue was that when prices were confirmed, it would require a project manager to email a designer and a designer to open, add to and export the presentation, before sending it back to be shared with the client, which added significant bloat to project development. It became clear that it was an issue in August 2024, when we hired two additional interior designers who would be handing projects back and forth with each other and me, causing overwriting issues of the files saved on SharePoint.</p>
                <p>Below we have examples from three different presentations. You can see wildly different applications of Typography, colour, and formatting.</p>

            </div>
            <Reel col='4'>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/Slide1.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/Slide9.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/Slide21.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/Slide42.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/copy for harrison-_01.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/copy for harrison-_04.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/copy for harrison-_05.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/copy for harrison-_07.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/Stayo Design Presentation_2.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/Stayo Design Presentation_3.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/Stayo Design Presentation_20.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/oldpresentaitonslides/Stayo Design Presentation_11.png')}alt="an image showing an old style presentation from before the intoduction of the figma temapltes"/>
            </Reel>
            <div className="bff">
                <h2>The Solution</h2>
                <p>The solution came in the form of a tool we had already started using for social media content and designing the new brand guidelines, Figma. The Figma team had just announced the release of a new presentation tool called slides.  I pitched it to the forementioned teams, and they agreed to do a trial run. I began designing the template based on the InDesign one in use and in line with the brand framework library I had already created. We ran the test on a project for an Australian client, which required liaising with our sales partners out there. As such, a tool that allowed for multiple people to jump on at any time and work on different parts was essential. The outcome of the trial was the first tender ever finished early. Over the next couple of months, we made the switch for project pitches completely.</p>
            </div>
            <IMG className='inline' src={require('../../../images/articles/davidphillips/figmaimage.png')}alt="an image depicting a template in figma slides"/>

            <div className="bff">
                <h3>Framework</h3>
                <p>I built out a robust set of text styles, page layouts, and components rolled into a Figma library that could be accessed through the built-in search panel. This library included layout guides that employed the new card system, with pre-styled effects like drop shadow and glass that matched what was defined by the guidelines. It also included specific things, such as product cards for the product gallery page. </p>
            </div>
            <IMG className='inline' src={require('../../../images/articles/davidphillips/figmaframework.png')} alt="an image of the variables withing the David Phillips library"/>

            <div className="bff">
                <h3>Templates</h3>
                <p>I worked in collaboration with the projects and design teams to create templates that followed the narrative of their specific pitches. These included pitches for amenity spaces, show homes and large-scale furnishing projects. I also created variants for specific segments, such as the student segment with its yellow colour scheme. These templates allowed the interior design team to focus on interior design, for the project team to come in and enter prices and critical paths, and for the product team to enter product information.</p>
            </div>
            <IMG className='inline' src={require('../../../images/articles/davidphillips/figmatemplates.png')} alt="a set of templates"/>
            <Reel col={4}>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/1.png')}alt="Slide one of the large scale furnishing template feturing the david phillips logo on froseted glass"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/2.png')}alt="Slide two of the large scale furnishing template feturing the project title and partner logo"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/3.png')}alt="Slide three of the large scale furnishing template feturing introdiction images and text"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/4.png')}alt="Slide four of the large scale furnishing template feturing a set ok images and key words that define the first design scheme"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/5.png')}alt="Slide five of the large scale furnishing template feturing the material mood board and lving room mood board for the scheme"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/6.png')}alt="Slide six of the large scale furnishing template feturing the room boodboards for the dining and bedrooms"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/7.png')}alt="Slide seven of the large scale furnishing template feturing the full product catalogue"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/8.png')}alt="Slide eight of the large scale furnishing template feturing the pricing and inventory lists"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/3a.png')}alt="Slide three of additional template pages used to add section cover pages"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/4a.png')}alt="Slide four of additional template pages used for pointing out key detials in a room mockup"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/5a.png')}alt="Slide five of additional template pages used to highlight key detials on a floor plan"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/6a.png')}alt="Slide six of additional template pages feturing an image gallery"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/7a.png')}alt="Slide seven of additional template pages used to highlight key fetures of two products"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/8a.png')}alt="Slide eight of additional template pages used to highlight key fetures of one product"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/9a.png')}alt="Slide nine of additional template pages used to highlighting six key points with images"/>
                <IMG className='inline' src={require('../../../images/articles/davidphillips/Templateslides/10a.png')}alt="Slide ten of additional template pages used to highlight six key images with heading only"/>
            </Reel>
            <div className="bff"> 
                <h3>Pre-made Content</h3>
                <p>Across different projects, there will always be a certain level of duplication of content that is relevant to multiple clients. Using the same library that I mentioned before, I worked with marketing and specialists across the company to create slides that detailed specific features and selling points, covering things from recycling to delivery process. Before this, we had to look through old presentations or contact multiple people to provide information as quickly as possible, which used up precious time with deadlines looming.</p>
            </div>
                <Reel col={4}>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/01.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/02.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/03.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/04.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/05.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/06.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/07.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/08.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/09.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/10.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/11.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/12.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/13.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/14.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/15.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                    <IMG className='inline' src={require('../../../images/articles/davidphillips/newpremades/16.png')}alt="an example of a pre-made slide for the new figma tempalate"/>
                </Reel>
                 <div className="bff">
                <h2>Conclusion</h2>
                <p>Allowing everyone to edit one file at once is a more collaborative way to work and avoids countless handoffs or the creation of multiple files, which would later need to be merged. This radically improved efficiency, allowing teams to deliver better, more polished presentations and tenders. Overall, it is estimated that this switch saved 30% on development time and reduced internal emails sent during the tender stage by 70%.</p>
            </div>
            </ArticalContainer>
    
    )
}

properties.element = <Page/> 
export default properties.get