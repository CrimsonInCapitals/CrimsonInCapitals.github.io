export const applySuffix =(number)=>{
    let digits = number.toString().split('')
    let LD = digits[digits.length-1]
    let SLD = digits[digits.length-2]
    let suffix = LD<1 ||  LD>3||SLD === '1'?'th':LD ==='3'?'rd':LD==='2'?'nd':'st'
    return number+suffix

}
export const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export class MonthPoint{
    constructor(get,year,month,index){
        if(!year)year = new Date().getFullYear()
        if(!month && month !== 0)month = new Date().getMonth()
        if(!index && index !== 0)index=11
        if(get === 'since'){
            var date = 1
            var offset = 0
        }else{
            var date = 0
            var offset = 1
        }
        this.Date = new Date(year,month+offset,date)
        this.Month = this.Date.getMonth()
        this.Index = index
        this.text = months[this.Month]
    }
}
export class DateObject{
    constructor(year,month,date,index){
        this.Date = new Date(year,month,date)
        this.Index = index
        this.realDate = this.Date.getDate()
        this.Month = this.Date.getMonth()
        this.text = applySuffix(this.realDate)

    }
}
const getDays=(iterations)=>{
    let date = new Date()
    let today = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let days=[]
    for(let i = iterations;i>=0;i--){
        days.push(applySuffix(new Date(year,month,today-i).getDate()))
    }
    return days
}
const getMonths=(iterations)=>{
    let date = new Date
    let month = date.getMonth()
    let year = date.getFullYear()

    let monthslist = []
    for(let i = iterations;i>=0;i--){
        monthslist.push(months[new Date(year,month-i,1).getMonth()])
    }
    return monthslist
}
export class RangeObject{
    constructor(until,since){
        this.until=until?until:new MonthPoint('end')
        this.since=since?since:new MonthPoint('start')
        this.typeList = {
            months:{type:'month',text:'Months',value:0,iterations:11,points: getMonths(11)},
            weeks:{type:'week',text:'Weeks',value:1,iterations:7},
            days:{type:'day',text:'Days',value:2,iterations:14,points:getDays(14)},
            years:{type:'year',text:'Years',value:3,iterations:9},index:['months','weeks','days','years']}
        this.useType = this.typeList[this.typeList.index[0]]
        // facebook.setTimeRange({since: this.since.Date,until:this.until.Date})
    }
}
