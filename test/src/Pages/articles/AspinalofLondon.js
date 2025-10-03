import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass, URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Brand, Designer } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/aspinaloflondon/outcomesgrid.png'
import { IMG } from "../../components/fullscreenable"


const properties = new PageClass('Aspinal of London','/articles/aspinaloflondon',3,'12/30/2019','article',{chips:[<Brand/>,<Designer/>]})

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

            <h2>About the client</h2>
            <p>Aspinal of London is a luxury leather goods business that greatly values sustainability, quality, and heritage designs. They have physical locations worldwide, but primarily in London. They leverage influencer marketing to enhance brand visibility, with their bags frequently spotted on notable royals and celebrities. Their customer base consists largely of aspirational shoppers, seeking to display wealth and those who want to ‘own a part of English culture’.</p>
            </div>
            <div>
            <h2>The Problem</h2>
            <p>I was approached by the Founder and Managing Director to explore potential brand expansion. They wanted to be more recognisable by visual motifs other than their logo. This was in the hopes of achieving increased brand awareness in the market, something they had been struggling with.</p>
            <p>In addition to this objective, they wanted to launch a sister brand called House of Aspinal, still heavily focused on the idea of English heritage. This brand would be utilised for a series of store and pop-ups, which would act both as a vehicle to drive sales to the primary business but also as a mode to work with qualified partners, in a similar vein to a small boutique department store.</p>
            </div>

            <h2>The Solution</h2>
                        <div>

            <h3>Marks and symbols</h3>
            <p>As developing the sister brand would first require obtaining a full understanding of the brand's visual identity, iconography was the first avenue we explored.</p> 
            <p>We developed a series of concepts aligned with the brand's core pillars of sustainability, English heritage and quality. Some of these symbols were already in use but needed expanding upon. They were:</p>
            </div>

            <div>
                <h4>A Shield</h4>
            <p>a symbol with strong connotations to heraldry</p>
            <p>The shield was a logical route to explore, as one was already featured in the current logo mark. I chose to look into how the shape might be simplified and used as a recognisable silhouette.</p>
            <p>We looked at refining the shape into a distinctly Aspinal shape.
            Here is what this looks like in practice.</p></div>
            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/shielf.png')} alt="a patern of gold shields on a dark blue background"/>

            <div>
                <h4>A feather</h4>
            <p>for elegance and beauty</p>
            <p>I explored how the feather might be used in isolation, as well as how it might be integrated into other forms</p></div>
            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/feather.png')} alt="a patern of gold feathers on a dark blue background"/>

            <div>
                <IMG className='inline'/>
                <h4>A Bee</h4> 
            <p>a symbol of sustainability</p>
            <p>Aspinal of London has a set of beehives on the property of its corporate office and sells the honey produced in small batches; this is part of their effort to promote sustainable practices and help the wildflowers that grow around the local ponds. We discussed how this could be used as a symbol.</p></div> 
            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/bee.png')} alt="a patern of gold bees on a dark blue background"/>
            <div>
                <h4>The letter ‘A’:</h4> 
            <p>Monograms have a rich history, especially with their connotations to royalty</p>
            <p>I explored how the letter ‘A’ could be used in different contexts. The Aspinal name being common to both brands means this mark could be used by both, or by an Umbrell brand. I also explored integrating the ‘A’ into patterns, as seen with other luxury brands.</p></div>
            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/a.png')} alt="a patern of the letter 'A' on a dark blue background"/>
                        <IMG className='inline' src={require('../../images/articles/aspinaloflondon/adesigns.png')}alt="The letter A with a bee and the cross stroke and the letter A in which the right leg is replaced with a feather"/>


            <div>
            <div>
            <h4>A Roundel</h4>
            <p>A circular heraldic device, also found on the logo of the London Underground
            The historic significance of the roundel within heraldry, as well as British culture fits in perfectly with the other selected symbols. I experimented with ways in which the logo type could be integrated into a spherical design, such as on buttons or jewellery.</p>
            </div>
            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/roundal.png')}alt="a patern of gold cercular heraldic devices 'roundals' on a dark blue background"/>

            <p>As you can see I tried a number of different styles, incorporating other elements of the brand.</p></div>

            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/roundaldesigns.png')}alt="a round design with a crenelated outer edge with the words 'Aspinal of London' in the middle, followed by asimple desgin with the same text, and one with the letter A in the middle"/>
            <div>
                <h4>A Lion Door Knocker</h4>
            <p>historic symbol of the English upper class</p>
            <p>The lion door knocker was a symbol that was already introduced to the brand, being featured on a series of phone cases in 2018 and a range of clutches in 2019. Designing an icon, similar to the already existing feather symbol, was a key deliverable. </p>
            </div>
            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/lion.png')}alt="a patern of gold lion head door knockers on a dark blue background"/>

            <p>It was essential that the symbol reflected a dignified animal, while avoiding any negative connotations of displaying the head of an animal. This was achieved by creating a graceful and contemplative visage with open, piercing eyes, which differs from the scruffy mane of initial designs.</p>

            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/liondesign.png')}alt="aa sequence showing the development of the lion door knocker design"/>
            <div>
            <h3>Colour</h3>
            <p>Aspinal has always had three colours in use on the brand mark, which are red, gold and blue. The Managing Director wanted the logo of House of Aspinal to follow the same format as Aspinal of London, with a different symbol replacing the feather for the new mark. This meant we would need to use colour to create visual distinction between the logos.</p>
            </div>
            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/colours.png')}alt="navy, red, gold, midnight, and white colours in a swatch"/>
            <p>The first angle explored was the use of black and gold as a pair on this new mark. I then introduced a deep navy, midnight colour, that would complement the gold, and could be used in combination with white to really create distinction, while maintaining a visual connection to the original brand.</p>
            <div>
            <h3>Typographic synergy</h3>
            <p>Aspinal of London uses bespoke lettering in its logo; these letters had to be expanded upon for ‘House of Aspinal’ to match. To allow flexibility in the future, I designed a full set of upper and lowercase characters.</p>
            </div>
            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/Typography.png')}alt="the lettters A to Z writen in capitals and lowwercase acompanied by the words 'Aspinal', 'House', and 'London'"/>

            <div>
            <p>Aspinal's typographic style can be identified by its gentle arcs on its stems, the twisted taper on its apexes, as seen on the A and W, the curve on its bilateral serifs, and a classical contrast between thick and thin strokes. The objective with the design of this font was for it to feel hand-crafted. The softness of this font’s curves was designed to hark back to the embossing of leather, with its supple nature, as opposed to traditional fonts, evolving from the rigidity of stone carving.</p>
            </div>
            <div>
            <h2>Conclusion</h2>
            <p>This project was largely exploratory, with many of the deliverables being suggestions and recommendations. The implementation of some proposed symbols can be seen in product launches following 2019</p></div>
            <IMG className='inline' src={require('../../images/articles/aspinaloflondon/outcomesgrid.png')}alt="a set of images dipicting how the above designs made their way into realworld applications"/>
                


    </ArticalContainer>
    )
}
const Bento = ()=>{
    return(
        <Link to='../articles/aspinaloflondon' className="QuickBento AspinalBento"></Link>
    )
}
properties.element = <Page/> 
export default properties.get

// export const properties=[[4,6],'Aspinal of London',0,'Exploring brand symbols with on of the UKs leading luxury brands','aspinaloflondon',<Bento/>,<page/>]

