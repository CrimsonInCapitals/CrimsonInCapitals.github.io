import { useLayerContext, useModeContext } from "../context/brandLayers"
import { getClasses } from "../Objects/ClassManager"
import { Section } from "./Elements"
import { P3, H5 } from "./TextStyles"
 
export const LinkCard=({icon,id,title,url,layer='One',style={},...props})=>{
     const {Mode,mode}=useModeContext()
    const {layerProps}=useLayerContext()
    props.ParentLayer=layerProps.RelativeName
    props.Mode=Mode
    // props.horizontal = true
    props.tightPadding = true
    props.MyLayer=layer
    // props.AICenter= true
    const getBackgroundColor= (x)=>{
        if(props.style && props.style.backgroundColor)return props.style.backgroundColor
        let layerProps = {}
        try{
            if(props.Segment)console.log(props.Segment)
            if(Mode.SegmentLayers[props.Segment][layer] === undefined)throw new Error('invalid layer')
            // console.log(Mode.SegmentLayers[props.Segment])
            layerProps = Mode.SegmentLayers[props.Segment][layer]
        }catch{
            try{
                layerProps = Mode.Layers[layer]
            } catch(error){
                console.error("layerProps could not be fetched from Mode:",error.message)
                layerProps = Mode.Layers.One
        } }
        return layerProps[x]
    }
    props.MyLayer=getBackgroundColor('RelativeName')
    props.Background = !props.Background? true:props.Background
    return(
        <a id={id}className={getClasses('DPCard DPCardButton',props)} hug style={{backgroundColor: getBackgroundColor('Background'),...style}} href={url} target="_blank">
            <Section horizontal AICenter hug>
            {icon}
            <H5 style={{textWrap:'auto'}} >{title}</H5>
            </Section>
            {props.description&&<Section ><P3 >{props.description}</P3></Section>}

        </a>
    )
}