import { Children, cloneElement, useRef, useState } from "react"
import { Card, DescreatCard } from "./card"
import { Section, Test } from "./Elements"
import { Icons } from "./icons/index"
import SvgMiniArrowLeft from "./icons/MiniArrowLeft"
import SvgMiniArrowRight from "./icons/MiniArrowRight"
import { H2, P1 } from "./TextStyles"
import { IconButton } from "./Buttons"
 
export const HorizontalScroller = ({props,title,itemWidth='25',IPS=3, advance=3,children})=>{
    const ScrollerRef = useRef(null) 
    const [ScrollPossiton,setScrollPossition]=useState(0)
    const [atMax,setAtMax]=useState(false)
    const [atMin,setAtMin]=useState(true)
    const GetProps=()=>{
        let AreaWidth = ScrollerRef.current.clientWidth
        let SectionWidth = AreaWidth>1080?1080:AreaWidth
        let RelativeItemWidth = (AreaWidth/100*itemWidth)+18
        let MaxWidth = (RelativeItemWidth*children.length)-(18+SectionWidth)
        return {AreaWidth,SectionWidth,RelativeItemWidth,MaxWidth}
    }
    const Change=(by)=>{
        const {AreaWidth,RelativeItemWidth,MaxWidth} = GetProps()

        let NewScrollPossition = ScrollPossiton+(RelativeItemWidth*by)
        if(ScrollPossiton % RelativeItemWidth !==0){
            NewScrollPossition = by>0?NewScrollPossition - ScrollPossiton%RelativeItemWidth:NewScrollPossition + ScrollPossiton%RelativeItemWidth
        }
        if(ScrollPossiton <= 0 && by<0){
            NewScrollPossition=0
            console.log('here')
        }
            //sets new position to 0 if at or before 0
        if(ScrollPossiton >= MaxWidth && by>0){
            NewScrollPossition = MaxWidth
            console.log('here2')
        }
        console.log('advance: '+by+' AreaWidth: '+AreaWidth+' RelativeItemWidth: '+RelativeItemWidth+' MaxWidth: '+MaxWidth)
        console.log('np: '+NewScrollPossition+' SP: '+ScrollPossiton)
        console.log(advance)
        setAtMin(NewScrollPossition <= 0?true:false)
        setAtMax(NewScrollPossition >= MaxWidth?true:false)
        ScrollerRef.current.scrollLeft = NewScrollPossition
        setScrollPossition(NewScrollPossition)


    }
    const Check=()=>{
        const {MaxWidth} = GetProps()
        let NewScrollPossition = ScrollerRef.current.scrollLeft
        setAtMin(NewScrollPossition <= 0?true:false)
        setAtMax(NewScrollPossition >= MaxWidth?true:false)
        setScrollPossition(NewScrollPossition)
    }
    return(
         <Section AICenter overFlow>
            <Section className='main' horizontal jSpread AICenter >
                <H2>{title}</H2>
                <Section tight horizontal hug>
                    <IconButton onClick={()=>Change(-advance)}><SvgMiniArrowLeft Inactive={atMin?true:false}/></IconButton>
                    <IconButton onClick={()=>Change(advance)}><SvgMiniArrowRight Inactive={atMax?true:false}/></IconButton>
                </Section>
              
            </Section>
            <div className={'Section  cd_tb h_scroll AIStretch'} style={{overflowY:'visible',scrollBehavior:'smooth'}} ref={ScrollerRef} onScroll={Check}>
                    <Section horizontal overFlow hug style={{padding:'0 calc(50vw - 540px)'}}>
                         {children.length>0?Children.map(children,(child,index)=>{
                            let newItem = cloneElement(child,{id:index,useRefs:index,style:{height:'-webkit-fill-available'}})
                            return (
                                <DescreatCard Shadow style={{width:itemWidth+'vw',minWith:itemWidth+'vw' }} key={'card'+index}>
                                {newItem}
                                </DescreatCard>
                            )
                        }):<P1>No Items In This Section</P1>}
                    </Section>
                
            </div>
        </Section>
    )
}