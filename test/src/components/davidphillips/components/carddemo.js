import { useState } from "react"
import { Card, DescreatCard } from "./card"
import { Dot, HL, Section } from "./Elements"
import { FP, H1, H2, H3, H4, H5, P1, P2, P3 } from "./TextStyles"
import { LayerProvider, ModeProvider, useModeContext } from "../context/brandLayers"
import { Button, Choice,Lable, MultipleChoice, PrimaryButton } from "./Buttons"
import { ClipableLogo } from "./clipboardslogo"
import { MaxamisableCard } from "./MaxamisableCard"
import { CookieProvider } from "../context/Cookies"
import { renderToString } from "react-dom/server"
import { Icons } from "./icons/index"
import { Slogan } from "./Slogan"
import { CircleFrame, CorenrRadius, FrameDimentions, IconGroup, LineWidth, RectangleFrame, SmallIcon, SquareFrame, StrokeScale }from "./IconsPage"



export const DemoCard = ()=>{
    const [CardProps,setCardProps]=useState({})
    const toggledockleft=()=>setCardProps({...CardProps,left:!CardProps.left})
    const toggledockright=()=>setCardProps({...CardProps,right:CardProps.right?false:true})
    const toggledocktop=()=>setCardProps({...CardProps,top:CardProps.top?false:true})
    const toggledockbottom=()=>setCardProps({...CardProps,bottom:CardProps.bottom?false:true})
    const layerChooser=(id,value)=>setCardProps({...CardProps,layer:value})
    const {Mode}=useModeContext()
    const modechoose=(id,value)=>{
        setCardProps({...CardProps,mode:value})}
    const Segchoose=(id,value)=>setCardProps({...CardProps,Segment:value})
    return(
        <MaxamisableCard horizontal far Shadow layer="Two" height="fit-content">
            <Section >
            
                <H4>Demonstration Card</H4>
                <Section hug>
                <H5>Segment</H5>
                <MultipleChoice OnSelect={Segchoose}>
                    <Choice value={undefined} Default>None</Choice>
                    <Choice value={'REA'}>Residential</Choice>
                    <Choice value={'BTR'}>BTR</Choice>
                    <Choice value={'LLS'}>Landlords</Choice>
                    <Choice value={'DEV'}>Developers</Choice>
                    <Choice value={'INT'}>International</Choice>
                    <Choice value={'FFE'}>Contractors</Choice>
                    <Choice value={'BFS'}>Student</Choice>
                    <Choice value={'DEF'}>Defualt</Choice>


                </MultipleChoice>
            </Section>
            <Section hug>
                <H5>Layer</H5>
                <MultipleChoice OnSelect={layerChooser}>
                    <Choice value='One' Default>One</Choice>
                    <Choice value='Two'>Two</Choice>
                    <Choice value='Three'>Three</Choice>
                    <Choice value='Four'>Four</Choice>

                </MultipleChoice>
            </Section>
            <Section hug>
                <H5>Mode</H5>
                <MultipleChoice OnSelect={modechoose}>
                    <Choice value={undefined} Default>default</Choice>
                    <Choice value={0}>light</Choice>
                    <Choice value={1}>dark</Choice>
                </MultipleChoice>
            </Section>

            </Section>
            <ModeProvider demo mode={CardProps.mode===undefined?Mode.P:CardProps.mode}  report>

            <Card  layer="Two" InnerShadow style={{width:'fill'}} Segment={CardProps.Segment===undefined?'none':CardProps.Segment} report>
                    <Card {...CardProps} Shadow report>
                        <ClipableLogo height='200px' text/>                   
                        {/* <Logo height='200px' text/> */}
                        <H1>Card</H1>
                        <P1>Example of standard text written on any card componed</P1>
                        <HL/>
                        <FP>Example of fine print</FP>
                    </Card>
                   
            </Card>
            </ModeProvider>

        </MaxamisableCard>

    )
}

export const Gradient = ()=>{
    const {Mode} = useModeContext()
    return(
<DescreatCard horizontal touching style={{height:'150px',width:'100%'}} Shadow>
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
)
}

export const ColourTable=()=>{
        const {Mode} = useModeContext()
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
    return(
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
    )
}


export const IconsDisplay = ({children,layer='One',docked={left:false, right:false, top:false, bottom: false},content_direction='tb',className='',...props})=> {
    document.title = 'Guidlines: Icons'
    const {Mode}=useModeContext()
    const [Copy,setCopy]=useState('svg')
    const addToClipBoard =(icon)=>{
        switch(Copy){
            case('svg'):
            navigator.clipboard.writeText(renderToString(icon.element)).then(() => {
                alert(icon.name+' Icon added to clipboard (for Figma only)');
            }).catch(err => {
                alert('Failed to copy '+icon.name+' Icon.');
                console.error('Failed to copy Icon: ', err);
            });
            case('code'):
            navigator.clipboard.writeText(icon.code).then(() => {
                console.log(icon.name+' Icon code added to clipboard');
            }).catch(err => {
                alert('Failed to copy '+icon.name+' code.');
                console.error('Failed to copy Icon code: ', err);
            });
        }

    }
    const displayDefault = {}
    Icons.groupList.map((group)=>{displayDefault[group.code] = false})
    const [display,setDisplay] = useState(displayDefault)
    const CopyModeSetter=(id,value)=>{setCopy(value)}
    return(
        <Card className="main" far Shadow >
            <Section jSpread >
            <H1>David Phillips Icon Library</H1>
            <Section horizontal AICenter>
            <P1>We currently have {Icons.array.length} icons across {Icons.groupList.length} catagories.</P1>
            <Section hug overFlow horizontal AICenter>
            </Section>
            
            </Section>
   
            </Section>
            <Section >
                {Icons.groupList.map((group)=>{
                    const expandGroup=()=>{
                        let update = display
                        update[group.code] = !update[group.code]
                        setDisplay(update)
                        console.log(display)
                    }
                    return(
                        <IconGroup name={group.name} array={Icons[group.code].array} click={addToClipBoard}/>
                    )

                })
                    
                }
            </Section>
            <Section overFlow>
                <H2>Icon Construction</H2>
                <Section horizontal far overFlow>
                    <Section style={{flex:1}}>
                    <P2 >Icons are constructed on a 12 column grid with 10 px gutters and 25px margin, for a total frame size of 160px stokes are 4.2px (1pt at 300 DPI)and have a recommender corner radius of 5px. When scaling the icons the stroke should scale to, it is recommended to expand stokes before exporting into a vector format to avoid misuse. </P2>
                    <P2>To ensure icons fit together it is recommender that square icons don’t exceed the middle 90px area, with a 80px*110px area recommended for rectangular icons and the full area for entirely circular icons.</P2>

                    </Section>
                    <Section overFlow style={{flex:2}} far>
                        <Section horizontal overFlow>
                            <Section overFlow>
                                <DescreatCard Shadow><FrameDimentions/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Total Width: 160px</FP><FP style={{textAlign:'center'}}>Grid Width: 110px</FP><FP style={{textAlign:'center'}}>12 columns and rows</FP>
                            </Section>
                            
                            <Section overFlow>
                            <DescreatCard Shadow><LineWidth/></DescreatCard>
                            <FP style={{textAlign:'center'}}>Stroke width: 4.2px</FP>
                            </Section>
                            <Section overFlow>
                            <DescreatCard Shadow><StrokeScale/></DescreatCard>
                            <FP style={{textAlign:'center'}}>Strokes must scale</FP>
                            </Section>
                            <Section overFlow>
                            <DescreatCard Shadow><CorenrRadius/></DescreatCard>
                            <FP style={{textAlign:'center'}}>Minimum corner radius: 5px</FP>
                            </Section>
                        </Section>
                        <Section horizontal overFlow>
                            <Section overFlow>
                                <DescreatCard Shadow><SquareFrame/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Max size for : 90 * 90</FP>
                            </Section>
                            <Section overFlow>
                                <DescreatCard Shadow><RectangleFrame/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Max size for : 80 * 110</FP>
                            </Section>
                            <Section overFlow>
                                <DescreatCard Shadow><CircleFrame/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Max size for : 110 * 110</FP>
                            </Section>
                            <Section overFlow>
                                <DescreatCard Shadow><SmallIcon/></DescreatCard>
                                <FP style={{textAlign:'center'}}>Max size for : 50 * 50 </FP>
                            </Section>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </Card>
    )
}