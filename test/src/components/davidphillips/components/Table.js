import { useState } from "react"
import { LayerProvider, useLayerContext, useModeContext } from "../context/brandLayers"
import { DescreatCard } from "./card"
import { P1 } from "./TextStyles"
import { layerProps } from "../Objects/brand"

const GetStyle=(f,layer,props)=>{
    const layerProps = props.layer?f(props.layer,props.segment):f(layer)
    const style=props.style?{background:layerProps.Background,borderCollapse: 'collapse',...props.style}:{background:layerProps.Background,borderCollapse: 'collapse'}
    return style
}

export const Table =({children,...props})=>{
    const {Mode}=useModeContext()
    const {layer}=useLayerContext()
    return(
        <DescreatCard {...props}>
            <table {...props}style={{...GetStyle(Mode.GetLayerProps,layer,props)}}>
                {children}
            </table>
        </DescreatCard>

    )
}
export const Cascade=({children,...props})=>{
    const className = props.className && props.className +' Cascade'
    return(
        <DescreatCard {...props} className={className}style={{display:'flex',flexWrap:'wrap',flexDirection: 'row',gap:'var(--Gap)',overFlow:'visable'}}>
            {children}
        </DescreatCard>
    )
}
export const Row =({children,flex=1,width={min:'200px',max:'unset'},...props})=>{
    const {Mode,GetLayerProps}=useModeContext()
    const {layer,layerProps}=useLayerContext()
    const CurrentLayerProps = props.layer?Mode.GetLayerProps(props.layer):layerProps
    const CurrentLayer = props.layer?props.layer:layer

    return(
        <div className='Table_Row'style={{flexBasis:flex,minWidth:width.min,maxWidth:width.max,background:CurrentLayerProps.Background}}>
            <LayerProvider layer={CurrentLayer}>
                {children}
            </LayerProvider>
        </div>
    )
}
export const ExpandableRow=({children,flex=1,open=false,rowContent,...props})=>{

    let [isOpen,setIsOpen]=useState(open)
    return(
        <div onClick={()=>setIsOpen(!isOpen)} style={{padding:0,marginBottom:'var(--Gap)'}}>
            {rowContent}
            {isOpen && children}
        </div>
    )
}


export const Cell =({children,flex=1,join='',align='center',...props})=>{
    const {Mode}=useModeContext()
    const {layer,layerProps}=useLayerContext()
    const CurrentLayerProps = props.layer?Mode.GetLayerProps(props.layer):layerProps
    const CurrentLayer = props.layer?props.layer:layer
    const Background = props.style && props.style.background? props.style.background:layer == CurrentLayer? 'unset': CurrentLayerProps.Background
    const SpecStyles = {
        marginRight: props.space? 'var(--Gap)':0, flex:flex,
        borderTopLeftRadius: join=='l'||join=='lr'?'0':'var(--BorderRadius)',
        borderBottomLeftRadius: join=='l'||join=='lr'?'0':'var(--BorderRadius)',
        borderTopRightRadius: join=='r'||join=='lr'?'0':'var(--BorderRadius)',
        borderBottomRightRadius: join=='r'||join=='lr'?'0':'var(--BorderRadius)',

    }
    return(
        <div {...props} className="Table_Cell" style={{...SpecStyles,background:Background}}>
            <P1 style={{textAlign: align}}>{children}</P1>
        </div>
    )
}