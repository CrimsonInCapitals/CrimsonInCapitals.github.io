import { Link } from "react-router-dom"
import { H1, H2, P } from "../../components/StyledComponents"

const Page = ()=>{
    return(
        <section className="content">
            <div>
                <H1>About the client</H1>
                <P>The dog room is a small dog grooming business based in Haslemere, Surrey ran by Jo Lee-Hill. </P></div>
            <div>
                <H1>The problem</H1>
                <P>The business owner had just completed her training to become a dog groomer and had found a small space in a local pet shop to start her own business. She had already come up with a name, but needed assistance with online presence and branding. </P>
            </div>
            <div>
                <H1>The solution</H1>
                <P>I created a list of recommended design and marketing deliverables based on her needs. For design she would need a basic brand kit and guide she could use for creating social media posts, and printing fliers and signs. To help with outreach and marketing I recommended that she would need a business account on Facebook and Instagram, and a Google My Business account, so her business could be found online and through Google Maps.</P>
            </div>
            <div>
                <H2>The brand</H2>
                <P>As a sole trader, the brand really had to align with Jo’s voice, as a fun, friendly and laidback individual. To align with this, I selected an energetic yellow, paired with a soft cream and dark grey to comprise the primary palette. Then I selected a green, red and blue that matched the yellow for the secondary palette. To match this high energy, I selected Cooper Black and Comfortaa for heading font and body. </P>
                <img src={require('../../sources/articals/thedogroom/fonts.png')}/>
                <img src={require('../../sources/articals/thedogroom/colours.png')}alt="the dog room colour palette, consisting of yellow, 3 accent shades, red, green, and blue as secondary colours"/>

                <P>The client wanted a wordmark, and as such, I started with a base of Cooper Black for the logo before making alterations to make it feel laidback and fun. The owner also wanted to highlight the word Groom within the name. I used capitalisation and positioning to do this, while using colour to separate the words, ensuring it was still legible as ‘The Dog Room’. This positioning allowed for the addition of a subtle dog silhouette made from the lowercase r and arm of the G. This was then isolated for use as a brand mark, something that would be essential for social media.</P>
                <img src={require('../../sources/articals/thedogroom/logos.png')}alt="the dog room wrtien in a fun font in a bright yellow"/>

                <P>Based on what was created above, I compiled a brand guide with usage examples.</P>
            </div>
            <div>
                <H2>Collateral</H2>
                <P>Following approval on the brand, collateral was created. This included 3 social media posts, to introduce the business, explain where it was, and announce its opening. I also produced a sign to go above the store, and business cards that were set up on Vista Print so the owner could order more whenever she needed.</P>
                <img src={require('../../sources/articals/thedogroom/premadeposts.png')} alt="4 examples of premade social media posts"/>

            </div>
            <div>
                <H2>Digital Marketing </H2>
                <P>Being a new business, it was important to get it set up on a number of platforms. Based on the nature of the business, Instagram and Facebook are where I recommended she post. I also set up enquiries so people could request bookings through Instagram and Facebook. These accounts were setup and linked, so they could be managed through the Meta Business Suite of tools, which would give Jo useful insights and recommendations. Despite infrequent posts the account quickly reached 100 followers and is now sitting above 200 with engagement at 10-20%, indicating great in-person engagement with her community. In addition to this, I set up a Google My Business account, so she could collect positive reviews and make it easier for the business to be discovered through maps and search on Google. These efforts resulted in being fully booked for its opening fortnight, as of a week before opening.</P>
                <img src={require('../../sources/articals/thedogroom/instagram page.png')} alt="a screenshot of the dog room instagram account"/>

            </div>
            <div>
                <H1>Conclusion</H1>
                <P>The client was very happy with the results, painting the physical location in the selected brand colours, and really embracing the brand. On reflection, working with small businesses like this, it’s important to ensure they have the tools to utilise the brand. Platforms like Canva are a great option for businesses like this to create announcement posts which can be easily shared. People will have preferences on platform, but a brand is only as strong as its touch points, so empowering people to create branded content is essential and definitely something I've taken away from working with The Dog Room.</P>
            </div>


        </section>
    )
}
const Bento = ()=>{
    return(
        <Link to='../articals/thedogroom' className="QuickBento Dogroombento"></Link>
    )
}

export const properties=[[4,4],'The Dog Room',0,'Working with the owner of this small bisiness to define the brand','thedogroom',<Bento/>,<Page/>]