import React, { Children, cloneElement } from 'react';
import { brand, mode, properties } from '../Objects/brand';
import '../styling/card.css'
import { getClasses, getStyle } from '../Objects/ClassManager';
import { Icon } from './Icons';
import { FP, H5 } from './TextStyles';
import { Card } from './card';
import { useLayerContext, useModeContext } from '../context/brandLayers';

export const Section = ({children,layer='One',...props})=>{
    const layerProps = useLayerContext()
    const {Mode,setMode} = useModeContext()
    const all = {ParentLayer:layer,Mode:Mode,...props}
    if(props.report)console.log(props)
    return(
        <section {...props}className={getClasses('DPSection',all)}>
            {children}
        </section>
    )
}
export const Test=({ref})=>{
    return(<div ref={ref}></div>)
}
export const HL = ({layer='One',layerProp})=>{
    const {layerProps}=useLayerContext()
    return (<div className='DPhline' style={{backgroundColor:layerProps.Accent}}/>)
}
export const VL = ({layer='One',layerProp})=>{
    const {layerProps}=useLayerContext()
    return (<div className='vline' style={{backgroundColor:layerProps.Accent}}/>)
}

export const CardButton = ({icon,title,subtitle,action,...props})=>{
    const RunAction = ()=>{
        window.open(action.url,'_blank')
    }
    return(
        <button type='button'className='reset'onClick={RunAction}>
            <Card layer='One' tight hug horizontal AICenter width='415px'>
                <Icon name={icon}/>
                <Section tight hug>
                <H5>{title}</H5>
                <FP>{subtitle}</FP>
                </Section>
            </Card>
        </button>
    )
}

export const Dot=({...props})=>{
    const {layerProps}=useLayerContext()
    const {Mode}=useModeContext()
    props.ParentLayer=layerProps.RelativeName
    props.Mode=Mode
    return(
        <div onClick={props.onClick} className={getClasses('DPDot',props)} style={{backgroundColor:layerProps.Background,...props.style}}>
            {props.icon&&props.icon}
        </div>
    )
}