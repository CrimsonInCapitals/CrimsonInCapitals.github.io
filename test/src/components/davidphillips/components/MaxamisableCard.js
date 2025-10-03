import { useState } from "react"
import { Card, DescreatCard } from "./card"
import { LayerProvider } from "../context/brandLayers"
import { IconButton } from "./Buttons"
import SvgSizeMinamise from "./icons/SizeMinamise"
import SvgSizeMaxamise from "./icons/SizeMaxamise"

export const MaxamisableCard =({children,height='90vh',...props})=>{
    const [FullScreen,setFullScreen]=useState(false)
    const [hover,setHover]=useState(false)
    const fullScreenStyle = {position:'fixed',margin:'var(--Gap)',left:'18px',right:'18px',top:'18px',bottom:'18px',zIndex:'10'}
    const regularStyle = {height: height, position: "relative" ,zIndex:'0'}
    return(
        <DescreatCard className='main' style={{width:'-webkit-fill-available'}} overFlow>
                    <Card style={FullScreen?fullScreenStyle: regularStyle} Shadow AICentre id={true} className={FullScreen?'':'main'} overFlow {...props}>
                        {children}
                        <DescreatCard style={{position:'absolute',left:'0',top:'0',transitionDuration: '0.5s'}}Shadow={hover?true:false} >
                            <LayerProvider >
                                <IconButton onClick={()=>{setFullScreen(!FullScreen);setHover(false)}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                                    {FullScreen?<SvgSizeMinamise/>:<SvgSizeMaxamise/>}
                                </IconButton>
                            </LayerProvider>
                        </DescreatCard>
                    </Card>
        </DescreatCard>

        
    )
}