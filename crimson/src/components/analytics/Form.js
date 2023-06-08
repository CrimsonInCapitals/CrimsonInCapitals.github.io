import { useEffect, useReducer, useState } from "react"
import { useFacebookContext } from "../../context/facebook"
import { AvitarButton, Button, MultiButton } from "../button"
import { DateRange } from "./DatePicker"
import { PageSelector } from "./pageselector"
import { CookieBar } from "../cookierequest"




export const PageForm =({F})=>{
    const facebook = useFacebookContext()
    class formObject{
        constructor(){
            this.row2 = 0
            this.setRow2= function(to){
                setForm({...this,row2: to})
            }
            this.page = {name:'Select Page',id:0}
            this.setPage = function(id){
                setForm({...this,page:facebook.pages[id],row2:2})
                console.log(this)
                if(this.time && this.period)F(this)
            }
            this.setRange=function(range){
                let object = this
                if(object.time)delete object.time
                if(!range.until){setForm({...object,timeMode:range.useType.text});return}
                setForm({...this,time:range,timeMode:range.useType.text})
                console.log(this)
                if(this.page.id!== 0 && this.period)F(this)

            }
            this.timeMode = 'Months'
            this.periods = {default:{text:"Select Period",value:'default'},day:{text:'Day to Day',value:'day'},week:{text:'Week to Week',value:'week'},month:{text:'Month to Month',value:'month'},index:['day','week','month']}
            this.setPeriod = function(period){
                setForm({...this,period})
                console.log(this)
                if(this.page.id!== 0 && this.time)F(this)
            }
        }
    }
    const [form,setForm]=useState(new formObject())

    return(
        <section>
                <span>
                    {facebook.pages && <>
                        <AvitarButton priority={form.row2===1&&'focus'} ImgSrc={form.page.picture && form.page.picture.data.url} text={form.page.name} onClick={()=>form.row2 === 1?form.setRow2(0):form.setRow2(1)}/>
                        <Button priority={form.row2===2&&'focus'} onClick={()=>form.row2 === 2?form.setRow2(0):form.setRow2(2)}>
                            {form.time ? form.timeMode+': '+form.time.since.text+' - '+form.time.until.text:'Select Time Frame'}
                        </Button>
                        <MultiButton options={form.periods} priority={form.row2===3&&'focus'} F={(key)=>form.setPeriod(key.value)}/>
                    </>}
                    <Button onClick={facebook.logout}>Log out</Button>
                </span>
                {
                    form.row2 === 1?<PageSelector page={form.page} pages={facebook.pages} setPage={id=>form.setPage(id)}/>
                    :form.row2 === 2?<DateRange F={range=>form.setRange(range)}/>
                    :''
                }

        </section>


    )
}
























































































export const DemoRequestForm=({pages,submit})=>{
    const facebook = useFacebookContext()
    class metric{
        constructor(selected=true,metric,text){
            this.selected=selected
            this.metric = metric
            this.text = text?text:metric
        }
    }
const formdefault = {
    page: pages[pages.index[0]],
    pages: pages,
    period_days: 7,
    period_options:[{value:7,text: 'One week'},{value:31,text: 'One month'},{value:93, text:'Three monthd'}],
    until: new Date().toISOString(),
    since: new Date(Date.now()-7*86400000).toISOString(),
    setPeriod: function(period){
        this.period_days= period
        this.until = new Date().toISOString()
        this.since = new Date(Date.now()-period*86400000).toISOString()
    },
    setPage: function(pageId){
        if(!this.pages)return
        for(let i in this.pages){
            if(pageId===this.pages[i].id)this.page=this.pages[i]
        }
    },
    setPages: function(pages){this.pages = pages},
    metrics:[
        new metric(true,'page_engaged_users','engagment'),
        new metric(true,'page_impressions','impressions'),
        new metric(true,'page_impressions_by_country_unique','impressions by country'),
        new metric(true,'page_views_total','Total page views')
    ],
    setMetric:function(addMetric){
        let string = ''
        let valid = false
        for(let metric in this.metrics){
            if(this.metrics[metric].metric === addMetric){
                this.metrics[metric].selected = !this.metrics[metric].selected
                valid = true
            }
            if(this.metrics[metric].selected){
                string=string+','+this.metrics[metric].metric
            }
        }
        this.metric=string
    }

}
const formcontroller=(object,action)=>{
    if(!action.value || !action.actor)return object
    switch(action.actor){
        case 'metric':
            object.setMetric(action.value)
            break
        case 'page':
            object.setPage(action.value)
            break
        case 'pages':
            object.setPages(action.value)
            break
        case 'period':
            object.setPeriod(action.value)
            break
    }
    return {...object}
}
const [pageForm,dispatchPageForm]=useReducer(formcontroller,formdefault)
useEffect(()=>{dispatchPageForm({actor:'metric',value:'first'})},[])
return(
    <form onSubmit={e=>{e.preventDefault();submit(pageForm)}}>
         <label>Select page:
                <select value={pageForm.page.id} onChange={e=>{dispatchPageForm({actor:'page',value: e.target.value})}}>
                    <option value='default'>Select a page</option>
                    {pageForm.pages.index.map((page,index)=><option key={page}value={page}>{facebook.pages[page].name}</option>)}
                </select>
                </label>
                <details>
                    <summary>Other options</summary>
                <label>Time range:
                    <select value={pageForm.period_days} onChange={e=>dispatchPageForm({actor: 'period',value:e.target.value})}>
                        {pageForm.period_options.map((option)=>(<option key={option.value} value={option.value}>{option.text}</option>))}
                    </select>
                </label>
                <div>
                    <label>Data points:
                        {pageForm.metrics.map((metric)=>(<label key={metric.metric}>{metric.text}<input type='checkbox' onChange={e=>{dispatchPageForm({actor: 'metric',value: metric.metric,state: e.target.checked});}} value={metric.metric} checked={metric.selected}/></label>))}
                    </label>
                </div>
                </details>
                <button type='submit'>make call</button>
    </form>
)
}