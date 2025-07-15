import { Card, DescreatCard } from "../components/card"
import { Section, VL } from "../components/Elements"
import { FP, H1, H2, H3, H4, H5, P1, P2, P3, Quote, Source, ST, Statment, T } from "../components/TextStyles"
import { ANB, ANR, ANT, Authentic, BPB, BPR, BPT, NPB, NPM, NPR, PerfectFit, StandOut, VSB, VSR } from "../components/TypePageObjects"
import { LayerProvider } from "../context/brandLayers"

export const FontPage=()=>{
    document.title = 'Guidlines: Font'
    return(
        <Card className='main' far Shadow>
            <H1>Fonts we use</H1>
            <Section horizontal far>
                <Section>
                    <H2>Value Serif</H2>
                    <P2><b>Value Serif</b> has been selected for it’s sense of calmness and it’s agility. This typeface is just as great used large for headlines as it is for writing our strapline; It’s how we live. When using Value Serif to create headings on marketing materials, always typeset it with optical kerning, set the tracking to 0, and set in sentence case. Do not set in all caps or all lowercase. When using Value Serif to typeset headings on the web, or screen materials set the letter spacing to -1px for smaller headlines and -2px for larger headlines.</P2>
                    <P2>Value Serif is a serif typeface designed by Edd Harrington, Anthony Sheret and Benjamin Critton. It was released through Colophon Foundry in 2013. The design features a distinctive notch in the letters f and j as well as a single-story ‘a’ which is unusual in serif designs. Value Serif is available in 3 weights — Regular, Medium and Bold. Available to license in both Standard (‘STD’) and Professional (‘PRO’) versions, the latter containing a range of additional OpenType features.</P2>
                </Section>
                <VL/>
                <Section>
                    <H2>Brown Pro</H2>
                    <P2><b>Brown Pro</b> has been selected for it’s reliability. This typeface is just extremely legibile at small sizes thanks it’s large uniform counters. Typeset all text and paragraph text in Brown Pro. When using Brown Pro to set bodycopy on embedded or printed collateral for David Phillips, always typeset it with optical kerning, set the tracking to 5, and set in sentence case (as determined by the content). You may wish to set some titles using Brown Pro Bold, when doing this set in all caps with the tracking set proportionally to the point size of the text; usually this is around +30%. So if a title is set at 120pt the tracking should be set to 156pt.</P2>
                    <P2>LL Brown, designed by Lineto has been prominently featured in various design publications and was awarded the Swiss Design Award in 2010. 
                    </P2><P2>It is available in six weights: Thin, Light, Regular, Medium , Bold and Black, all of them in Reclining and Italic.</P2>
                </Section>
            </Section>
            <Section horizontal far>
                <Section far>
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Regular</FP>
                        <VSR/>
                    </Section>
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Medium</FP>
                        <VSR/>
                    </Section>
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Bold</FP>
                        <VSB/>                   
                    </Section>
                </Section>
                <VL/>
                <Section far>
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Thin</FP>
                        <BPT/>                   
                    </Section>
                    
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Regular</FP>
                        <BPR/>
                    </Section>
                    
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Bold</FP>
                        <BPB/>                   
                    </Section>            
                </Section>
            </Section>
            <Section>
                <H2>Hierarchy</H2>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Title</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>48pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>64px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>4em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Value Serif Regular</FP>
                    </Section>
                    <T style={{flex:1}}>Key message</T>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Sub Title</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>14pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>18px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>1.2em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Brown Pro Regular</FP>
                    </Section>
                    <ST style={{flex:1}}>Working with professionals to furnish our property.</ST>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Heading One</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>40pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>55px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>3.3em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Value Serif Regular</FP>
                    </Section>
                    <H1 style={{flex:1}}>We are meticulous</H1>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Heading Two</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>24pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>32px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>2em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Value Serif Medium</FP>
                    </Section>
                    <H2 style={{flex:1}}>Proof points</H2>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Heading Three</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>20pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>28px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>1.6em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Value Serif Medium</FP>
                    </Section>
                    <H3 style={{flex:1}}>A short impactful statment</H3>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Heading Four</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>16pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>22px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>1.3em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Value Serif Medium</FP>
                    </Section>
                    <H4 style={{flex:1}}>A short impactful statment</H4>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Heading Five</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>12pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>16px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>1em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Brown Pro Bold</FP>
                    </Section>
                    <H5 style={{flex:1}}>Something Extra</H5>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Quote</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>14pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>20px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>1.2em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Value Serif Regular</FP>
                    </Section>
                    <Quote style={{flex:1}}>Working with professionals to furnish our property.</Quote>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Paragraph One</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>13.5pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>18px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>112em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Brown Pro Regular</FP>
                    </Section>
                    <P1 style={{flex:1}}>We design and deliver furnishings for the real world – a world that hinges on strong reputations.</P1>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Paragrpah Two</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>12pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>16px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>11em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Brown Pro Regular</FP>
                    </Section>
                    <P2 style={{flex:1}}>We design and deliver furnishings for the real world – a world that hinges on strong reputations.</P2>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Paragraph Three</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>10pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>14px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>0.8em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Brown Pro Regular</FP>
                    </Section>
                    <P3 style={{flex:1}}>We design and deliver furnishings for the real world – a world that hinges on strong reputations.</P3>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Source</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>10pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>14px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>0.8em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Brown Pro Bold</FP>
                    </Section>
                    <Source style={{flex:1}}>Working with professionals to furnish our property.</Source>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Fine Print</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>8pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>10px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>0.6em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Brown Pro Regular</FP>
                    </Section>
                    <FP style={{flex:1}}>Working with professionals to furnish our property.</FP>
                </Section>
                <Section horizontal>
                    <Section horizontal style={{flex:1}}  AICenter jRight>
                        <FP style={{width:'45%', textAlign:'right'}}>Statment</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>100pt</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>140px</FP>
                        <FP style={{opacity:'30%',width:'10%', textAlign:'right'}}>8.4em</FP>
                        <FP style={{width:'25%', textAlign:'right'}}>Velue Serif Regular</FP>
                    </Section>
                    <Statment style={{flex:1}}>Wow</Statment>
                </Section>
            </Section>
            <Section overFlow>
                <H2>Font details</H2>
                <Section horizontal jSpread overFlow>
                    <DescreatCard Shadow>
                        <LayerProvider layer='Three'>
                            <PerfectFit/>

                        </LayerProvider>
                    </DescreatCard>
                    <DescreatCard Shadow>
                        <LayerProvider layer='Three'>
                            <StandOut/>
                        </LayerProvider>
                    </DescreatCard>
                    <DescreatCard  Shadow>
                        <LayerProvider layer='Three'>
                            <Authentic/>
                        </LayerProvider>
                    </DescreatCard>
                </Section>
            </Section>
            <H1>Web fall back font</H1>
            <Section horizontal far>
                <Section>
                    <H2>FF Meta Pro</H2>
                    <FP>Final Fall Back:</FP>
                    <H5>Times New Roman</H5>

                    <P2><b>FF Meta Pro</b> has been selected for tiltes and headings on our Shopify site and it is meant to be exclusive used there. Any other printed or digital use should still use our main brand fonts.</P2>
                </Section>
                <VL/>
                <Section>
                    <H2>Avenir Next</H2>
                    <FP>Final Fall Back:</FP>
                    <H5>Arial</H5>
                    <P2><b>Avenir Next</b> has been selected for body copy on our Shopify site and it is meant to be exclusive used there. Any other printed or digital use should still use our main brand fonts.</P2>
                  
                </Section>
            </Section>
            <Section horizontal far>
                <Section far>
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Regular</FP>
                        <NPR/>
                    </Section>
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Medium</FP>
                        <NPM/>
                    </Section>
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Bold</FP>
                        <NPB/>                   
                    </Section>
                </Section>
                <VL/>
                <Section far>
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Thin</FP>
                        <ANT/>                   
                    </Section>
                    
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Regular</FP>
                        <ANR/>
                    </Section>
                    
                    <Section AICenter>
                        <FP style={{textAlign:'center'}}>Bold</FP>
                        <ANB/>                   
                    </Section>            
                </Section>
            </Section>
        </Card>
    )
}