import { Card } from "../components/card"
import { HL, Section, VL } from "../components/Elements"
import { Logo } from "../components/logo"
import { CD, FB, FIPW, GreyScale, HorizontalWMargin, HorizontalWOMargin, IPW, LogoConstructionOne, LogoConstructionThree, LogoConstructionTwo, LogoCutout, LogoMono, LogoNoPill, LogoSlogan, LogoSPill, LogoSub, LogoWMargin, LogoWOMargin, Long, LS, Medium, PillconstructionOne, PillconstructionThree, PillconstructionTwo, PillWMargin, PillWOMargin, SloganConstruction, Square, SS, TPadding } from "../components/LogoPageObjects"
import { H1, P3,H3,H5,P2,H2, H4 } from "../components/TextStyles"
import { LayerProvider } from "../context/brandLayers"

export const LogoPage =()=>{
    document.title = 'Guidlines: Logo'

    return(
        <Card className='main' far>
            <H1>The Logo</H1>
            <Section>
                <H2>Standard logo</H2>
                <Section horizontal jSpread>
                    <LogoWOMargin/>
                    <VL/>
                    <LogoWMargin/>
                </Section>
            </Section>
            <Section >
                <H2>Brandmark</H2 >
                <Section horizontal jSpread>
                    <PillWOMargin/>
                    <VL/>
                    <PillWMargin/>
                </Section>
            </Section>
            <Section>
                <H3>Wordmark (restricted hight use only)</H3>
                <Section horizontal jSpread>
                    <HorizontalWOMargin/>
                    <VL/>
                    <HorizontalWMargin/>
                </Section>
            </Section>
            <Section alight="center" AICenter>
                <H3>Restricted use cases</H3>
                <Section horizontal >
                    <P2 style={{flex:'1'}}>Monochrome logos should only be used in settings with hard restrictions. Settings that are limited to one colour but can achieve shades like grey scale printing should have the text at 100% and the pill at 20%. In situations like heat based printing, where only a single shade is achievable, you should used the version with the outlined pill.</P2>
                    <Section style={{flex:'2'}} horizontal jSpread>
                        <GreyScale/>
                        <LogoMono/>
                    </Section>
                </Section>
   
            </Section>
            <HL/>
            <Section far>
                <H2>Construction</H2>
            <Section  alight="center"  AICenter>
                <H3>Pill construction</H3>
                <Section horizontal far>
                    <P2 style={{flex:'1'}}>The pill is defined as the connection  of two equal sized circles with the diameter of 500 in apposing top-right & bottom-left corners or a box measuring 1080 by 1080 by the means of 45 degree tangents.</P2>
                    <Section style={{flex:'2'}} horizontal far>
                        <PillconstructionOne/>
                        <PillconstructionTwo/>
                        <PillconstructionThree/>
                    </Section>
                </Section>

            </Section>
            <Section  alight="center" AICenter>
            <H3>Standard logo construction</H3>

                <Section horizontal far>
                    <P2 style={{flex:'1'}}>Using the pil construction for a basis, the standard logo is defined as the following, the text, in Brown Pro Bold with character spacing of -41% is defined by half the diameter of the circles that make up up the pill equalling the distance between the top of the 'l' and 'p' in Phillips, the names are alighted to the left and right sides of the pill respectively, the vertical gap is equal to the length the the 'p' descends bellow the 'l'. The text is then cantered vertically within the pill.000</P2>
                    <Section style={{flex:'2'}} horizontal far>
                        <LogoConstructionOne/>
                        <LogoConstructionTwo/>
                        <LogoConstructionThree/>
                    </Section>
                </Section>
                
            </Section>
            <Section  alight="center"  AICenter>
            <H3>Construction of the tagline</H3>

                <Section  horizontal spread>
                    <P2 style={{flex:'1'}}>To help the tagline legibility we have indented the second line where the 'e' of the 'delivered' lines up with the 'g' of the 'Designed'. This also give a scattered layout for our tagline which was our original design choice.</P2>
                    <Section style={{flex:'2'}} horizontal>
                    <SloganConstruction/>

                </Section>
                </Section>
                
            </Section>
            </Section>

            <HL/>
    
            <Section vertical>
                <H3>Logo rules</H3>
                <Section horizontal>
                    <Section>
                        <H5>Colour</H5>
                        <P3>The color of the pill is always accent color and the font color should always be copy color, based on the table you can find in the Colours section of the guidelines</P3>
                    </Section>
                    <VL/>
                    <Section>
                        <H5>spacing</H5>
                        <P3>The hight of the 'D' in 'David' should be used to guide the margin around the logo when using the large format, the smaller format requires a 50% margin on any bounding container.</P3>
                    </Section>
                    <VL/>
                    <Section>
                        <H5>Scale</H5>
                        <P3>The 'Pill Only' version of the logo should be used in any circumstance in which the text would be illegible as a result of size.</P3>
                    </Section>
                    <VL/>
                    <Section>
                        <H5>Variation</H5>
                        <P3>These are the only legitimate variations of the logos shape and structure. Colour on the other hand, varies based on context, which will be covered in the colour section.</P3>
                    </Section>
                </Section>
            </Section>
            <Card layer='Three' Segment='INT' left right>
                <H3>Don'ts of logo use</H3>
                <Section horizontal spread>
                <Section style={{flex:1}}>
                    <P3>No text should ever enter the margins of the logo, this includes the slogan and any attempt to create a sub brand mark.</P3>
                    <P3>The pill should never be altered in any way when used in combination with the text.</P3>
                    <P3>A monochrome exclusionary version of the logo should never be used, as it has legibility issues.</P3>
                    <P3>The pill should never be removed from the composition,</P3>
                </Section>
                <Section style={{flex:2}} horizontal wrap jSpread spread>
                    <LogoSlogan/>
                    <LogoSub/>
                    <LogoSPill/>
                    <LogoCutout/>
                    <LogoNoPill/>
                </Section>
                </Section>
                
            </Card>
            <Section>
                <H3>The pill as a visual element</H3>
                <Section horizontal>
                    <Section >
                        <H5>Aspect Ratio</H5>
                        <P3>As a visual element the pill need only follow the cropping rules, and maintain a 1:1 aspect ration, when you select a correctly constructed version of the pill it will appear in a square box with no rotation, this box must alway have an equal width and hight.</P3>
                    </Section>
                    <VL/>
                    <Section >
                        <H5>Cropping</H5>
                        <P3>When using the pill as a visual element, like in the covers of our brochures it can extend beyond the bounds of its container, but never in a way that makes it unrecognisable as a pill, either on full ark or 1/4 of both must be visible in any given context.</P3>
                    </Section>
                </Section>
            </Section>
            <HL/>
            <Section far>
                <H3>Segment idenifying logos</H3>
                <Section horizontal >
                    <Section hug style={{flex:1}} AICenter>
                        <LayerProvider Segment='REA'>
                            <Logo text margin={20}/>
                            <Logo  />
                        </LayerProvider>
                        <H5 style={{textAlign:'center'}}>Estate Agents</H5>
                    </Section>
                    <VL/>
                    <Section hug style={{flex:1}} AICenter>
                    <LayerProvider Segment='LLS'>
                            <Logo text margin={20}/>
                            <Logo  />
                        </LayerProvider>                        
                        <H5 style={{textAlign:'center'}}>Landlords</H5>
                    </Section>
                    <VL/>
                    <Section hug style={{flex:1}}>
                    <LayerProvider Segment='BTR'>
                            <Logo text margin={20}/>
                            <Logo  />
                        </LayerProvider>                        
                        <H5 style={{textAlign:'center'}}>Build to Rent</H5>
                    </Section>
                    <VL/>
                    <Section hug style={{flex:1}}>
                    <LayerProvider Segment='BFS'>
                            <Logo text margin={20}/>
                            <Logo  />
                        </LayerProvider>                        
                        <H5 style={{textAlign:'center'}}>Student</H5>
                    </Section>
                    <VL/>
                    <Section hug style={{flex:1}}>
                    <LayerProvider Segment='DEV'>
                            <Logo text margin={20}/>
                            <Logo  />
                        </LayerProvider>                        
                        <H5 style={{textAlign:'center'}}>Developers</H5>
                    </Section>
                    <VL/>
                    <Section hug style={{flex:1}}>
                    <LayerProvider Segment='INT'>
                            <Logo text margin={20}/>
                            <Logo  />
                        </LayerProvider>                        
                        <H5 style={{textAlign:'center'}}>International</H5>
                    </Section>
                    <VL/>
                    <Section hug style={{flex:1}}>
                    <LayerProvider Segment='FFE'>
                            <Logo text margin={20}/>
                            <Logo  />
                        </LayerProvider>                        
                        <H5 style={{textAlign:'center'}}>FF&E</H5>
                    </Section>
                </Section>
            </Section>
            <HL/>
            <Section  far>
                <H3>In partnership badge</H3>

                <Section horizontal far >
                    <P3 style={{flex:1}}>The in-partnership badge is for use by any of our partners or on any collateral that is pre-agreed to be in another company's branding and should be placed in a corner. The badge comprises two parts, the first is a box with a left and right margin equal to twice the height of the 'D' in 'David Phillips', the length is dependent on the text within, based on the list of approved partner messages coming soon. The second part is simple the logo, height matching the left element, with a connecting device. 
                    </P3>
                    <Section style={{flex:2}} horizontal wrap far>
                    <Section horizontal>
                    <FB/>
                    <IPW/>
                    <FIPW/>
                    </Section>

                    <Section horizontal>
                        <TPadding/>
                        <CD/>
                        <IPW/>
                    </Section>
    
                </Section>
                </Section>
                
            </Section>
            <Section >
                <H3>Logo lockup guidance</H3>
                <Section >
                    <H4>Scaling</H4>
                    <Section  horizontal far>
                        <P3 style={{flex:1}}>Depending on weather a logo is ruffly square, longer, or quite long it should be sizes based on the hight of the full logo, the combined hight of 'David Phillips' or the hight of the the gap between the top of the 'P' and bottom of the 'p' in 'Phillips', respectively.
                        </P3>
                        <Section style={{flex:2}} horizontal jSpread wrap far>
                        <Square/>
                        <Medium/>
                        <Long/>
                    </Section>
                    </Section>
                    
                </Section>
                <Section >
                <H4>Spacing and bar </H4>

                    <Section  horizontal>
                        <P3 style={{flex:1}}>at small scale the gap should be equal to margin the the bar half-way between, at large scale the gap should be doubled. An 'x' should only be used in large scale partnership announcements. Spacing between two logos should be equal to whichever company specifies the most.
                        </P3>
                        <Section style={{flex:2}} horizontal jSpread AICenter>
                        <SS/>
                        <LS/>
                    </Section>
                    </Section>

                </Section>
            </Section>
        </Card>
    )
}