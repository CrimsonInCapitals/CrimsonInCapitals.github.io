import Draggable from "react-draggable"
// import { Artical } from "../../context/Articles"
import { Link } from "react-router-dom"
import { PageClass,URL } from "../../../classes"
import { Adobe, Brand, Canva, DavidPhillips, Designer, Figma, IconD, InDesign, Monday, MSOffice, Presentations, ProcessOpt, Reactchip, VSCode } from "../../../components/Chips"
import { DPC } from "../../../components/davidphillips/components/DPcontentprovider"
import { ColourTable, DemoCard, Gradient } from "../../../components/davidphillips/components/carddemo"
import { PillWMargin,LogoWMargin,horizontalWMargin,LogoMono, HorizontalWMargin} from "../../../components/davidphillips/components/LogoPageObjects"
import { ArticalContainer } from "../../../components/ArticalHolder"
import backgroundImage from '../../../images/articles/davidphillips/Templateslides/1.png'
import { IMG } from "../../../components/fullscreenable"

const properties = new PageClass('David Phillips Brand Refresh','/articles/davidphillips/brandrefresh',3,'09/14/2024','article',{chips:[DavidPhillips,Brand,Reactchip,IconD,Figma,Designer,Canva,Adobe,MSOffice,Monday,VSCode,InDesign]})

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
            <h2>The Problem</h2>
                <p>When I joined the company the main problem they faced was one of consistency. A combination of a rebrand 8 months prior that had not been properly launched, a number of teams creating customer-facing content without communication, and a slow-to-respond marketing department meant touch points were inconsistent and lacked planning as to how they would work together.</p>
            </div>
            <div>
                <h2>The Solution</h2>
                <p>The solution came in the form of process and documentation changes that allowed more teams to feel involved in the development and evolution of the brand.</p>
            </div>
            <IMG className={'inline'}src={require('../../../images/articles/davidphillips/creascent gardens 2.png')} alt=" a form with a resualt an its asociated tasks"/>

            <div>
            <h3>Process</h3>
            <p>The first of the changes was the introduction of Monday.com for marketing. I oversaw the implementation of the tool. What Monday.com allowed us to do was track what collateral was in circulation, who needed new collateral through a request, and which teams needed to be involved in feedback. I created a system by which each piece of collateral was assigned an ID, called a BA number, standing for brand asset. This code can be found at the start of file names and within the folder structure of projects, as well as on the back cover of brochures. The code included a robust version system that made identifying the use of outdated collateral easier. This code could be looked up on Monday.com to give insights as to its development, who worked on it and what they did, as well as who requested and signed it off. It also integrates into the Project team's development tracker, allowing greater visibility over pitch deck creation.</p>
            <IMG className={'inline'}src={require('../../../images/articles/davidphillips/Mondayimage.png')} alt=" a form with a resualt an its asociated tasks"/>
            </div>

            <div>
                <h3>New Brand Guildines</h3>
                <p>The first step in the update was employing a copywriting agency to review and update the brand’s voice. They introduced a new slogan, messaging and tone of voice based on interviews with key employees. This became the foundation on which decisions about visuals were made. I started off by looking at colours, expanding on the four core colours we preserved from the original rebrand: White, Greige, Aubergine, and Dark. I added four new colours to complete a gradient from White to Dark. This gradient functions as the base for the tokenised colour system.</p>
            </div>
                <DPC>
                    <Gradient/>
                </DPC>
                <p>One of the core deliverables requested from the marketing team was to create segment colours for each of the 7 segments they identified: estate agents, landlords, BTR, student, residential developers, international buyers, and FF&E. To create a system that would work to their requirements and meet accessibility needs, each segment was given a set of 5 light to dark colours. This allowed us to create a system that would work on buttons with different states, on text with different background colours and across light and dark modes.</p>
                <DPC>
                    <ColourTable/>
                </DPC>
                
                <p>From this, we developed a colour ratio group for both segment-specific and non-specific use cases. I designed a layer system consisting of 8 layers split across light and dark modes. These layers change in appearance depending on if the content is specific to a segment, in which case it would use colours from the segment's gradient. There are 7 colour tokens within this system: background, titles, body copy, accent details, shadows, and focal points. To help people using tools without the token system, I created a demo card on the brand guidelines website that displayed how each of the three variables: segment, mode, and layer, would affect the colours of the card. This token system was also built into Figma.</p> 
                <DPC>
                            <DemoCard/>
                        </DPC>
                <p>The next area I worked on was font usage. We didn’t change the two fonts selected during the initial rebrand although we did add limited use case fall back fonts. I focused on creating a unified style and size guide for our most common text styles, for which there are 14. I selected sizes for social media, brochures, and web use cases, using pixels, points and em respectively.</p>
                <IMG className={'inline'} src={require('../../../images/articles/davidphillips/textsizing.png')}/>           
                <span>
                <div style={{maxWidth:'fit-content',gap:'16px'}}>
                <p>After looking at fonts, I moved onto the logo and its use cases. I made a minor change to the mathematical construction of the ‘Pill’ framing device, redefining it as shown below. Previously, it was defined as a rotated, rounded rectangle in which the width matched text height and the length made it aligned as seen. This meant that the bounds of the logo didn’t match the visual edge and the logo was aligned optically and could not be consistently replicated. This was an issue when creating animations using the individual elements of the logo, as it couldn't be reliably reassembled. The change was essential for animations featuring the logo, which can be seen on social media and in the video example at the bottom of this case study.  </p>           
                <p>With the need to have a mark that could be used at small scale for favicons and as a watermark, I pitched and received approval for using the ‘Pill’ element in isolation. I also designed restricted use case marks, including a horizontal version of the logo, and a monochrome and a single colour version, all of which were needed on different touchpoints across the company.</p>
                <p>I then wrote up clear use case rules that pertained to colour, how the logo should be sized in logo lockups and what alterations were not permitted. Finally, I designed the in-partnership badge for use on partner collateral and in marketing material to promote David Philips partnership first approach.</p>
                </div>
                <div style={{maxWidth:'fit-content',alignItems:'center',gap:'60px',display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <DPC>
                    <PillWMargin/>
                    <LogoWMargin/>
                    <HorizontalWMargin/>
                    <LogoMono/>
                </DPC>
                </div> 

                </span>
          
                          
                <p>All of this was combined into a new brand system, which I named ‘Materiality’, that was designed to put the focus on the product and highlight the tactility of the design process with cards, and layers of frosted glass. These layers have depth with subtle borders, shadows, and rounded edges to reinforce this sense of physicality to largely digital applications.</p> 
                <IMG className={'inline'}src={require('../../../images/articles/davidphillips/coversystem.png')} alt=" a form with a resualt an its asociated tasks"/>
            <div>
                <h2>Conclusion</h2>
                <p>The introduction of both process and documentation allowed for accelerated development of assets with reduced feedback cycles. The increased consistency did have drawbacks as some individuals within the marketing department often wanted to change things because they felt they had become stale, despite positive internal and external feedback to the new consistency. When undergoing the same process in the future, I would explain the importance and process behind the result to make sure people understand the reasons behind decisions and feel included in the decision process. This ensures that active championing is promoted over passive acceptance of ideas.</p>
            </div>   
        </ArticalContainer>
            )
        }
        
        properties.element = <Page/> 
export default properties.get