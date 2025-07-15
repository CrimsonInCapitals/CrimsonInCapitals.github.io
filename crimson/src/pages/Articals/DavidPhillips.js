import Draggable from "react-draggable"
import { Card, Section } from "../../components/analytics/Card"
import { H1, H2, H3, P } from "../../components/StyledComponents"
import { ColourTable, DemoCard, Gradient, IconsDisplay } from "../../components/davidphillips/components/carddemo"
import { LayerProvider, ModeProvider } from "../../components/davidphillips/context/brandLayers"
import { CookieProvider } from "../../components/davidphillips/context/Cookies"
import { DescreatCard } from "../../components/davidphillips/components/card"
import { DPC } from "../../components/davidphillips/components/DPcontentprovider"
import { BrowserRouter, Link } from "react-router-dom"
import { HorizontalWMargin, LogoMono, LogoWMargin, PillWMargin } from "../../components/davidphillips/components/LogoPageObjects"
import { CorenrRadius } from "../../components/davidphillips/components/IconsPage"
import { BentoCard } from "../../components/BentoCard"
import { Title } from "chart.js"
import { Artical } from "../../context/Articals"

const BentoContent = ()=>{
    return(
        <div className="DPbento window">
            <Link to='articals/davidphillips' style={{position:'absolute',width:'100%',height:'100%'}}/>
            <Draggable defaultPosition={{x:380,y:80}}><div className="DPslide nine"/></Draggable>
            <Draggable defaultPosition={{x:340,y:120}}><div className="DPslide eight"/></Draggable>
            <Draggable defaultPosition={{x:300,y:160}}><div className="DPslide seven"/></Draggable>
            <Draggable defaultPosition={{x:260,y:200}}><div className="DPslide six"/></Draggable>
            <Draggable defaultPosition={{x:220,y:240}}><div className="DPslide five"/></Draggable>
            <Draggable defaultPosition={{x:180,y:280}}><div className="DPslide four"/></Draggable>
            <Draggable defaultPosition={{x:140,y:320}}><div className="DPslide three" /></Draggable>
            <Draggable defaultPosition={{x:100,y:360}}><div className="DPslide two" /></Draggable>
            <Draggable defaultPosition={{x:60,y:400}}><div className="DPslide one" /></Draggable>

        </div>
    )
}








    export const Page2=()=>{
        return(
    
    <>
        <section className="content">
                        <Link to={'../articals/davidPhillips/'}><P>← Return</P></Link>

            <H1>Brand Refresh</H1>
            <div>
            <H2>The Problem</H2>
                <P>When I joined the company the main problem they faced was one of consistency. A combination of a rebrand 8 months prior that had not been properly launched, a number of teams creating customer-facing content without communication, and a slow-to-respond marketing department meant touch points were inconsistent and lacked planning as to how they would work together.</P>
            </div>
            <div>
                <H2>The Solution</H2>
                <P>The solution came in the form of process and documentation changes that allowed more teams to feel involved in the development and evolution of the brand.</P>
            </div>

            <div>
            <H3>Process</H3>
            <P>The first of the changes was the introduction of Monday.com for marketing. I oversaw the implementation of the tool. What Monday.com allowed us to do was track what collateral was in circulation, who needed new collateral through a request, and which teams needed to be involved in feedback. I created a system by which each piece of collateral was assigned an ID, called a BA number, standing for brand asset. This code can be found at the start of file names and within the folder structure of projects, as well as on the back cover of brochures. The code included a robust version system that made identifying the use of outdated collateral easier. This code could be looked up on Monday.com to give insights as to its development, who worked on it and what they did, as well as who requested and signed it off. It also integrates into the Project team's development tracker, allowing greater visibility over pitch deck creation.</P>
            <img src={require('../../sources/articals/davidphillips/Mondayimage.png')}/>
            </div>

            <div>
                <H3>New Brand Guildines</H3>
                <P>The first step in the update was employing a copywriting agency to review and update the brand’s voice. They introduced a new slogan, messaging and tone of voice based on interviews with key employees. This became the foundation on which decisions about visuals were made. I started off by looking at colours, expanding on the four core colours we preserved from the original rebrand: White, Greige, Aubergine, and Dark. I added four new colours to complete a gradient from White to Dark. This gradient functions as the base for the tokenised colour system.</P>
            </div>
                <DPC>
                    <Gradient/>
                </DPC>
                <P>One of the core deliverables requested from the marketing team was to create segment colours for each of the 7 segments they identified: estate agents, landlords, BTR, student, residential developers, international buyers, and FF&E. To create a system that would work to their requirements and meet accessibility needs, each segment was given a set of 5 light to dark colours. This allowed us to create a system that would work on buttons with different states, on text with different background colours and across light and dark modes.</P>
                <DPC>
                    <ColourTable/>
                </DPC>
                
                <P>From this, we developed a colour ratio group for both segment-specific and non-specific use cases. I designed a layer system consisting of 8 layers split across light and dark modes. These layers change in appearance depending on if the content is specific to a segment, in which case it would use colours from the segment's gradient. There are 7 colour tokens within this system: background, titles, body copy, accent details, shadows, and focal points. To help people using tools without the token system, I created a demo card on the brand guidelines website that displayed how each of the three variables: segment, mode, and layer, would affect the colours of the card. This token system was also built into Figma.</P> 
                <DPC>
                            <DemoCard/>
                        </DPC>
                <P>The next area I worked on was font usage. We didn’t change the two fonts selected during the initial rebrand although we did add limited use case fall back fonts. I focused on creating a unified style and size guide for our most common text styles, for which there are 14. I selected sizes for social media, brochures, and web use cases, using pixels, points and em respectively.</P>
                {/* <img src={require('../../sources/articals/davidphillips/Templateslides/1.png')}/>            */}
                <span>
                <div style={{maxWidth:'fit-content',gap:'16px'}}>
                <P>After looking at fonts, I moved onto the logo and its use cases. I made a minor change to the mathematical construction of the ‘Pill’ framing device, redefining it as shown below. Previously, it was defined as a rotated, rounded rectangle in which the width matched text height and the length made it aligned as seen. This meant that the bounds of the logo didn’t match the visual edge and the logo was aligned optically and could not be consistently replicated. This was an issue when creating animations using the individual elements of the logo, as it couldn't be reliably reassembled. The change was essential for animations featuring the logo, which can be seen on social media and in the video example at the bottom of this case study.  </P>           
                <P>With the need to have a mark that could be used at small scale for favicons and as a watermark, I pitched and received approval for using the ‘Pill’ element in isolation. I also designed restricted use case marks, including a horizontal version of the logo, and a monochrome and a single colour version, all of which were needed on different touchpoints across the company.</P>
                <P>I then wrote up clear use case rules that pertained to colour, how the logo should be sized in logo lockups and what alterations were not permitted. Finally, I designed the in-partnership badge for use on partner collateral and in marketing material to promote David Philips partnership first approach.</P>
                </div>
                <div style={{maxWidth:'fit-content',alignItems:'center',gap:'60px'}}>
                <DPC>
                    <PillWMargin/>
                </DPC>    
                <DPC>
                    <LogoWMargin/>
                </DPC>
                <DPC>
                    <HorizontalWMargin/>
                </DPC> 
                                <DPC>
                    <LogoMono/>
                </DPC>
                </div> 

                </span>
          
                          
                <P>All of this was combined into a new brand system, which I named ‘Materiality’, that was designed to put the focus on the product and highlight the tactility of the design process with cards, and layers of frosted glass. These layers have depth with subtle borders, shadows, and rounded edges to reinforce this sense of physicality to largely digital applications.</P> 
                {/* <iframe src="https://harrison-dp.github.io/Guidlines"></iframe> */}
         
            <div>
                <H2>Conclusion</H2>
                <P>The introduction of both process and documentation allowed for accelerated development of assets with reduced feedback cycles. The increased consistency did have drawbacks as some individuals within the marketing department often wanted to change things because they felt they had become stale, despite positive internal and external feedback to the new consistency. When undergoing the same process in the future, I would explain the importance and process behind the result to make sure people understand the reasons behind decisions and feel included in the decision process. This should ensure that active championing is promoted instead of passive acceptance of ideas.</P>
            </div>
   
                <H1>Projects</H1>
        </section>
        <section className="grid">
            <BentoCard {...new Artical(...properties3)}/>
            <BentoCard {...new Artical(...properties4)}/>
            <BentoCard {...new Artical(...properties5)}/>


        </section>        </>
)}
const Page3 = ()=>{return(
        
        <>
        <section className="content">
                        <Link to={'../articals/davidPhillips/'}><P>← Return</P></Link>

            <H1>Icon Library</H1>
            <div>
                <H2>The Problem</H2>
                <P>Preexisting icon packs lacked icons for David Phillips' specific use cases, often requiring mixing sources for content, which meant stroke width or style was not consistent. As the brand uses icons as illustrative elements across brochures, presentations and the website, consistency is important.</P>
            </div>
            <div>
                <H2>The Solution</H2>
                <P>I designed the icons on a grid with guides for wide, tall, and square icons, ensuring they maintain visual balance. Stroke is consistent and matches the stroke width of divider lines laid out in the brand framework with corner radii to match the Materiality system.</P>
                <P>I started out by designing a base of eighty icons. This included the replacements for the thirty-two icons already in use as well as icons specific to real estate, sustainability, and furniture. The next group was focused on installation and tools. This was followed by sets for room type, transportation, interior design, and values & objectives. I also designed a set of smaller icons for interface buttons. At this point in time, we have over three hundred icons, covering everything from fire rating to a cup of tea.</P>
                </div>
                <DPC>
                    <IconsDisplay/>
                </DPC>
                <div>
                <P>The icons are distributed in four ways: through a font, a SharePoint folder containing PNG and SVG copies of each icon, a Figma library, and from the guidelines themselves where they can be copied from.</P>
            </div>
            <div>
                <H2>Conclusion</H2>
                <P>This project was highly successful in adoption and was received very positively by every department it affected, from sales to logistics. It allowed the company to express itself visually instead of just with words. This is the sort of project that does not have a fixed end date. As time goes on, the icons a business might need increases. I have created the tools and documentation to create an icon for whatever new use case might arrive, in the form of templates and rules, and a catalogue of examples.</P>
            </div>
                <H1>Other Projects</H1>
        </section>
        <section className="grid">
            <BentoCard {...new Artical(...properties2)}/>
            <BentoCard {...new Artical(...properties4)}/>
            <BentoCard {...new Artical(...properties5)}/>


        </section>                </>
)}
const Page4 = ()=>{return(
        
        <>
        <section className="content">
                        <Link to={'../articals/davidPhillips/'}><P>← Return</P></Link>

            <H1>Presentations & Figma</H1>
            <div>
                <H2>The Problem</H2>
                <P>Large-scale projects are worked on by several teams, which include project product co-ordinators, project managers, interior designers, salespeople, and departmental heads. All these people have various levels of experience with presentation creation tools. The interior designers used Adobe InDesign to have access to the design features they needed, as such presentations had to be made using it. The drawback with this was that all content had to be added by an interior designer or the graphic design team, which presented a significant bottleneck. It also meant that content for slides about the business were being written up in PowerPoint or Word by a relevant expert and then added later by a designer. The third issue was that when prices were confirmed, it would require a project manager to email a designer and a designer to open, add to and export the presentation, before sending it back to be shared with the client, which added significant bloat to project development. It became clear that it was an issue in August 2024, when we hired two additional interior designers who would be handing projects back and forth with each other and me, causing overwriting issues of the files saved on SharePoint.</P>
            </div>
            <div className='slideplaygroundholder'style={{overflow:'hidden'}}>

  
            <div className="slideplayground">
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

            </div>
            </div>
            <div>
                <H2>The Solution</H2>
                <P>The solution came in the form of a tool we had already started using for social media content and designing the new brand guidelines, Figma. The Figma team had just announced the release of a new presentation tool called slides.  I pitched it to the forementioned teams, and they agreed to do a trial run. I began designing the template based on the InDesign one in use and in line with the brand framework library I had already created. We ran the test on a project for an Australian client, which required liaising with our sales partners out there. As such, a tool that allowed for multiple people to jump on at any time and work on different parts was essential. The outcome of the trial was the first tender ever finished early. Over the next couple of months, we made the switch for project pitches completely.</P>
            </div>
            <img src={require('../../sources/articals/davidphillips/figmaimage.png')}/>

            <div>
                <H3>Framework</H3>
                <P>I built out a robust set of text styles, page layouts, and components rolled into a Figma library that could be accessed through the built-in search panel. This library included layout guides that employed the new card system, with pre-styled effects like drop shadow and glass that matched what was defined by the guidelines. It also included specific things, such as product cards for the product gallery page. </P>
            </div>
            <img src={require('../../sources/articals/davidphillips/figmaframework.png')}/>

            <div>
                <H3>Templates</H3>
                <P>I worked in collaboration with the projects and design teams to create templates that followed the narrative of their specific pitches. These included pitches for amenity spaces, show homes and large-scale furnishing projects. I also created variants for specific segments, such as the student segment with its yellow colour scheme. These templates allowed the interior design team to focus on interior design, for the project team to come in and enter prices and critical paths, and for the product team to enter product information.</P>
            </div>
            <img src={require('../../sources/articals/davidphillips/figmatemplates.png')}/>

            <div>
                <H3>Pre-made Content</H3>
                <P>Across different projects, there will always be a certain level of duplication of content that is relevant to multiple clients. Using the same library that I mentioned before, I worked with marketing and specialists across the company to create slides that detailed specific features and selling points, covering things from recycling to delivery process. Before this, we had to look through old presentations or contact multiple people to provide information as quickly as possible, which used up precious time with deadlines looming.</P>
            </div>
            <div className='paralaxpremades'style={{position:'relative'}}>
                {/* <img src={require('../../sources/articals/davidphillips/premadeslides.png')}/> */}

            </div>
                 <div>
                <H2>Conclusion</H2>
                <P>Allowing everyone to edit one file at once is a more collaborative way to work and avoids countless handoffs or the creation of multiple files, which would later need to be merged. This radically improved efficiency, allowing teams to deliver better, more polished presentations and tenders. Overall, it is estimated that this switch saved 30% on development time and reduced emails by 70% for the tender stage.</P>
            </div>
                <H1>Other Projects</H1>
        </section>
        <section className="grid">
            <BentoCard {...new Artical(...properties2)}/>
            <BentoCard {...new Artical(...properties3)}/>
            <BentoCard {...new Artical(...properties5)}/>


        </section>                </>
)}
const Page5 = ()=>{return(
        
        <>
        <section className="content">
            <Link to={'../articals/davidPhillips/'}><P>← Return</P></Link>
            <H1>Smaller Projects</H1>
                <H2>Website Relaunch Video</H2>
                <P>When we relaunched our website, I was tasked with storyboarding and creating the video to announce it on social media. Taking the list of pages and features that the marketing executive wanted to highlight, I created a detailed story board. This story board was sent for approval and after minor changes based on specific additional inclusion requests, I started creating the video using Adobe After Effects. Because each page needed to be animated, I started by creating images of the full length of the page, creating and animating buttons to match the site. I also recreated the before and after section, a key feature to highlight. Each page on the site was its own composition, so I could pick where to stop and at what times banner videos would play.</P>
                <img src={require('../../sources/articals/davidphillips/webimages.png')}/>

                <P>The video opens with the logo morphing into a search bar. This uses vector path keyframing in a similar fashion to letter morphing. Another notable feature is the masking used when the text disappears into the pill at the start and end. </P>
                <div style={{display:'flex',alignItems:'center'}} className="instagram holder">
 <article className='instagrampost'>
                    <video style={{width:'51.43%',aspectRatio:'16/9'}} controls>
                    <source src={require('../../sources/articals/davidphillips/BA-250110-01_06.mp4')}/>
                    </video>
                    <img style={{width:'48.57%',margin:'0'}}src={require('../../sources/articals/davidphillips/instagramrightside.png')}/>

                </article>
                </div>
               
                <P>If I were to approach a similar project again, I would reduce the amount of content being shown, to allow for more time on certain sections while making the video shorter. This style of content doesn’t perform very well on reels and similar formats because it lacks insightful or interesting information specific to a target niche.</P>
                <div>

                <H2>Platfrom Launch Leaflet</H2>
                <P>I worked with the Web Executive and the Marketing Manager to put together a leaflet highlighting the key features of our new platform to potential users, to be handed out to them by the sales team. This required displaying a lot of features and associated screenshots, meaning that careful consideration needed to be taken as to the layout. I ended up using an unconventional tri-fold design that allowed the user to open it in stages to gain more information.</P>
            </div>
            <img src={require('../../sources/articals/davidphillips/linkleafletmockupset.png')}/>

                <P>While the end result is something I am proud of, if I were to undertake this project on my own terms, I would focus on the benefits for the end user over features. In tandem to this, I would include photos of people using the tool, instead of exclusively screenshots of the interface.</P>
            <div>
                <H2>Fitted Furniture Brochure</H2>
                <P>The FF&E brochure features diagrams, maps, data and case studies and therefore, it is a good demonstration of a wide range of visualisation techniques.</P>
            </div>
                <img src={require('../../sources/articals/davidphillips/ffecover.png')}/>

                <P>The first page to highlight is the lead times and RIBA integration spread of pages. It gives a generalised overview of how David Phillips can integrate into a pre-existing works plan and install fourteen weeks after contract award. This is a key USP for David Phillips as it requires leveraging unique partnerships with a number of manufacturers to which they occupy about 80% of the production calendar.</P>
                <img src={require('../../sources/articals/davidphillips/riba.png')}/>

                <P>Breaking down complex emissions calculations in a digestible way was essential for the carbon calculator spread. This section highlights another David Phillips USP — the ability to calculate the impact of specific product selection choices in terms of carbon impact. This page displays three variations on the same item of furniture and shows how changes in construction material and location affect impact.</P>
                <img src={require('../../sources/articals/davidphillips/carbon calculator.png')}/>

                <P>The wardrobes and extra services spread highlights features using icons. By using icons with limited text, I was able to make the focus of this spread the full-page image of the wardrobe, highlighting construction quality and framing the content.</P>
                <img src={require('../../sources/articals/davidphillips/waredrobesspread.png')}/>

                <H1>Other Projects</H1>
        </section>
        <section className="grid">
            <BentoCard {...new Artical(...properties2)}/>
            <BentoCard {...new Artical(...properties3)}/>
            <BentoCard {...new Artical(...properties4)}/>

        </section>        </>
    )
}
const IconsBentoBackground =()=>{
    return(<Link className='QuickBento IconsBentoBackground'to={'../articals/davidphillips/iconlibrary'}/>)
}
const FigmaBentoBackground =()=>{
    return(<Link className='QuickBento FigmaBentoBackground'to={'../articals/davidphillips/iconlibrary'}/>)
}
const OtherBentoBackground =()=>{
    return(<Link className='QuickBento OtherBentoBackground'to={'../articals/davidphillips/iconlibrary'}/>)
}
const BrandBentoBackground =()=>{
    return(<Link className='QuickBento BrandBentoBackground'to={'../articals/davidphillips/iconlibrary'}/>)
}


export const properties2=[[4,2],'David Phillips: Brand Refresh',0,'An effort to consolidate the brand','davidphillips/brandrefresh',<BrandBentoBackground/>,<Page2/>,2]
export const properties3=[[4,2],'David Phillips: Icon Library',0,'Creating consistancy with over 300 icons','davidphillips/iconlibrary',<IconsBentoBackground/>,<Page3/>,2]
export const properties4=[[4,2],'David Phillips: Figma Presentations',0,'Transorming the way David Phillips pitches for projects','davidphillips/figmapresentations',<FigmaBentoBackground/>,<Page4/>,2]
export const properties5=[[4,2],'David Phillips: Smaller Projects',0,'Notable examples of work from my time at David Phillips','davidphillips/smallerprojects',<OtherBentoBackground/>,<Page5/>,2]
const Page1 = ()=>{
    return(
        <>
        

        <section className="content">
            <div>
                <H1>About David Phillips</H1>
                <P>A leading player in the BTR furnishing industry, David Phillips is a large-scale furnishing business with offices and logistics centres based in London and Manchester. Founded in 1998, the company first entered the BTR space with the redevelopment of the Olympic Park in 2013 into residential accommodation. David Phillips specialises in three main sectors: property development, operational real estate, and real estate. To serve these sectors, they have the following services: incentives, rental, projects, and packages.</P>
            </div>
            
                <div>
                    <H2>Incentives</H2>
                    <P>Incentives primarily serve the development sector. By forming partnerships with developers, they offer furniture as incentives to potential buyers in the form of either a prepaid gift card or a preselected package designed to fit within the development. This model has also been used in the operational real estate market, in build to rent units, where occupation is slow.</P>
                </div>
                <div>
                    <H2>Rental</H2>
                    <P>Rental as a model is used across all sectors, with the primary service of home staging being used to boost interest in properties. For rental properties and those seeking to relocate, they also offer rental for use services for those who need a property furnished on a temporary basis. </P>
                </div>
          
                      <div>
                    <H2>Packages</H2>
                    <P>Packages are any small-scale furnishing, usually without the involvement of an interior designer. They can consist of single items for the purpose of replenishment and can be carried out either by contacting a salesperson and having a quote created or through the online store.</P>
                </div>
                  <div>
                    <H2>Large-Scale Projects</H2>
                    <P>Comprising 80% of the business's activity, projects are large-scale by nature. With two groups managing projects, the furniture group and the fitted group, they work in isolation or together to turn a hollow building into a living space. The furniture group is comprised of interior designers, product experts, and project managers. Units are first space-planned with schemes that are created to suit potential residents. Then the product is selected and a schedule is created. From there, orders are placed, and installation is managed. The fitted team works similarly, but instead of furniture, they are dealing with kitchens and wardrobes.</P>
                </div>
                <H1>My Projects</H1>
        </section>
        <section className="grid">
            <BentoCard {...new Artical(...properties2)}/>
            <BentoCard {...new Artical(...properties3)}/>
            <BentoCard {...new Artical(...properties4)}/>
            <BentoCard {...new Artical(...properties5)}/>


        </section>
    </>)}

export const properties=[[4,6],'David Phillips',0,'During the cource of my time at David Phillips I carried out a number of major projects','davidphillips',<BentoContent/>,<Page1/>]
