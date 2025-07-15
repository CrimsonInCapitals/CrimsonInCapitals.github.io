import { useModeContext } from "../context/brandLayers";
import { brand, layerProps, properties } from "./brand";
const getRadiusClasses = (self,br,props)=>{
    let byDefault=['DPCard','DPdescreat_card']
    if(!byDefault.includes(self))return ' '
    let borderclasses = ' '
    if(byDefault.includes(self)&&!br&&!props.top&&!props.bottom&&!props.left&&!props.right)return ' DPall_br'
    if((!props.top && !props.left) && (['top','left','topLeft',undefined].includes(br)))borderclasses=borderclasses+' DPtl_br'
    if((!props.top && !props.right) && ['top','right','topRight',undefined].includes(br))borderclasses=borderclasses+' DPtr_br'
    if((!props.bottom && !props.left) && ['bottom','left','bottomLeft',undefined].includes(br))borderclasses=borderclasses+' DPbl_br'
    if((!props.bottom && !props.right) && ['bottom','right','bottomRight',undefined].includes(br))borderclasses=borderclasses+' DPbr_br'
    return borderclasses
}


export const getClasses = (self,props={})=>{
    // if(props.identify)console.log(props)
    let Classes = self
    if(props.Shadow)Classes= Classes+' DPShadow_'+props.ParentLayer+'_'+props.Mode.Title
    if(props.InnerShadow)Classes= Classes+' DPInner_Shadow_'+props.MyLayer+'_'+props.Mode.Title
    console.log(self)
    Classes = Classes+ getRadiusClasses(self,props.BorderRadius&&props.BorderRadius,props)
    if(props.onClick)Classes = Classes+' DPhover_interaction'
    if(props.horizontal)Classes = Classes+' DPcd_lr' ;else{Classes = Classes+' DPcd_tb'}
    if(props.left && props.left === true)Classes = Classes+' DPdocked_left'
    if(props.right && props.right === true)Classes = Classes+' DPdocked_right'
    if(props.top && props.top === true)Classes = Classes+' DPdocked_top'
    if(props.bottom && props.bottom === true)Classes = Classes+' DPdocked_bottom'
    if(!props.overFlow && !props.hScroll && !props.vScroll)Classes= Classes+' DPhide_overflow'
    if(props.overFlow)Classes = Classes+' DPshow_overflow'
    if(props.far)Classes=Classes+' DPrelationship_far'
    else if(props.touching)Classes=Classes+' DPtouching_content'
    if(props.hug)Classes=Classes+' DPhug_content'
    if(props.tightPadding)Classes=Classes+' DPpadding_tight'
    if(props.hScroll)Classes=Classes+' DPh_scroll'
    if(props.far)Classes=Classes+' DPrelationship_far'
    if(props.tight)Classes=Classes+' DPgap_tight'
    if(props.spread)Classes=Classes+' DPgap_spread'
    if(props.jSpread)Classes=Classes+' DPjustify_spread'
    if(props.wrap)Classes=Classes+' DPflex_wrap'
    if(props.fill)Classes=Classes+' DPfill_fixed'
    if(props.WidthA)Classes=Classes+' DPWidth_auto'
    if(props.absolute=='DPtopright')Classes=Classes+' DPAB_top_right'
    if(props.textwrap)Classes=Classes+' DPtext_wrap'

    if(props.className)Classes=Classes+' '+props.className
    if(props.AICenter)Classes=Classes+' DPAICentre';else Classes=Classes+' DPAIStretch'

    return Classes
}

export const getStyle = (styles,layerProp=new properties('One'))=>{
    // console.log(props)
    let Style = {
    }
    if(styles.CopyColor){Style.color = layerProp.Copy}
    if(styles.TitleColor){Style.color = layerProp.Title}
    if(styles.AccentColor){Style.color = layerProp.Accent}
    if(styles.Background){Style.background = layerProp.Background}
    if(styles.Accent){Style.background = layerProp.Accent}
    if(styles.AccentFill){Style.fill = layerProp.Accent}
    if(styles.TitleFill){Style.fill = layerProp.Title}
    Style={...styles,...Style}
    return Style
}