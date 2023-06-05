import { useEffect, useReducer } from "react"
import { H2, P } from "../StyledComponents"
import { useThemeContext } from "../../context/theme"
import { useFacebookContext } from "../../context/facebook"
import { Button, MultiButton } from "../button"

export const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
export const days = ['1st','2nd','3rd','4th','5th','5th','7th','Aug','Sep','Oct','Nov','Dec']

export class MonthPoint{
    constructor(get,year,month,index){
        if(!year)year = new Date().getFullYear()
        if(!month && month !== 0)month = new Date().getMonth()
        if(!index && index !== 0)index=11
        if(get === 'start'){
            var date = 1
            var offset = 0
        }else{
            var date = 0
            var offset = 1
        }
        this.Date = new Date(year,month+offset,date)
        this.Month = this.Date.getMonth()
        this.Index = index
    }
}

export class RangeObject{
    constructor(until,since){
        this.until=until?until:new MonthPoint('end')
        this.since=since?since:new MonthPoint('start')
        this.typeList = [{text:'Months',value:0,iterations:11},{text:'Weeks',value:1,iterations:7},{text:'Days',value:2,iterations:14},{text:'Years',value:3,iterations:9}]
        this.useType = this.typeList[0]
        // facebook.setTimeRange({since: this.since.Date,until:this.until.Date})
        this.months=months.map((month,index)=>index+new Date().getMonth()<11?months[index+new Date().getMonth()+1]:months[index+new Date().getMonth()-11])
        let today = new Date().getDate()
        let month = new Date().getMonth()
        let year = new Date().getFullYear()
        this.days=[]
        for(let i = this.typeList[2].iterations;i>=0;i--){
            let date = new Date(year,month,today-i).getDate()
            let lastDigit = date.toString().split('').pop()
            let suffix = lastDigit<1 ||  lastDigit>3||date.toString().split('')[0] == 1?'th':lastDigit ==3?'rd':lastDigit==2?'nd':'st'
            this.days.push(date+suffix)
        }
    }
}

export const DateRange = ()=>{
    const{theme}= useThemeContext()
    const facebook =useFacebookContext()
    const displayMonths = 11

    const getRange=(object,actor)=>{
        let year = new Date().getFullYear()
        let month = new Date().getMonth()
        switch(actor.action){
            case 'set':
                object.useType = actor.set
                delete object.until
                delete object.since
                break
            case'open':
                object.open =true
                break
            case'day':
                let date = object.useType.iterations - new Date().getDate()
                if(object.until || !object.since){
                    delete object.unti
                    object.since = {
                        Date: new Date(year,month,date),
                        index: actor.index,
                        realDate: new Date(year,month,date),
                        Month:new Date(year,month,date).getMonth()
                    }
                }else{
                    object.until = {
                        Date: new Date(year,month,date),
                        Index: actor.index,
                        RealDate: new Date(year,month,date).getDate(),
                        Month:new Date(year,month,date).getMonth()
                    }
                    facebook.getTimerange({since:object.Date.since,until:object.until.Date})
                }
                break
            case'month':
                month = actor.index- (object.useType.iterations- new Date().getMonth())
                if(object.until || !object.since){
                    delete object.until
                    object.since = new MonthPoint('start',year,month,actor.index)
                }else{
                    object.until = new MonthPoint('end',year,month,actor.index)
                    if(object.until.Index < object.since.Index){
                        object.since=object.until
                        delete object.until
                    }else{
                        facebook.setTimeRange({since: object.since.Date,until:object.until.Date})
                    }
                    console.log(object)
                }

        }
        return {...object}
    }

    const [range,dispatchRange]=useReducer(getRange,new RangeObject())
    useEffect(()=>{console.log(range)},[range])
    return(
        <section className="flex">
            <MultiButton list={range.typeList} F={(set)=>dispatchRange({action:'set',set})} className='facebook' priority='primary' parent="main"/>
            <form onSubmit={(e)=> e.preventDefault()} className="DateRange input">
                {range.useType.name === 'Months'?//------------------------------------------------------------------------------------------------------------------
                <>
                    {range.months.map((month,index)=>(
                        <>
                        {range.until&&index===range.until.Index && index !== range.since.Index && <div className="beforeUntil"/>}
                        <button
                            className={
                                range.until && index===range.until.Index ? ' primary '
                                :range.since&&index===range.since.Index? 'since'
                                :range.until&&index<range.until.Index&&index>range.since.Index?'between'
                                :index===11?'current':'none'
                            }
                            onClick={()=>dispatchRange({action:'month',index})}
                        >
                            <P>
                                {month}
                            </P>
                        </button>
                        {range.until&&index===range.since.Index && index !== range.until.Index && range.until.Index&&<div className="afterSince"/>}

                        </>
                    ))}
                </>
                :range.useType.name === 'Weeks'?//------------------------------------------------------------------------------------------------------------------
                <>

                </>
                :range.useType.name === 'Days'?//------------------------------------------------------------------------------------------------------------------
                <>
                    {range.days.map((day,index)=>(
                        <>
                        {range.until&&index===range.until.Index && index !== range.since.Index && <div className="beforeUntil"/>}
                        <button
                        className={
                            range.until && index===range.until.Index ? ' until '
                            :range.since&&index===range.since.Index? 'since'
                            :range.unti&&range.until&&index<range.until.Index&&index>range.since.Index?'between'
                            :index===range.useType.iterations?'current':'none'
                        }
                        onClick={()=>dispatchRange({action:'day',index})}
                        >
                            <P>{day}</P>
                        </button>
                        {range.since&&range.until&&index===range.since.Index && index !== range.until.Index && range.until.Index&&<div className="afterSince"/>}
                        </>

                    ))}
                </>
                :
                <>
                </>
                }
            </form>
        </section>
    )
}