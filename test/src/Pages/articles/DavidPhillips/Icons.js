import Draggable from "react-draggable"
import { Link } from "react-router-dom"
import { PageClass, URL } from "../../../classes"
import { DavidPhillips, Designer, Figma, IconD, Presentations, ProcessOpt } from "../../../components/Chips"
import {DPC}from "../../../components/davidphillips/components/DPcontentprovider"
import {IconsDisplay}from "../../../components/davidphillips/components/carddemo"
import { ArticalContainer } from "../../../components/ArticalHolder"
import backgroundImage from '../../../images/articles/davidphillips/allicons.png'
const properties = new PageClass('David Phillips Icon Pack','/articles/davidphillips/icons',3,'06/14/2025','article',{chips:[<DavidPhillips/>,<IconD/>,<Figma/>,<Designer/>]})

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
                <h2>The Problem</h2>
                <p>Preexisting icon packs lacked icons for David Phillips' specific use cases, often requiring mixing sources for content, which meant stroke width or style was not consistent. As the brand uses icons as illustrative elements across brochures, presentations and the website, consistency is important.</p>
            </div>
            <div>
                <h2>The Solution</h2>
                <p>I designed the icons on a grid with guides for wide, tall, and square icons, ensuring they maintain visual balance. Stroke is consistent and matches the stroke width of divider lines laid out in the brand framework with corner radii to match the Materiality system.</p>
                <p>I started out by designing a base of eighty icons. This included the replacements for the thirty-two icons already in use as well as icons specific to real estate, sustainability, and furniture. The next group was focused on installation and tools. This was followed by sets for room type, transportation, interior design, and values & objectives. I also designed a set of smaller icons for interface buttons. At this point in time, we have over three hundred icons, covering everything from fire rating to a cup of tea.</p>
                </div>
                <DPC>
                    <IconsDisplay/>
                </DPC>
                <div>
                <p>The icons are distributed in four ways: through a font, a SharePoint folder containing PNG and SVG copies of each icon, a Figma library, and from the guidelines themselves where they can be copied from.</p>
            </div>
            <div>
                <h2>Conclusion</h2>
                <p>This project was highly successful in adoption and was received very positively by every department it affected, from sales to logistics. It allowed the company to express itself visually instead of just with words. This is the sort of project that does not have a fixed end date. As time goes on, the icons a business might need increases. I have created the tools and documentation to create an icon for whatever new use case might arrive, in the form of templates and rules, and a catalogue of examples.</p>
            </div>
        </ArticalContainer>
    )
}

properties.element = <Page/> 
export default properties.get