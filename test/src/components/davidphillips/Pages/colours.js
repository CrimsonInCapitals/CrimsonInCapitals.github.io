import { Card, DescreatCard } from "../components/card"
import { DemoCard } from "../components/carddemo"
import { CardButton, Dot, Section, VL } from "../components/Elements"
import { Slogan } from "../components/Slogan"
import { BulletPoint, FP, H1, H2, H3, H4, H5, P1, P2, P3 } from "../components/TextStyles"
import { ModeProvider, useModeContext } from "../context/brandLayers"

export const ColoursPage = ({children,layer='One',docked={left:false, right:false, top:false, bottom: false},content_direction='tb',className='',...props})=> {
document.title = 'Guidlines: Colours'
const {Mode}=useModeContext()
const LayerClipContent=(x,y,z,a)=>{
    navigator.clipboard.writeText(z).then(() => {
        alert('Hex code for '+x+' on '+y+' layers, which is '+a+': '+z+' copied to clipboard');
      }).catch(err => {
        alert('Failed to copy Hex code.')
        console.error('Failed to copy Hex code: ', err);
      });
}
const SegmentClipContent=(x,y,z)=>{
    navigator.clipboard.writeText(z.hex).then(() => {
        alert('The '+x+' hex code for '+y+': '+z.hex+' copied to clipboard');
      }).catch(err => {
        alert('Failed to copy Hex code.')
        console.error('Failed to copy Hex code: ', err);
      });
}
console.log(Mode.Absolute)
return(
        <Card className="main" far Shadow >
            <title>Goudlines: Colour</title>
            <H1>Brand Colours</H1>
            <Section overFlow>

                <Section>
                    <H2>Our core colour spectrum</H2>
                    <P2>Our foundational colours are a saturanted grey specturm from pure white to dark.</P2>
                </Section>
            
                <DescreatCard horizontal touching style={{height:'150px'}} Shadow>
                    {Mode.Absolute.map(({Background,Title,Copy,AbsoluteName,hex})=>{
                        const onClickevent=()=>{
                            navigator.clipboard.writeText(hex.Background).then(() => {
                                alert('Hex code for '+AbsoluteName+': '+hex.Background+' copied to clipboard');
                            }).catch(err => {
                                alert('Failed to copy Hex code.')
                                console.error('Failed to copy Hex code: ', err);
                            });
                        }
                        return(
                        <Card style={{backgroundColor:Background,flex:1}} tightPadding BorderRadius='none' overFlow onClick={onClickevent}>
                            <H5 style={{color:Title}}>{AbsoluteName}</H5>
                            <P3 style={{color:Copy}}>{hex.Background}</P3>
                        </Card>)
                    })}
                </DescreatCard>
                <FP>Click to copy hex code.</FP>
            </Section>
            <Section>
                    <H3>What are Layers & Cards?</H3>
                                    <P2>Part of material based design are our cards. We use cards to create depth, the layer refers to the importance of information being help by the card, and where it sits in the visual hierarch. The most visible difference between layers are the colours used, each layer has a number of properties: Background, Title, Copy, Accent, and Shadow. Below is an example of the first 3 of these properties and how they change across layers, in total there are 8 layers, split between the two modes: Light & Dark. Cards act like their own content frame with padding matching the overall content margin. Where card corners are visible they should be rounded, card should either sit within the margin or extend of the edge of the page.</P2>
                </Section>
            <DemoCard/>
            <Section overFlow>
            <H3>Layer table</H3>
            <Section overFlow>
                <Section horizontal >
                    {/* <H5></H5> */}
                {Mode.Absolute.map(({Background,Title,Copy,AbsoluteName,colourNames})=>{
                    const onClickevent=()=>{
                        navigator.clipboard.writeText(Background).then(() => {
                            alert('Hex code for '+AbsoluteName+': '+Background+' copied to clipboard');
                          }).catch(err => {
                            alert('Failed to copy Hex code.')
                            console.error('Failed to copy Hex code: ', err);
                          });
                    }
                    return(<H5 style={{textAlign:'center'}}>{AbsoluteName}</H5>)

                })}
                </Section>
                <Section horizontal overFlow>
                    {Mode.Absolute.map(({Background,Title,Copy,AbsoluteName,Accent,Shadow,ColourNames,hex})=>{
                        const copyBackground=()=>{LayerClipContent('the background',AbsoluteName,hex.Background,ColourNames.Background)}
                        const copyTitle=()=>{LayerClipContent('titles',AbsoluteName,hex.Title,ColourNames.Title)}
                        const copyCopy=()=>{LayerClipContent('copy',AbsoluteName,hex.Copy,ColourNames.Copy)}
                        const copyAccent=()=>{LayerClipContent('accent objects',AbsoluteName,hex.Accent,ColourNames.Accent)}
                        const copyShadow=()=>{LayerClipContent('shadows',AbsoluteName,hex.Shadow,ColourNames.Shadow)}
                        return(
                        <Card style={{backgroundColor:Background}} tightPadding AICenter Shadow identify>
                            {/* <FP style={{color:Title}}>{AbsoluteName}</FP> */}
                            <Dot onClick={copyBackground} style={{backgroundColor:Background}}/>
                            <H3 onClick={copyTitle} style={{color:Title,textAlign: 'center'}}>Title</H3>
                            <P3 onClick={copyCopy} style={{color:Copy,textAlign: 'center'}}>Copy</P3>
                            <Dot onClick={copyAccent} style={{backgroundColor:Accent}}/>
                            <Dot onClick={copyShadow} style={{backgroundColor:Background,boxShadow:'0px 0px 18px 0px '+ Shadow}} Shadow/>

                        </Card>)
                    })}
                </Section>
            </Section>
            <FP>Click to copy hex code.</FP>
            </Section>


            <Section overFlow>
            <H3>Segment colour table</H3>
            <Section overFlow>
                <Section horizontal>
                {Mode.Segments.map(({Name,Accent,Light,Pure,Dark,Umbra})=>{
                    return(<H5 style={{textAlign:'center'}}>{Name}</H5>)
                })}
                </Section>
                <Section horizontal overFlow>
                {Mode.Segments.map(({Name,Accent,Light,Pure,Dark,Umbra})=>{
                     const copyUmbra=()=>{SegmentClipContent('umbra',Name,Umbra)}
                     const copyDark=()=>{SegmentClipContent('dark',Name,Dark)}
                     const copyPure=()=>{SegmentClipContent('pure',Name,Pure)}
                     const copyLight=()=>{SegmentClipContent('light',Name,Light)}
                     const copyAccent=()=>{SegmentClipContent('accent',Name,Accent)}
                    return(
                        <DescreatCard touching style={{flex:1}} Shadow>
                            <Card onClick={copyUmbra} style={{backgroundColor:Umbra.css,flex:1}} tightPadding BorderRadius='none' overFlow>
                                <H5 style={{color:'var(--B)'}}>Umbra</H5>
                                <P3 style={{color:'var(--B)'}}>{Umbra.hex}</P3>
                            </Card>
                            <Card onClick={copyDark} style={{backgroundColor:Dark.css,flex:1}} tightPadding BorderRadius='none' overFlow>
                                <H5 style={{color:'var(--B)'}}>Dark</H5>
                                <P3 style={{color:'var(--B)'}}>{Dark.hex}</P3>
                            </Card>
                            <Card onClick={copyPure} style={{backgroundColor:Pure.css,flex:1}} tightPadding BorderRadius='none' overFlow>
                                <H5 style={{color:'var(--A)'}}>Pure</H5>
                                <P3 style={{color:'var(--A)'}}>{Pure.hex}</P3>
                            </Card>
                            <Card  onClick={copyLight} style={{backgroundColor:Light.css,flex:1}} tightPadding BorderRadius='none' overFlow>
                                <H5 style={{color:'var(--E)'}}>Light</H5>
                                <P3 style={{color:'var(--E)'}}>{Light.hex}</P3>
                            </Card>
                            <Card onClick={copyAccent} style={{backgroundColor:Accent.css,flex:1}} tightPadding BorderRadius='none' overFlow>
                                <H5 style={{color:'var(--E)'}}>Accent</H5>
                                <P3 style={{color:'var(--E)'}}>{Accent.hex}</P3>
                            </Card>
                        </DescreatCard>
                    )
                })}
                </Section>
            </Section>
            <FP>Click to copy hex code.</FP>

            </Section>
            <Section overFlow>
                <H3>Colour ratios</H3>
                <Section horizontal overFlow>

                    <Section overFlow>
                        <Section horizontal overFlow style={{height:'220px'}}>
                                <DescreatCard vertical Shadow style={{flex:1, height:'220px'}}>
                                    <DescreatCard BorderRadius='none' layer='One' style={{flex:1}}>
                                        <DescreatCard BorderRadius='none' style={{flex:3,backgroundColor:'var(--WB)'}} ></DescreatCard>
                                    </DescreatCard>
                                    <DescreatCard layer='Two' horizontal style={{flex:1}} BorderRadius='none'>
                                        <DescreatCard BorderRadius='none' style={{flex:3,backgroundColor:'var(--WA)'}} ></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:1,backgroundColor:'var(--WT)'}}></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:1,backgroundColor:'var(--WC)'}}></DescreatCard>
                                    </DescreatCard>
                                </DescreatCard>
                                <DescreatCard vertical Shadow style={{flex:1, height:'220px'}}>
                                    <DescreatCard BorderRadius='none' layer='One' style={{flex:1}}>
                                        <DescreatCard BorderRadius='none' style={{flex:3,backgroundColor:'var(--AB)'}} ></DescreatCard>
                                    </DescreatCard>
                                    <DescreatCard layer='Two' horizontal style={{flex:1}} BorderRadius='none'>
                                        <DescreatCard BorderRadius='none' style={{flex:3,backgroundColor:'var(--AA)'}} ></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:1,backgroundColor:'var(--AT)'}}></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:1,backgroundColor:'var(--AC)'}}></DescreatCard>
                                    </DescreatCard>
                                </DescreatCard>
                           
                        </Section>
                        <H4>Group ration</H4>
                        <P3>
                        Use our brand colours in the following proportions. Overall, we aim for plenty of white space to allow content to breathe.
                        In dark mode the Background and the Accent colour switch places as due to the cards you will see more of the Accent colour. 
                        </P3>
                    </Section>
                    <VL/>
                    <Section overFlow>
                        <Section horizontal overFlow style={{height:'220px'}}>
                                <DescreatCard vertical Shadow style={{flex:1, height:'220px'}}>
                                    <DescreatCard BorderRadius='none' layer='One' style={{flex:1}}>
                                        <DescreatCard BorderRadius='none' style={{flex:3,backgroundColor:'var(--WB)'}} ></DescreatCard>
                                    </DescreatCard>
                                    <DescreatCard layer='Two' horizontal style={{flex:1}} BorderRadius='none'>
                                        <DescreatCard BorderRadius='none' style={{flex:3,backgroundColor:'var(--REAAccent)'}} ></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:1,backgroundColor:'var(--WC)'}}></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:0.6,backgroundColor:'var(--WT)'}}></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:0.4,backgroundColor:'var(--REAPure)'}}></DescreatCard>

                                    </DescreatCard>
                                </DescreatCard>
                                <DescreatCard vertical Shadow style={{flex:1, height:'220px'}}>
                                    <DescreatCard BorderRadius='none' layer='One' style={{flex:1}}>
                                        <DescreatCard BorderRadius='none' style={{flex:3,backgroundColor:'var(--AB)'}} ></DescreatCard>
                                    </DescreatCard>
                                    <DescreatCard layer='Two' horizontal style={{flex:1}} BorderRadius='none'>
                                        <DescreatCard BorderRadius='none' style={{flex:3,backgroundColor:'var(--REAUmbra)'}} ></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:1,backgroundColor:'var(--AC)'}}></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:0.6,backgroundColor:'var(--AT)'}}></DescreatCard>
                                        <DescreatCard BorderRadius='none' style={{flex:0.4,backgroundColor:'var(--REAPure)'}}></DescreatCard>

                                    </DescreatCard>
                                </DescreatCard>
                           
                        </Section>
                        <H4>Segment ratio</H4>
                        <P3>
                        Additionally to our group proportions we add Accent Segment colour and the Pure Segment colour. Pure meant to be only used in very small amounts, to elevate design. While the application of segments colours is for segment specific content only, in cases where multiple segments are relevant to an asset but one is more important or dominant, the choice to use a segment colour should be made on a case by case basis.
                        </P3>
                    </Section>
                </Section>
            </Section>
        </Card>
    )
}