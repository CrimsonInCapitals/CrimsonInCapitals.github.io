import Draggable, {DraggableCore} from 'react-draggable';
import { PageClass, URL } from "../../../classes"
import { DavidPhillips, Figma, Presentations, ProcessOpt } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"
import { Link } from "react-router-dom"
import { useReducer, useRef } from 'react';
const properties = new PageClass('Figma Pitch Templates','/articles/davidphillips/figma',3,'04/15/2025','article',{chips:[<DavidPhillips/>,<Figma/>,<ProcessOpt/>,<Presentations/>]})
import backgroundImage from '../../../images/articles/davidphillips/slidegallery.png'
import { IMG } from '../../../components/fullscreenable';


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
                <h2>The Problem</h2>
                <p>Large-scale projects are worked on by several teams, which include project product co-ordinators, project managers, interior designers, salespeople, and departmental heads. All these people have various levels of experience with presentation creation tools. The interior designers used Adobe InDesign to have access to the design features they needed, as such presentations had to be made using it. The drawback with this was that all content had to be added by an interior designer or the graphic design team, which presented a significant bottleneck. It also meant that content for slides about the business were being written up in PowerPoint or Word by a relevant expert and then added later by a designer. The third issue was that when prices were confirmed, it would require a project manager to email a designer and a designer to open, add to and export the presentation, before sending it back to be shared with the client, which added significant bloat to project development. It became clear that it was an issue in August 2024, when we hired two additional interior designers who would be handing projects back and forth with each other and me, causing overwriting issues of the files saved on SharePoint.</p>
            </div>
            <div className='slideplaygroundholder'style={{overflow:'hidden'}}>
                {/* <div className="slideplayground">
                    <Draggable defaultPosition={{x:900,y:420}}><div className="DPslide oldtwentyone"/></Draggable>
                    <Draggable defaultPosition={{x:700,y:45}}><div className="DPslide oldtwenty"/></Draggable>
                    <Draggable defaultPosition={{x:-50,y:-50}}><div className="DPslide oldnineteen"/></Draggable>
                    <Draggable defaultPosition={{x:400,y:-50}}><div className="DPslide oldeighteen"/></Draggable>
                    <Draggable defaultPosition={{x:-50,y:45}}><div className="DPslide oldseventeen"/></Draggable>
                    <Draggable defaultPosition={{x:300,y:100}}><div className="DPslide oldsixteen"/></Draggable>
                    <Draggable defaultPosition={{x:25,y:150}}><div className="DPslide oldfifteen"/></Draggable>
                    <Draggable defaultPosition={{x:150,y:50}}><div className="DPslide oldfourteen"/></Draggable>
                    <Draggable defaultPosition={{x:250,y:10}}><div className="DPslide oldtherteen"/></Draggable>
                    <Draggable defaultPosition={{x:500,y:175}}><div className="DPslide oldtwelve" /></Draggable>
                    <Draggable defaultPosition={{x:225,y:125}}><div className="DPslide oldeleven" /></Draggable>
                    <Draggable defaultPosition={{x:50,y:-25}}><div className="DPslide oldten" /></Draggable>
                    <Draggable defaultPosition={{x:800,y:-100}}><div className="DPslide oldnine"/></Draggable>
                    <Draggable defaultPosition={{x:-100,y:90}}><div className="DPslide oldeight"/></Draggable>
                    <Draggable defaultPosition={{x:600,y:200}}><div className="DPslide oldseven"/></Draggable>
                    <Draggable defaultPosition={{x:50,y:300}}><div className="DPslide oldsix"/></Draggable>
                    <Draggable defaultPosition={{x:300,y:100}}><div className="DPslide oldfive"/></Draggable>
                    <Draggable defaultPosition={{x:500,y:20}}><div className="DPslide oldfour"/></Draggable>
                    <Draggable defaultPosition={{x:250,y:350}}><div className="DPslide oldthree" /></Draggable>
                    <Draggable defaultPosition={{x:450,y:250}}><div className="DPslide oldtwo" /></Draggable>
                    <Draggable defaultPosition={{x:100,y:-50}}><div className="DPslide oldone" /></Draggable>

                </div> */}
            </div>
            {/* <Draggable defaultPosition={{x:380,y:80}}><div className="DPslide nine"/></Draggable> */}

            <div>
                <h2>The Solution</h2>
                <p>The solution came in the form of a tool we had already started using for social media content and designing the new brand guidelines, Figma. The Figma team had just announced the release of a new presentation tool called slides.  I pitched it to the forementioned teams, and they agreed to do a trial run. I began designing the template based on the InDesign one in use and in line with the brand framework library I had already created. We ran the test on a project for an Australian client, which required liaising with our sales partners out there. As such, a tool that allowed for multiple people to jump on at any time and work on different parts was essential. The outcome of the trial was the first tender ever finished early. Over the next couple of months, we made the switch for project pitches completely.</p>
            </div>
            <IMG className='inline' src={require('../../../images/articles/davidphillips/figmaimage.png')}alt="an image depicting a template in figma slides"/>

            <div>
                <h3>Framework</h3>
                <p>I built out a robust set of text styles, page layouts, and components rolled into a Figma library that could be accessed through the built-in search panel. This library included layout guides that employed the new card system, with pre-styled effects like drop shadow and glass that matched what was defined by the guidelines. It also included specific things, such as product cards for the product gallery page. </p>
            </div>
            <IMG className='inline' src={require('../../../images/articles/davidphillips/figmaframework.png')} alt="an image of the variables withing the David Phillips library"/>

            <div>
                <h3>Templates</h3>
                <p>I worked in collaboration with the projects and design teams to create templates that followed the narrative of their specific pitches. These included pitches for amenity spaces, show homes and large-scale furnishing projects. I also created variants for specific segments, such as the student segment with its yellow colour scheme. These templates allowed the interior design team to focus on interior design, for the project team to come in and enter prices and critical paths, and for the product team to enter product information.</p>
            </div>
            <IMG className='inline' src={require('../../../images/articles/davidphillips/figmatemplates.png')} alt="a set of templates"/>

            <div>
                <h3>Pre-made Content</h3>
                <p>Across different projects, there will always be a certain level of duplication of content that is relevant to multiple clients. Using the same library that I mentioned before, I worked with marketing and specialists across the company to create slides that detailed specific features and selling points, covering things from recycling to delivery process. Before this, we had to look through old presentations or contact multiple people to provide information as quickly as possible, which used up precious time with deadlines looming.</p>
            </div>
            <div className='paralaxpremades'style={{position:'relative'}}>
                {/* <IMG className='inline' src={require('../../../images/articles/davidphillips/premadeslides.png')}/> */}

            </div>
                 <div>
                <h2>Conclusion</h2>
                <p>Allowing everyone to edit one file at once is a more collaborative way to work and avoids countless handoffs or the creation of multiple files, which would later need to be merged. This radically improved efficiency, allowing teams to deliver better, more polished presentations and tenders. Overall, it is estimated that this switch saved 30% on development time and reduced emails by 70% for the tender stage.</p>
            </div>
            </ArticalContainer>
    
    )
}

properties.element = <Page/> 
export default properties.get