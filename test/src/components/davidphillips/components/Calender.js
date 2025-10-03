import { useEffect, useState } from "react"
import { Button, IconButton, TextInput } from "./Buttons"
import { Card, DescreatCard } from "./card"
import { FP, H1, H5, P1, P3 } from "./TextStyles"
import { Section } from "./Elements"
import { LayerProvider, useLayerContext, useModeContext } from "../context/brandLayers"
import { Icons } from "./icons/index"

const WeekDays=['Su','Mo','Tu','We','Th','Fr','Sa']
const Months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']


const Input=({value=undefined,placeholder='place holder',onClick,...props})=>{
    const {layerProps,layer}=useLayerContext()
    const {Mode}=useModeContext()
    const {NewLayerProps,NewLayer} = Mode.GetAccentLayerProps(layer)

    // const currentLayerProps = 
    return(
        <div className="Date_Input" style={{background:NewLayerProps.Background}} onClick={onClick}>
            <LayerProvider layer={NewLayer}>
            {value?<P1>{value.getDate()+'/'+value.getMonth()+'/'+value.getFullYear()}</P1>:<P1 Accent>{placeholder}</P1>}<IconButton layer={NewLayer}>{Icons.obj.MiniCalender.element}</IconButton>

            </LayerProvider>
        </div>
    )
}
const StatusDot=({Status='Good'})=>{
    const {Mode}=useModeContext()
    const {layerProps}=useLayerContext()
    const style = Status == 'Good'?{background:Mode.GetLayerProps('Four','BTR').Background}:{background:Mode.GetLayerProps('Three','BFS').Background}
    if(Status == 'Good')return <div className="Status_Dot" style={{background:Mode.GetLayerProps('Four','BTR').Background}}/>
    if(Status == 'Medium')return <div className="Status_Dot" style={{background:Mode.GetLayerProps('Four','BFS').Background}}/>
    if(Status == 'unavalible')return <div className="Status_Dot" style={{background:layerProps.Background}}/>

    
}
const Day = ({Number,Detail,Status='detail',onClick,CurrentMonth})=>{
    const {layerProps}=useLayerContext()
    const style = !CurrentMonth? {color:layerProps.Title}:{}
    return(
        <button onClick={onClick} className="Day_button">
            <P1 Accent={Status == 'unavalible'} >{Number}</P1>
            {Status=='detail' ?<FP>{Detail}</FP>:<StatusDot Status={Status}/>}
        </button>
    )
}
const ArrayBuilder=(date=new Date())=>{
    const isWeekDay=(year, month, day)=>{
        let NewDate = new Date(year, month, day)
        return WeekDays[NewDate.getDay()] !== 'Sa' && WeekDays[NewDate.getDay()] !== 'Su'?true:false
    }
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let Fmonday = 2 - new Date(year, month, 1).getDay()
    let LSunday = new Date(year, month + 1, 0).getDay() == 0? daysInMonth: daysInMonth + (6 - new Date(year, month, daysInMonth).getDay())
    const dates = [];    
    for (let day = Fmonday; day <= LSunday; day++) { //adds all the dates from the current month to the array
        let weekend = !isWeekDay(year, month, day)
        let inmonth = day<daysInMonth || day <1? false:true
        dates.push({
            date:new Date(year, month, day),
            number:new Date(year, month, day).getDate(),
            Status:'Good',
            Detail:'',
            isWeekend: weekend,
            CurrentMonth: inmonth
        });
    }
    return dates
}


export const Calender =({Validator,setState,Condition,HideWeekend=undefined})=>{
    const {layerProps}=useLayerContext()
    const [date,SetDate]=useState(undefined)
    const [open,setOpen]=useState(false)
    const now = new Date()
    const [Period,setPeriod]=useState(Validator(ArrayBuilder()))
    useEffect(()=>{
        if(Condition)Period!== Validator(ArrayBuilder()) && setPeriod(Validator(ArrayBuilder()))
    },Condition)
    const NMonth = ()=>{
        let newMonth = Period[15].date   
        newMonth.setMonth(newMonth.getMonth()+1)
        console.log(newMonth)
        setPeriod(Validator(ArrayBuilder(newMonth)))
    }
    const PMonth =()=>{
        let newMonth = Period[15].date   
        newMonth.setMonth(newMonth.getMonth()-1)
        console.log(newMonth)
        setPeriod(Validator(ArrayBuilder(newMonth)))
    }
    return(
        <Section style={{position:'relative'}} overFlow>
            <div onClick={()=>{        
                setPeriod(Validator(ArrayBuilder(date)));
                setOpen(!open)
            }} className="date_input_label"><H5>Select Date</H5></div>
            <Input placeholder='Select Date' value={date} onClick={()=>{        
                setPeriod(Validator(ArrayBuilder(date)));
                setOpen(!open)
            }}>
                
            </Input>
            {open && <DescreatCard onFocusOut={()=>setOpen(false)} Shadow className={'Date_holder'}>
                <div className={HideWeekend?"Callender_Table_5":"Callender_Table_7"} style={{background:layerProps.Background}}>
                    <div className="callender_top">
                        <H5>{Months[Period[15].date.getMonth()]}</H5>
                        <IconButton onClick={PMonth}>{Icons.obj.miniuparrow.element}</IconButton>
                        <IconButton onClick={NMonth}>{Icons.obj.minidownarrow.element}</IconButton>
                        <IconButton onClick={()=>setOpen(false)}>{Icons.obj.closebutton.element}</IconButton>


                    </div>
                    <P3>Mo</P3>
                    <P3>Tu</P3>
                    <P3>We</P3>
                    <P3>Th</P3>
                    <P3>Fr</P3>
                    {!HideWeekend &&<P3>Sa</P3>}
                    {!HideWeekend &&<P3>Su</P3>}
                    {Period.map(({date,number,Status,Detail,isWeekend,CurrentMonth})=>{
                        if(!isWeekend || !HideWeekend)return(<Day Number={number} Status={Status} Detail={Detail} CurrentMonth={CurrentMonth}onClick={()=>{
                            if(Status !== 'unavalible'){
                                SetDate(date); 
                                setOpen(false)
                                setState(date)
                            }

                        }}/>)

                    })}




                </div>
            </DescreatCard>}
        </Section>

    )

}