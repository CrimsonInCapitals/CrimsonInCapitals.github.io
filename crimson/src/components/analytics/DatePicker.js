import { useEffect, useReducer } from "react"
import { H2, P } from "../StyledComponents"
import { useThemeContext } from "../../context/theme"
import { useFacebookContext } from "../../context/facebook"
import { Button, MultiButton } from "../button"
import { DateObject, MonthPoint, RangeObject, applySuffix } from "../../functions/dateRange"

export const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']


export const DateRange = ({F})=>{
    const{theme}= useThemeContext()
    const facebook =useFacebookContext()
    const displayMonths = 11

    const getRange=(object,actor)=>{
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth()
        let displace = 0
        switch(actor.action){
            case 'month':displace = object.useType.iterations - date.getMonth();break
            case 'day': displace = object.useType.iterations - date.getDate();break
        }
        let relativePoint = actor.index - displace
        if(object.until || actor.action === 'set'){
            delete object.until
            delete object.since
            if(actor.action === 'set')object.useType = actor.set
        }
        let set = !object.since?'since':'until'
        switch(actor.action){
            case'month': object[set] = new MonthPoint(set,year,relativePoint,actor.index);break
            case'day': object[set] = new DateObject(year,month,relativePoint,actor.index);break
            case 'set':F(object);break
        }
        if(object.until && object.since){
            if(object.until.Index<object.since.Index){
                object.since=object.until
                delete object.until
            }else{
                F(object)
            }
        }
        return {...object}
    }

    const [range,dispatchRange]=useReducer(getRange,new RangeObject())
    return(
        <section className="flex">
            <MultiButton options={range.typeList} F={(set)=>dispatchRange({action:'set',set})} className='facebook' priority='primary' parent="main"/>
            <form onSubmit={(e)=> e.preventDefault()} className="DateRange input">
                {range.useType && range.useType.points && range.useType.points.map((month,index)=>(
                    <>
                    {range.until&&index===range.until.Index && index !== range.since.Index && <div className="beforeUntil"/>}
                    <button
                        className={
                            range.until && index===range.until.Index ? ' primary '
                            :range.since&&index===range.since.Index? 'since'
                            :range.until&&index<range.until.Index&&index>range.since.Index?'between'
                            :index===range.useType.iterations?'current':'none'
                        }
                        onClick={()=>dispatchRange({action:range.useType.type,index})}
                    >
                        <P>
                            {month}
                        </P>
                    </button>
                    {range.until&&index===range.since.Index && index !== range.until.Index && range.until.Index&&<div className="afterSince"/>}
                    </>
                ))}
            </form>
        </section>
    )
}