import '../styling/analytics.css';
import { useEffect, useReducer, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { useCookiesContext } from '../context/cookies';
import { LineChart } from 'react-graphs-svg'
import LineGraph from 'react-line-graph'
//import { LoginSocialFacebook } from 'reactjs-social-login';
//import facebook
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
        page: 'select page',
        period_days: 7,
        until: new Date(),
        since: new Date().setDate(new Date().getDate() - 7),
        setPeriod: function(period){
            this.period_days= period
            this.until = new Date()
            this.since = this.until.setDate(this.until.getDate()-this.period_days)
        },
        token: '',
        metric:''
    }
    const [pageForm,disbatchPageForm]=useReducer(formcontroller,{})
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
    const testpagedata=()=>{
        let object = {
            "data": [
                {
                    "name": "page_engaged_users",
                    "period": "month",
                    "values": [
                        {
                            "value": 5,
                            "end_time": "2022-05-02T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-03T07:00:00+0000"
                        },
                        {
                            "value": 3,
                            "end_time": "2022-05-04T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-05-05T07:00:00+0000"
                        },
                        {
                            "value": 1,
                            "end_time": "2022-05-06T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-07T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-08T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-09T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-10T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-11T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-12T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-13T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-14T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-15T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-16T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-17T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-18T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-19T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-20T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-21T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-22T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-23T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-24T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-25T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-26T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-27T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-28T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-29T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-30T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-05-31T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-01T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-02T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-03T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-04T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-05T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-06T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-07T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-08T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-09T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-10T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-11T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-12T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-13T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-14T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-15T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-16T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-17T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-18T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-19T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-20T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-21T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-22T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-23T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-24T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-25T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-26T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-27T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-28T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-29T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-06-30T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-01T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-02T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-03T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-04T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-05T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-06T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-07T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-08T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-09T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-10T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-11T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-12T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-13T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-14T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-15T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-16T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-17T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-18T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-19T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-20T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-21T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-22T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-23T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-24T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-25T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-26T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-27T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-28T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-29T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-30T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-31T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-08-01T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-08-02T07:00:00+0000"
                        }
                    ],
                    "title": null,
                    "description": "The number of people who engaged with your Page. Engagement includes any click.",
                    "id": "100908788266204/insights/page_engaged_users/month"
                },
                {
                    "name": "page_impressions",
                    "period": "month",
                    "values": [
                        {
                            "value": 4,
                            "end_time": "2022-05-02T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-03T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-04T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-05T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-06T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-07T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-08T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-09T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-10T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-05-11T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-05-12T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-05-13T07:00:00+0000"
                        },
                        {
                            "value": 9,
                            "end_time": "2022-05-14T07:00:00+0000"
                        },
                        {
                            "value": 9,
                            "end_time": "2022-05-15T07:00:00+0000"
                        },
                        {
                            "value": 9,
                            "end_time": "2022-05-16T07:00:00+0000"
                        },
                        {
                            "value": 9,
                            "end_time": "2022-05-17T07:00:00+0000"
                        },
                        {
                            "value": 9,
                            "end_time": "2022-05-18T07:00:00+0000"
                        },
                        {
                            "value": 10,
                            "end_time": "2022-05-19T07:00:00+0000"
                        },
                        {
                            "value": 10,
                            "end_time": "2022-05-20T07:00:00+0000"
                        },
                        {
                            "value": 10,
                            "end_time": "2022-05-21T07:00:00+0000"
                        },
                        {
                            "value": 10,
                            "end_time": "2022-05-22T07:00:00+0000"
                        },
                        {
                            "value": 10,
                            "end_time": "2022-05-23T07:00:00+0000"
                        },
                        {
                            "value": 10,
                            "end_time": "2022-05-24T07:00:00+0000"
                        },
                        {
                            "value": 10,
                            "end_time": "2022-05-25T07:00:00+0000"
                        },
                        {
                            "value": 10,
                            "end_time": "2022-05-26T07:00:00+0000"
                        },
                        {
                            "value": 10,
                            "end_time": "2022-05-27T07:00:00+0000"
                        },
                        {
                            "value": 8,
                            "end_time": "2022-05-28T07:00:00+0000"
                        },
                        {
                            "value": 8,
                            "end_time": "2022-05-29T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-05-30T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-05-31T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-01T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-02T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-03T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-04T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-05T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-06T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-07T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-08T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-09T07:00:00+0000"
                        },
                        {
                            "value": 6,
                            "end_time": "2022-06-10T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-11T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-12T07:00:00+0000"
                        },
                        {
                            "value": 1,
                            "end_time": "2022-06-13T07:00:00+0000"
                        },
                        {
                            "value": 3,
                            "end_time": "2022-06-14T07:00:00+0000"
                        },
                        {
                            "value": 3,
                            "end_time": "2022-06-15T07:00:00+0000"
                        },
                        {
                            "value": 3,
                            "end_time": "2022-06-16T07:00:00+0000"
                        },
                        {
                            "value": 3,
                            "end_time": "2022-06-17T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-06-18T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-06-19T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-06-20T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-06-21T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-06-22T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-23T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-24T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-25T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-26T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-27T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-28T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-29T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-06-30T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-01T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-02T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-03T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-04T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-05T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-06T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-07T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-08T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-09T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-10T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-11T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-12T07:00:00+0000"
                        },
                        {
                            "value": 4,
                            "end_time": "2022-07-13T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-07-14T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-07-15T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-07-16T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-07-17T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-07-18T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-07-19T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-07-20T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-07-21T07:00:00+0000"
                        },
                        {
                            "value": 2,
                            "end_time": "2022-07-22T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-23T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-24T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-25T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-26T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-27T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-28T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-29T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-30T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-07-31T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-08-01T07:00:00+0000"
                        },
                        {
                            "value": 0,
                            "end_time": "2022-08-02T07:00:00+0000"
                        }
                    ],
                    "title": null,
                    "description": "The number of times that any content from or about your Page entered a person's screen. This includes posts, stories, ads and other content or information on your Page.",
                    "id": "100908788266204/insights/page_impressions/month"
                }
            ],
            "paging": {
                "previous": "https://graph.facebook.com/v16.0/100908788266204/insights?access_token=EAAFj3YdZA4gsBACTOoL6sZCgHP5awYZCGT5EUXAlIpPwCRLQIZBz7ls3gTXWwhbU8k0H5TWqUymJvYdCdYveRDXKi7DNX0EfZCiVWemBoXGSXw1hmREbGcHC08cwZChm2R79IyPSnvGPdiL3O1K5flZC77VylqxOnpjxv6ysvEHKjMAj3BOp7bdm6v8Sc7EyFd9l8ZBNixxklQZDZD&pretty=0&since=1643356800&until=1651388400&metric=page_engaged_users%2Cpage_impressions&period=month",
                "next": "https://graph.facebook.com/v16.0/100908788266204/insights?access_token=EAAFj3YdZA4gsBACTOoL6sZCgHP5awYZCGT5EUXAlIpPwCRLQIZBz7ls3gTXWwhbU8k0H5TWqUymJvYdCdYveRDXKi7DNX0EfZCiVWemBoXGSXw1hmREbGcHC08cwZChm2R79IyPSnvGPdiL3O1K5flZC77VylqxOnpjxv6ysvEHKjMAj3BOp7bdm6v8Sc7EyFd9l8ZBNixxklQZDZD&pretty=0&since=1659423600&until=1667458800&metric=page_engaged_users%2Cpage_impressions&period=month"
            }
        }
        let currentdate = new Date().toISOString().split('T')[0]
        let oneyearago = currentdate.split('-')[0]-1+'-'+currentdate.split('-')[1]+'-'+currentdate.split('-')[2]
        console.log(oneyearago)
        console.log(object)
        console.log(rashionalise(object.data[0]))
        setPageDate(rashionalise(object.data[0]))
    }
    const getPageEngagmemt=(period='month',range='year')=>{
        let until = new Date().toISOString().split('T')[0]
        let since = until.split('-')[0]+'-'+until.split('-')[1]+'-'+until.split('-')[2]
        for(let i=0;i<facebook.pages.length;i++){
            // console.log(facebook.pages[i])
            if(facebook.pages[i].id === currentPage){
                var page = {id: currentPage,token: facebook.pages[i].access_token}
            }
        }
        if(!page)return 'page not found'
        FB.api('/'+currentPage+'/insights','GET',
            {"metric":"page_engaged_users,page_impressions",since,until,"period":period,"access_token":page.token},
            function(response) {
                console.log(response)
                console.log(rashionalise(response.data[0]))
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
    useEffect(()=>{console.log(pageDate)},[pageDate.axis])
    return (
        <main className='analytics'>
            <section>
                <h1>Welcome {facebook.user && facebook.user.first_name}</h1>
                {/* {facebook.status === 'connected'&& <button onClick={getPages}>get page list</button>} */}
                {facebook.pages &&
                <>
                <label>Select page:
                <select value={currentPage} onChange={(e)=>{setCurrentPage(e.target.value); getPageEngagmemt()}}>
                    {facebook.pages.map((page)=><option key={page.id}value={page.id}>{page.name}</option>)}
                </select>
                </label>
                <label>Time range
                    <select>
                        <option value={7}>one week</option>
                        <option value={31}>one month</option>
                        <option value={93}>three months</option>
                    </select>
                </label>

                </>
                }
            </section>
            <section>
                <button onClick={testpagedata}>test page data</button>
            </section>
            {pageDate &&
                <section>
                    <article>
                        <h2>{pageDate.data[1].description}</h2>
                        {pageDate.data.map((datapoint)=>(<p key={datapoint[0].value}>{datapoint[0].text+': '+ datapoint[1]}</p>))}
                    </article>
                </section>
            }
            <button onClick={()=>console.log(pageDate)}>output pagedata</button>
                <button onClick={()=>console.log(facebook)}>log current properties</button>
                {/* {facebook.status === 'connected'&& <button onClick={()=>window.FB.api('/me','GET',{"fields":"id,first_name"},function(response) {setFacebook({...facebook,first_name: response.first_name,id: response.id})})}>get name</button>} */}
                {facebook.status !== 'connected' &&<button onClick={facebookLogin}>Log in With Facebook</button>  }
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