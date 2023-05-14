import { useReducer } from "react"

export const RequestForm=({pages,submit})=>{
    class metric{
        constructor(selected=true,metric,text){
            this.selected=selected
            this.metric = metric
            this.text = text?text:metric
        }
    }
const formdefault = {
    page: {id:0},
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
        console.log('end of function:')
        console.log(this)
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
const [pageForm,disbatchPageForm]=useReducer(formcontroller,formdefault)

return(
    <form onSubmit={e=>{e.preventDefault(); submit(pageForm)}}>
         <label>Select page:
                <select value={pageForm.page.id} onChange={e=>{disbatchPageForm({actor:'page',value: e.target.value})}}>
                    <option value='default'>Select a page</option>
                    {pageForm.pages.map((page,index)=><option key={page.id}value={page.id}>{page.name}</option>)}
                </select>
                </label>
                <details>
                    <summary>Other options</summary>
                <label>Time range:
                    <select value={pageForm.period_days} onChange={e=>disbatchPageForm({actor: 'period',value:e.target.value})}>
                        {pageForm.period_options.map((option)=>(<option key={option.value} value={option.value}>{option.text}</option>))}
                    </select>
                </label>
                <div>
                    <label>Data points:
                        {pageForm.metrics.map((metric)=>(<label>{metric.text}<input key={metric.metric} type='checkbox' onChange={e=>{console.log(e.target.checked === false); disbatchPageForm({actor: 'metric',value: metric.metric,state: e.target.checked});}} value={metric.metric} checked={metric.selected}/></label>))}
                    </label>
                </div>
                </details>
                <button type='submit'>make call</button>
    </form>
)
}