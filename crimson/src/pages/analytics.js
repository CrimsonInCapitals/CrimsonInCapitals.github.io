import '../styling/analytics.css';
import { useEffect, useReducer, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { useCookiesContext } from '../context/cookies';
import TunnelGraph from '../components/analytics/tunnel';
import { Card,Section } from '../components/analytics/Card';
import { RequestForm } from '../components/analytics/Form';
import { Login } from '../components/analytics/Login';
//import { LoginSocialFacebook } from 'reactjs-social-login';
//import facebook


export const Analytics = ()=> {
    const [cookies,disbatchCookies] = useCookiesContext()

    const updateFacebook = (state,action)=>{
        console.log(action)
        switch(action.task){
            case 'login':
                return{
                    ...state,
                    status: action.response.status,
                    access_token: action.response.authResponse.accessToken
                }
            case 'logout':
                return{status:'unset'}
            case 'adduser':
                return{...state,user: action.response}
            case 'addpages':
                return{...state,pages: action.response}
            case 'error':
                return{status: 'error'}
        }
        return {...state}
    }
    const facebookdefault = {status:"unset",...cookies.set('get',['Facebook','/',''])}

    const [facebook,disbatchFacebook] = useReducer(updateFacebook,facebookdefault)


    const getUser=()=>{
        window.FB.api('/me','GET',{'fields':'id,first_name,last_name,email',access_token: facebook.accessToken},
        function(response){
            if(response.error)disbatchFacebook({task:'error'})
            else disbatchFacebook({task:'adduser',response})
        })
    }
    const getPages=()=>{
        window.FB.api('/me/accounts','GET',{access_token:facebook.accessToken},function(response){
            if(response.error)disbatchFacebook({task:'error'})
            else disbatchFacebook({task:'addpages',response})
        })
    }
    useEffect(()=>{
        if(facebook.status !== 'connected')return
        cookies.set('set','facebook','/',facebook)
        !facebook.user && getUser()
        !facebook.pages && getPages()


    },[facebook])

    const callInsights=(Data,f)=>{
        if(!Data)return
        let access_token = Data.page.access_token
        let since = Data.since
        let until = Data.until
        let metric = Data.metric
        let period = Data.period? Data.period:'day'
        window.FB.api('/me/insights','GET',
            {metric,since,until,period,access_token},
            function(response) {
                if(f){f(response)}
            }
        );

    }

    const FacebookTunnelData=(Data)=>{
        Data.since = new Date(Date.now()-31*86400000).toISOString()
        Data.metric = 'page_impressions,page_engaged_users,page_views_total,page_website_clicks_logged_in_unique'
        Data.period = 'month'
        callInsights(Data,console.log())

    }

    useEffect(()=>{
        console.log(facebook)
        let facebookCookie = cookies.get('Facebook','/')
        if(facebookCookie && facebookCookie.user.accessToken){

        }
        window.FB.getLoginStatus(function(response){//is a user logged in?
            switch(response.status){
                case 'connected':




                    break;
                case 'not_authorized':
                    



                    break;
                default:

            }
            if(response.status === 'connected'){

            }
            console.log(response)
        })
    },[])


    const pageDate = true

    return (
        <main className='analytics home' id='analytics'>
            <section>
                <h1>Welcome {facebook.user && facebook.user.first_name}</h1>
                {facebook.pages & <RequestForm pages={facebook.pages} submit={callInsights()}/>}
            </section>
            {pageDate &&
                <Card>
                    <Section>
                        <aside>
                            <h2>Conversion Tunnel</h2>
                        </aside>
                        <section>
                            <TunnelGraph data={
                                [{value:5,text:'impressions'},
                                    [{value:4,text:'engagment'},
                                        [{value:1,text:'clicks'}]]]
                            }/>
                        </section>
                    </Section>
                    {/* {pageDate.data.map((Point)=>(
                        <Section>
                            <h2>{Point.title}</h2>
                            <details>
                                <summary>Description</summary>
                                <p>{Point.description}</p>
                            </details>
                        </Section>
                    ))} */}
                </Card>
            }
            {facebook.status !== 'connected' && <Login f={disbatchFacebook}/>}
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