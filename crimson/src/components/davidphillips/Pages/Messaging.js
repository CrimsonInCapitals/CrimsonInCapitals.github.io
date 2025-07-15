import { Card } from "../components/card"
import { Section, VL } from "../components/Elements"
import { Slogan } from "../components/Slogan"
import { BulletPoint, H1, H2, H3, H5, P2, P3 } from "../components/TextStyles"

export const MessagingPage = ({children,layer='One',docked={left:false, right:false, top:false, bottom: false},content_direction='tb',className='',...props})=> {
document.title = 'Guidlines: Messaging'
return(
        <Card className="main" far Shadow>
            <H1>Brand proposition</H1>
            <Section style={{alignItems:'center'}}><Slogan/></Section>
            <Section horizontal alight="center" spread AICenter>
                <Section style={{flex:'1'}}>
                    <H2>Position statment</H2>
                    <P2>Operational real estate is demanding. But it doesn't need to be. We will help you solve your furnishing challenges and prime your properties to stand out and stand up to high standards, now and in the future.</P2>
                </Section>
                <H3 style={{flex:'2'}}>Leading customers to make smarter furnishing decisions.</H3>
            </Section>
            <Section vertical>
                <H2>Key messages</H2>
                <Section horizontal>
                    <Section>
                        <H3>Meticulous</H3>
                        <P3>We are meticulous, so you can be too. We design and deliver furnishings for the real world – a world that hinges on strong reputations. Using intelligent tech and our experts’ eye for detail, we create the right environment – on budget, on time.</P3>
                    </Section>
                    <VL/>
                    <Section>
                        <H3>Agile</H3>
                        <P3>We are agile, so you can be too. We adapt our approach to every client, every customer and every site. It is how we take the friction out of every furnishing and interior challenge. And it means we can flex to work across borders.  </P3>
                    </Section>
                    <VL/>
                    <Section>
                        <H3>Disruptive</H3>
                        <P3>We are disruptive, so you can be too. Inspiring in the property world means doing more than the expected. We push the boundaries and help you do the same.  </P3>
                    </Section>
                    <VL/>
                    <Section >
                        <H3>Future-ready</H3>
                        <P3>We are future-ready, so you can be too. By embracing technology and finding better ways of providing furnishings, we are laying the groundwork to stand up to future demand and scrutiny.</P3>
                    </Section>
                </Section>
            </Section>
            <Section>
                <H2>Proof points</H2>
                <Section horizontal>
                    <Section>
                        <P3>Our products and interiors are designed for practicality as well as style.</P3>
                        <P3>We have a robust sampling and testing stage to ensure a quality finish and durability for every product.</P3>
                        <P3>We take care of the whole process (from key collection to removing and recycling waste), delivered by furniture fitters trained in nationally recognised qualifications at NVQ level 3.</P3>
                        <P3>The scale and strength of our operations and supply chain enables us to stay true to tight deadlines.</P3>
                        <P3>Through regular audits of our suppliers and our own work, we maintain momentum on operational excellence.</P3>
                        <P3>We are trusted by some of the world's biggest developers and agents.</P3>
                    </Section>
                    <VL/>
                    <Section >
                        <P3>Our clients are diverse — we have solved an array of challenges and will work collaboratively with you to solve yours.</P3>
                        <P3>You will receive a personal service, delivered by a dedicated team who get to know you and your business.</P3>
                        <P3>We develop new technologies to address different client needs, e.g. vamos for large schemes and a bespoke portal on Shopify for individual property needs.</P3>
                        <P3>We use software to consolidate detailed information on products for quick yet informed decisions.</P3>
                        <P3>Our fast turnarounds are backed by a robust supply chain.</P3>
                        <P3>Our teams are trained in the specifics of each site for safe, efficient delivery no matter the constraints.</P3>
                        <P3>Building on our strong global supply chain, we can adapt products for different preferences globally.</P3>
                    </Section>
                    <VL/>
                    <Section>
                        <P3>We invest time immersing ourselves in the design world and competitors' schemes to find fresh ways to inspire and increase value.</P3>
                        <P3>The scale and strength of our supply network means we can create any item and any vision to meet any budget.</P3>
                        <P3>We invest in new technologies to streamline your processes and increase your visibility.</P3>
                        <P3>Virtual reality tools help you visualise design to make bold choices and impactful changes.</P3>
                        <P3>By gathering data on all aspects of our business and setting KPIs, we are constantly pushing the possibilities in the service we deliver for you.</P3>
                    </Section>
                    <VL/>
                    <Section>
                    <P3></P3>
                        <P3>We are a B Corp, giving you confidence that we are aligned to wider ESG targets.</P3>
                        <P3>Sustainability is baked into our business model, from durability of product to the Release scheme. We feel the same pressures as you and are helping you respond to them.</P3>
                        <P3>Our carbon calculator enables you to calculate Scope 3 emissions and find opportunities for reductions.</P3>
                        <P3>Our ISO certifications give you confidence that our operations are primed to meet or exceed regulations as and when they change.</P3>
                        <P3>vamos provides long-view forecasting, helping you make the right decisions for the future of your business and real estate environment.</P3>
                        <P3>Building tech to make doing business with us easier.</P3>                    
                    </Section>
                </Section>
            </Section>
            <Section vertical>
                <H3>Tone of voice</H3>
                <Section horizontal>
                    <Section>
                        <H5>Punctuation</H5>
                        <P3>On our brochure cover and in our tagline we always use punctuation to establish a clear and confident message.</P3>
                    </Section>
                    <VL/>
                    <Section>
                        <H5>Confident</H5>
                        <P3>We are confident in the quality we deliver, but never arrogant or flippant.</P3><P3>Our writing embodies our meticulous and considered approach. We use concise language, focus on the tangible benefits and never fall back on cliché.</P3>
                    </Section>
                    <VL/>
                    <Section>
                        <H5>Personal</H5>
                        <P3>We take the time to get to know clients and answer their needs.</P3><P3>Through clear, plain language and personal pronouns, we show respect for our audience and start building the relationship.</P3>
                    </Section>
                    <VL/>
                    <Section>
                        <H5>Driven</H5>
                        <P3>Our passion comes through in our writing. It has pace. It feels dynamic.</P3><P3>By including short sentences (starting some with a conjunction) and active language, we reflect the energy of David Phillips.</P3>
                    </Section>
                </Section>
            </Section>
        </Card>
    )
}