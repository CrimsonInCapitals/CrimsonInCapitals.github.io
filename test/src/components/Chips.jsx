import { Children, useState } from "react"
import { Link } from "react-router-dom"

export const GenChip=({to="/",name="chip",display="chip",className="",action="link",f=undefined,type='unknown'})=>{
    return (action=="link"?<Link to={to} className={"chip "+className}><span>{display}</span></Link>:<button className={"chip "+className} onClick={()=>f(name)}><span>{display}</span></button>)
}


export const InDesign = (props)=>{ 
    let full = {...props,to:"articles/indesign",name:"InDesign", display:"InDesign", className:"AID_chip",type:'Software'}
    return<GenChip {...full} />
}

export const PhotoShop = (props)=>{ 
    let full = {...props, to:"articles/photoshop", name:"PhotoShop", display:"PhotoShop", className:"APS_chip",type:'Software'}
    return(<GenChip {...full} />)
}
export const Illustrator = (props)=>{ 
    let full = {...props,to:"articles/indesign", name:"Illustrator", display:"Illustrator", className:"AIL_chip",type:'Software'}
    return(<GenChip {...full}  />)
}
export const AfterEffects = (props)=>{ 
    let full = {...props,to:"articles/aftereffects", name:"AfterEffects", display:"AfterEffects", className:"AAE_chip" ,type:'Software'}
    return(<GenChip {...full} />)
}
export const PremierPro = (props)=>{ 
    let full = {...props,to:"articles/premierpro", name:"PremierPro", display:"PremierPro", className:"APP_chip" ,type:'Software'}
    return(<GenChip {...full} />)
}
export const Adobe = (props)=>{ 
    let full = {...props,to:"articles/adobe", name:"Adobe", display:"Adobe CC", className:"ADOBE_chip" ,type:'Software'}
    return(<GenChip {...full} />)
}
export const Publisher = (props)=>{ 
    let full = {...props,to:"articles/affinitypublisher", name:"AffinityPublisher", display:"Affinity Publisher", className:"AfP_chip" ,type:'Software'}
    return(<GenChip {...full} />)
}
export const Designer = (props)=>{ 
    let full = {...props,to:"articles/affinitydesigner", name:"AffinityDesigner", display:"Affinity Designer", className:"AfD_chip" ,type:'Software'}
    return(<GenChip {...full} />)
}
export const Figma = (props)=>{ 
    let full = {...props,to:"articles/figma", name:"figma", display:"Figma", className:"Figma_chip",type:'Software' }
    return(<GenChip {...full} />)
}

export const Motion = (props)=>{ 
    let full = {...props,to:"articles/motiondesign",name:"Motion", display:"Motion Design",type:'Service'}
    return(<GenChip {...full} />)
}
export const Brand = (props)=>{ 
    let full = {...props,to:"articles/branddesign",name:"Brand", display:"Brand Design",type:'Service'}
    return(<GenChip {...full} />)
}
export const Photography = (props)=>{
    let full = {...props,to:"articles/photography",name:"Photography", display:"Photography",type:'Service'}
    return(<GenChip {...full} />)
}
export const DigitalMarketing = (props)=>{
    let full = {...props,to:"articles/digitalmarketing",name:"DigitalMarketing", display:"Digital Marketing",type:'Service'}
    return(<GenChip {...full} />)
}
export const ProcessOpt = (props)=>{
    let full = {...props,to:"articles/processoptomisation",name:"processoptomisation", display:"Process Optomisation",type:'Service'}
    return(<GenChip {...full} />)
}
export const Presentations = (props)=>{
    let full = {...props,to:"articles/biddocuments",name:"presentations", display:"Bid Documents",type:'Service'}
    return(<GenChip {...full} />)
}
export const IconD = (props)=>{
    let full = {...props,to:"/articles/icondesign",name:"icondesign", display:"Icon Design",type:'Service'}
    return(<GenChip {...full} />)
}
export const AnimationChip = (props)=>{
    let full = {...props,to:"articles/animation",name:"animation", display:"Animation",type:'Service'}
    return(<GenChip {...full} />)
}
export const DavidPhillips = (props)=>{
    let full = {...props,to:"/articles/davidphillips",name:"DavidPhillips", display:"David Phillips",type:'Brand'}
    return(<GenChip {...full} />)
}
export const PrintDesign = (props)=>{
    let full = {...props,to:"/articles/print",name:"printdesgin", display:"Designed for Print",type:'Service'}
    return(<GenChip {...full} />)
}
export const Reactchip = (props)=>{
    let full = {...props,to:"/articles/react",name:"react", display:"React JS",className:'reactChip',type:'Software'}
    return(<GenChip {...full} />)
}
export const Developer = (props)=>{
    let full = {...props,to:"/articles/development",name:"development", display:"Software Development",type:'Service'}
    return(<GenChip {...full} />)
}
export const VSCode = (props)=>{
    let full = {...props,to:"/articles/vscode",name:"vscode", display:"VS Code",className:'vscode',type:'Software'}
    return(<GenChip {...full} />)
}
export const MetaBS = (props)=>{
    let full = {...props,to:"/articles/meta",name:"metabs", display:"Meta Business Suite",className:'metabs',type:'Software'}
    return(<GenChip {...full} />)
}
export const MSOffice = (props)=>{
    let full = {...props,to:"/articles/365",name:"m365", display:"Office 365",className:'office',type:'Software'}
    return(<GenChip {...full} />)
}
export const Monday = (props)=>{
    let full = {...props,to:"/articles/monday",name:"monday", display:"Monday.com",className:'monday',type:'Software'}
    return(<GenChip {...full} />)
}
export const SketchUp = (props)=>{
    let full = {...props,to:"/articles/sketchup",name:"sketchup", display:"SketchUp",className:'sketchup',type:'Software'}
    return(<GenChip {...full} />)
}
export const Canva = (props)=>{
    let full = {...props,to:"/articles/canva",name:"canva", display:"Canva",className:'canva',type:'Software'}
    return(<GenChip {...full} />)
}
export const PowerPoint = (props)=>{
    let full = {...props,to:"/articles/powerpoint",name:"powerpoint", display:"PowerPoint",className:'powerpoint',type:'Software'}
    return(<GenChip {...full} />)
}
export const Instagram = (props)=>{
    let full = {...props,to:"/articles/instagram",name:"instagram", display:"Instagram",className:'instagram',type:'Software'}
    return(<GenChip {...full} />)
}
export const New = (props)=>{
    let full = {...props,to:"/articles/",name:"newart", display:"New",className:'new',type:'Automatic'}
    return(<GenChip {...full} />)
}

export const CardChipHolder=({children})=>{
    const [hover,setHover]=useState(false)
    return(
        <div className="chipHolder">
            {Children.toArray(children).slice(0, 3)}
            {Children.count(children)>3&& <div className="plusHolder" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <button className="plus chip"><span>+</span></button>
                {hover && <div className="otherChips">{Children.toArray(children).slice(3, Children.toArray(children).length)}</div>}
            </div>}
        </div>
    )
}