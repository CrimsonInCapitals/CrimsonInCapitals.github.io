import { Link } from "react-router-dom"
import { H1, H2, H3, P } from "../components/StyledComponents"

export const Resume = ()=>{
    return(
        <section className="content">
            <H1>Harrison Adam Cole</H1>
            <span>
            <a href="tel:07922407596" useRef='noreffer'><P>07922407596</P></a>    
            <a href="mailto:harrison.cole@crimsonincapitals.com" useRef='noreffer'><P>harrison.cole@crimsonincapitals.com</P></a>    
            <a href="https://www.instagram.com/crimson.svg/" useRef='noreffer'><P>Instagram</P></a>    
            <a href="https://www.linkedin.com/in/harrison-cole-crimson-in-capitals/" useRef='noreffer'><P>LinkedIn</P></a>
            </span>
            <H2>Professional Background</H2>
            <div>
                <H3>Jul 2023 – Present: David Phillips — Junior/Midweight Graphic Designer </H3>
                <P>David Phillips is a large-scale furnishing company servicing the operational real estate market. My role as a Graphic Designer is to collaborate with the Lead Graphic Designer to develop the brand by creating and overseeing the production of collateral. This includes designing brochures, social media graphics and promotional materials to ensure brand consistency and support marketing campaigns. My most significant impact was during the rollout of Figma, Monday.com, and a refreshed, interactive brand guidelines platform. I introduced Figma as a replacement for both PowerPoint and InDesign, which had been used for pitch creation previously. It enabled me to develop and manage pre-made templates and content, ensuring consistency across multiple teams. During its deployment, I managed the training of 14 people across 3 teams, all new to Figma. Using Monday.com, I implemented a collateral tagging system that assigns a six-digit code, alongside a comprehensive version control system integrated into the request/feedback/workload process. This process reduces amendment rounds by 75% by collating stakeholder feedback for cross-analysis. This system also ensures that outdated materials are retired once replacements are issued.</P>
                <Link to={'../articals/davidphillips'}><P>Read CaseStudy</P></Link>
            </div>
            <div>
                <H3>Dec 2022 – Apr 2023: Cudoni (Insolvent Apr 2023) — Senior Product Photographer</H3>
                <P>Cudoni was an online clothing resale marketplace, selling second-hand luxury clothing and accessories. As a Senior Product Photographer, my role included taking a high volume of item photographs, as well as advising others on ways to shoot challenging items that would require deviation from the standardised shot list. This role prioritised efficient working to maximise sellable units per day. I was responsible for making key changes to increase the speed and quality of output. I did this by creating more efficient workspaces, allowing the process to be performed quicker.</P> 
            </div> 
            <H3>Aug 2022 – Dec 2022: Cudoni (Insolvent Apr 2023) — Junior Product Photographer</H3> 
            <div>
                <H3>Apr 2022 – Aug 2022: Fast Generations — Junior Social Media Creative (Apprentice)</H3> 
                <P>Fast Generations is a digital marketing agency specialising in Pay Per Click (PPC) advertising. My main role involved managing and creating content for social media accounts. I managed 12 accounts across industries such as civil engineering, garden landscape design, and luxury car hire. My responsibilities included Facebook ad management, Google My Business management, web design, and photography.</P>
            </div> 
            <div>
                <H3>Sep 2021 – Apr 2022: Ask Italian (Haslemere) — Manager on Duty</H3> 
                <P>I carried out a variety of tasks as a manager at Ask Italian. These included schedule management and rota writing, as well as content creation for the Haslemere social media presence. As a manager, I had a team of up to 4 people, who reported to me during shifts.</P>
            </div> 
            <div>
                <H3>Mar 2022– May 2022: The Dog Room — Freelance Graphic Designer</H3> 
                <P>The dog room is a small dog grooming business. I worked with the business owner to create a visual brand that she and her clients identified with. I created a scalable logo, a brand colour palette, and selected fonts that would work well with her business's voice. Additionally, I set up social media accounts and made the business discoverable on Google Maps. I designed assets such as business cards, physical signage, and social media content and templates.</P>
            </div> 
            <H3>Sep 2018 – Apr 2022: Ask Italian (Haslemere) — Three other roles</H3>  
            <div>
                <H3>Sep 2019 – Dec 2019: Aspinal of London — Freelance Graphic Designer </H3>
                <P>The managing director of Aspinal of London and I mainly worked on the logo and iconography for the brand, developing and refining brand symbols. I also worked on typology, expanding the custom type used for the logo into a complete set of both uppercase and lowercase letters.    </P>
            </div> 


            <H2>Education</H2>
            <P>Certifications: Meta Front-End Development Certification – Coursera: 98.57%, Level 3 Cambridge Technical Certificate in Graphic Design - Alton College 2017– 2019</P>
            <P>A level (Alton College 2017 – 2019): Computer Science: D, Photography: A</P>
            
            <P>G.C.S.E. (Bohunt School 2012 – 2017): English Literature, English Language, Mathematics, Science Core, Science Additional, Internet Technology, Computer Science, Art</P>
            <H2>Skills</H2>
            <P>Programming Languages: HTML, JavaScript, CSS, PHP, SQL, MySQL, phpMyAdmin, React, JSX, Node</P> 
            <P>Programming Experience: E-commerce, portfolio site, brand guidelines site, dynamic infographics</P>
            <P>Marketing Platforms: Facebook Business, Google Ads/My Business, LinkedIn, TikTok, Monday.com</P>
            <P>Design Software: Affinity Designer, Affinity Photo, Affinity Publisher, Figma, Canva, Capture One, Adobe Photoshop, Adobe InDesign, Adobe Illustrator, Adobe After Effects, Microsoft Office</P> 
            <P>Design Experience: persona creation, brochure design, leaflet design, print file preparation & ordering, user journey mapping, GUI design, wireframing, social media post template creation, digital illustration, lettering, icon design, creating mock-ups, photo editing & retouching</P> 
 
 
 


        </section>
    )
}