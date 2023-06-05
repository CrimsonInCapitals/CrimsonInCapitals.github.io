import { useEffect, useReducer, useState } from "react"
import { useFacebookContext } from "../../context/facebook"
import { Button, MultiButton } from "../button"




export const PageForm =({})=>{
    class formObject{
        constructor(){
            this.row2 = 0
            this.setRow2= function(to){
                setForm({...this,row2: to})
            }
            this.page = 'Select Page'
            this.timeMode = 'Months'
            this.periods = [{text:'Day to Day'},{text:'Week to Week'},{text:'Month to Month'}]
            this.period = 0
        }
    }
    const [form,setForm]=useState(new formObject())
    return(
        <section>
            <span>
                <Button priority={form.row2===1&&'focus'}>{form.page}</Button>
                <Button priority={form.row2===2&&'focus'}>{form.timeMode}: {form.time ? form.time.since.text+' - '+form.time.until.text:'Select Time Frame'}</Button>
                <MultiButton list={form.periods} priority={form.row2===3&&'focus'}>{form.periods[form.period].text}</MultiButton>
            </span>
            {}
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