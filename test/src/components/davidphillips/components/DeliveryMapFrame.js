import { Space } from "react-zoomable-ui"
import { getStyle } from "../Objects/ClassManager"
import { Card, DescreatCard } from "./card"
import DeliveryMap, { DefualtDelivery, PrefixExcetions, prefixTable } from "./deliverymap"
import { LayerProvider, useLayerContext, useModeContext } from "../context/brandLayers"
import { useState } from "react"
import { Choice, IconButton, MultipleChoice, TextInput } from "./Buttons"
import SvgSizeMinamise from "./icons/SizeMinamise"
import SvgSizeMaxamise from "./icons/SizeMaxamise"
import SvgMiniDetails from "./icons/MiniDetails"
import SvgDetailsOpen from "./icons/DetailsOpen"
import { H1, H2, H5, P1 } from "./TextStyles"
import { MaxamisableCard } from "./MaxamisableCard"
import { Calender } from "./Calender"

const WeekDays=['Su','Mo','Tu','We','Th','Fr','Sa']


function arrayToList(arr) {
    if (arr.length === 0) return '';
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return arr.join(' and ');

    const lastItem = arr.pop();
    return `${arr.join(', ')}, and ${lastItem}`;
}


function getLettersBeforeFirstNumber(str) {
    const match = str.match(/^[^\d]*/);
    return match ? match[0] : '';
}

export function ValidatePOcode(str){
    str = str.toUpperCase()
    if(str.length == 0)return undefined
    const Prefix = str.match(/^[^\d]*/);
    if(!Prefix[0])return undefined
    let resault = {Prefix: Prefix[0],Found:false}
    if(prefixTable.obj[Prefix[0]])resault.Found = true
    if(resault.Found){
        resault = {...prefixTable.obj[Prefix[0]],...resault,total:Prefix.input}
        if(resault.hasExceptions){
            PrefixExcetions.array.filter((ex)=>ex.code == Prefix[0]).map((ex)=>{
                if(str.startsWith(ex.ecode)){
                    console.log('exept found')
                    resault={...resault,...ex}
                }
            })
        }
    }
    return resault
}
const isWeekDay=(date)=>{
    return WeekDays[date.getDay()] !== 'Sa' && WeekDays[date.getDay()] !== 'Su'?true:false
}
export const ValidateDate=(date,POcode,REPORT=false)=>{
    let today = new Date()
    if(date < today)return{Status:'unavalible',Detail:'passed'} //is in the past
    if(!isWeekDay(date))return{Status:'unavalible',Detail:'weekend'} //is a weekend
    if(!POcode || !POcode.Found)return{Status:'Medium',Detail:''}//if po code is unknow return 'maybe'
    let object = prefixTable.obj[POcode.Prefix]
    let resault = {Status:'unavalible',Detail:'not on this day'}
    if(REPORT)console.log('po found')
    if(POcode.hasExceptions){
        PrefixExcetions.array.filter((ex)=>ex.code == POcode.Prefix).map((ex)=>{
            if(POcode.total.startsWith(ex.ecode)){
                object = ex
            }
        })
    }
    POcode.ND.map(({lead,offDay,onDay})=>{
        let cutoff = new Date()
        // console.log('mapping nd')
        cutoff.setDate(cutoff.getDate()+(lead-1))
        // console.log(lead)
        if(date >= cutoff){
            // console.log('found a cutoff')
            if(object.week[WeekDays[date.getDay()]] && onDay === true)resault = {Status:'Good',Detail:''}
            else if(object.week[WeekDays[date.getDay()]])resault = {Status:'detail',Detail:onDay}
            else if(offDay === true)resault = {Status:'Good',Detail:''}
            else if(offDay !== false)resault = {Status:'detail',Detail:offDay}
        }
    })   
    return resault       

}
export const DMFrame=({setMessage})=>{
    const {layerProps}=useLayerContext()
const {Mode}=useModeContext()
const [day,setDay]=useState('any')
const [from,setFrom]=useState('any')
const [POcode,setPOcode]=useState(undefined)
const [ND,setND]=useState(false)
const selectFrom=(id,value)=>setFrom(value)
const selectDay=(id,value)=>setDay(value)
const SelectPO=(e)=>{
    let Validated = ValidatePOcode(e.target.value)
    if(POcode !== Validated)setPOcode(Validated)

    if(Validated && Validated.Found){
        let object = prefixTable.obj[Validated.Prefix]
        if(object.hasExceptions){
            PrefixExcetions.array.filter((ex)=>ex.code == Validated.Prefix).map((ex)=>{
                if(Validated.total.startsWith(ex.ecode)){
                    object = ex    
                    console.log('message exept found')
                }
            })
        }      
        if(object.fc == 'na'){setMessage('we do not currently deliver to that postal region, contact customer service to learn more');return}
        if(object.fc !== from && from !== 'any'){setMessage('the postcode you entered is not fulfilled from the selected fullfilment centre');return}
        let message = 'Delivery is to '+object.code+' postcodes is avalible on: '
        let days = []
        if(object.week.Mo)days.push('Monday')
        if(object.week.Tu)days.push('Tuesday')
        if(object.week.We)days.push('Wednesday')
        if(object.week.Th)days.push('Thursday')
        if(object.week.Fr)days.push('Friday')
        message = message+arrayToList(days)
        // if(object.ND)message=message+' or next day for an additoinal fee of £'+prefixTable.obj[Validated.Prefix].ND
        message=message+' from our '+object.fc+' fullfillment centre.'
        console.log(Validated.hasExceptions)
        if(object.hasExceptions){
            let exeplt = []
            message = message+' With the exception of the following sub codes: '
            PrefixExcetions.array.filter((ex)=>ex.code == Validated.Prefix).map((ex)=>{
                exeplt.push(ex.ecode)
            })
            message = message+arrayToList(exeplt)+' '

        }
        setMessage(message)
    }else{setMessage(undefined)}

}


const ValidateMonth=(array)=>{
    let today = new Date()
    let cutoff = new Date()
    cutoff.setDate(today.getDate()+2)
    array.map((date,index)=>{
        array[index] = {...array[index],...ValidateDate(date.date,POcode)}
        

    })
    return array 
}
const [date,setDate]=useState(undefined)
const [MenuOpen,setMenuOpen]=useState(true)
const MenuOpenStyle = {width:'fit-content',height:'fit-content', transitionDuration: '0.5s',alignItems:'flex-end',overflow:'visible'}
const MenuClosedStyle = {width:'60px',height:'60px',transitionDuration: '0.5s'}
    return(
        <MaxamisableCard>
            
        <Space style={{alignItems:'center',padding:'var(--Margin)'}}>
            <div style={{width:'100%',height:'120%',display:'flex',alignItems:'stretch',justifyContent:'center'}}>
            <DeliveryMap from={from} POcode={POcode} day={day} date={date} nd={ND}/>

            </div>
        </Space>

        <DescreatCard Shadow absolute='topright' style={MenuOpen?MenuOpenStyle: MenuClosedStyle} overFlow>

            <Card layer="Three" style={{mxWidth:'35vw',height:'fit-content',width:'fit-content'}} overFlow>
                <H2>Map Settings</H2>
                <H5>Fulfilled from</H5>
                <MultipleChoice OnSelect={selectFrom} style={{width:'hug'}}>
                    <Choice fill value={'any'} Default>Anywhere</Choice>
                    <Choice fill value={'Manchester'}>Manchester</Choice>
                    <Choice fill value={'London'}>London</Choice>
                </MultipleChoice>
                {/* <H5>Delivery Day</H5>
                <MultipleChoice OnSelect={selectDay}>
                    <Choice fill value={'any'}Default>Any</Choice>
                    <Choice fill value={'Mo'}>Mo</Choice>
                    <Choice fill value={'Tu'}>Tu</Choice>
                    <Choice fill value={'We'}>We</Choice>
                    <Choice fill value={'Th'}>Th</Choice>
                    <Choice fill value={'Fr'}>Fr</Choice>
                </MultipleChoice> */}
                <H5>Your postcode</H5>
                <TextInput onChange={SelectPO} placeholder="SW12 1AP"/>
                <Calender HideWeekend Validator={ValidateMonth} setState={setDate} Condition={POcode}/>
            </Card>
                            <LayerProvider layer="Three">
                <IconButton style={{position:'absolute',right:'0'}} onClick={()=>setMenuOpen(!MenuOpen)}>
                {MenuOpen?<SvgMiniDetails/>:<SvgDetailsOpen/>}
                </IconButton>
            </LayerProvider>
            
        </DescreatCard>
        
    </MaxamisableCard>
    )
}