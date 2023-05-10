import '../styling/analytics.css';
import { useEffect, useReducer, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { useCookiesContext } from '../context/cookies';
import { LineChart } from 'react-graphs-svg'
import LineGraph from 'react-line-graph'
import { text } from 'react-graphs-svg/dist/helpers';
//import { LoginSocialFacebook } from 'reactjs-social-login';
//import facebook
class metric{
    constructor(selected=true,metric,text){
        this.selected=selected
        this.metric = metric
        this.text = text?text:metric
    }
}

export const Analytics = ()=> {
    const FB = window.FB
    const updateFacebook = (state,action)=>{
        // console.log(action)
        if(action.login) return {...state,status: action.response.status}
        if(action.pages) return {...state,pages:action.response.data}
        // if(action.test) return {...state, test: true}
        if(action.user)return{...state,user:action.response}
        // console.log(state)
        return state
    }
    const facebookLogin =()=>{
                window.FB.login(function(response){
                    disbatchFacebook({response,login:true})
                },
                {scope: 'email, manage_fundraisers,read_insights,publish_video,catalog_management,pages_manage_cta,pages_manage_instant_articles,pages_show_list,read_page_mailboxes,ads_management,ads_read,business_management,pages_messaging,pages_messaging_subscriptions,instagram_basic,instagram_manage_comments,instagram_manage_insights,instagram_content_publish,leads_retrieval,whatsapp_business_management,instagram_manage_messages,page_events,pages_read_engagement,pages_manage_metadata,pages_read_user_content,pages_manage_ads,pages_manage_posts,pages_manage_engagement,whatsapp_business_messaging'})
            }
    const [facebook,disbatchFacebook] = useReducer(updateFacebook,{status:'unset'})
    const [currentPage,setCurrentPage]=useState(false)
    
    const formdefault = {
        page: {id:0},
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
        metrics:[{selected:false,metric: 'page_engaged_users',text:'engagment'},{selected:false,metric:'page_impressions',text:'impressions'},{selected:false,metric:'page_impressions_by_country_unique',text:'impressions by country'},new metric(true,'page_views_total','Total page views')],
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
    const [pageDate,setPageDate]=useState(false)
    const [cookies,disbatchCookies] = useCookiesContext()
    const getUser=()=>{
        window.FB.api('/me','GET',{'fields':'id,first_name,last_name,email'},
        function(response){
            disbatchFacebook({user:true,response})
        })
    }
    const getPages=()=>{
        FB.api('/me/accounts','GET',{},function(response){
            disbatchFacebook({pages:true,response})
            disbatchPageForm({actor:'pages',value:response.data})
        })
    }
    const rashionalise=(dataincoming)=>{
        let data = dataincoming.values
        //return data
        let xpoints = []
        let ypoints = []
        let rashionalised ={max:0,data:[],discription: dataincoming.description,axis:[]}
        for(let i = 0;i<=12;i++){
            if(rashionalised.max < data[i].value)rashionalised.max = data[i].value
            xpoints.push({value: data[i].end_time,text:i})
            // console.log('point pushed')
            rashionalised.data.push([{value:data[i].end_time, text:'d'},data[i].value])
        }
        // console.log(ypoints)
        rashionalised.axis.push(xpoints)
        rashionalised.axis.push([0,1,2,3,4])
        return rashionalised
    }

    const getPageEngagmemt=(Data)=>{
        let access_token = Data.page.access_token
        let since = Data.since
        let until = Data.until
        let metric = Data.metric
        let period = 'week'
        FB.api('/me/insights','GET',
            {metric,since,until,period,access_token},
            function(response) {
                console.log(response)
                // console.log(rashionalise(response.data[0]))
            }
        );

    }
    useEffect(()=>{
        // console.log(facebook)
        if(facebook.status ==='connected'){
        if(!facebook.user)getUser()
        if(!facebook.pages)getPages()
    }
    },[facebook])
    // useEffect(()=>{console.log('updated pagedata');console.log(pageDate)},[pageDate.axis])
    // useEffect(()=>{console.log(pageForm)},[pageForm])
    return (
        <main className='analytics home'>
            <section>
                <h1>Welcome {facebook.user && facebook.user.first_name}</h1>
                {/* {facebook.status === 'connected'&& <button onClick={getPages}>get page list</button>} */}
                {pageForm.pages &&
                <form onSubmit={e=>{e.preventDefault(); getPageEngagmemt(pageForm)}}>
                <label>Select page:
                <select value={pageForm.page.id} onChange={e=>{disbatchPageForm({actor:'page',value: e.target.value})}}>
                    <option value='default'>Select a page</option>
                    {pageForm.pages.map((page,index)=><option key={page.id}value={page.id}>{page.name}</option>)}
                </select>
                </label>
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
                <button type='submit'>make call</button>
                </form>
                }
            </section>
            {pageDate &&
                <section>
                    <article>
                        <h2>{pageDate.data[1].description}</h2>
                        {pageDate.data.map((datapoint)=>(<p key={datapoint[0].value}>{datapoint[0].text+': '+ datapoint[1]}</p>))}
                    </article>
                </section>
            }
            {facebook.status !== 'connected' &&
            <section>
                <button className='facebooklogin' onClick={facebookLogin}>Log in With Facebook</button>
            </section>
            }
                {!cookies.request &&
                <section className='cookieRequest'>
                    <p>Can this site use cookies:</p>
                <button onClick={()=>disbatchCookies({accept: true,request:true})}>Yes</button>
                <button onClick={()=>disbatchCookies({accept:false,request:true})}>No Thank You</button>
                </section>
                }
        </main>
    );
}