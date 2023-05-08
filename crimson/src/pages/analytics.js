// import './App.css';
import { useEffect, useReducer, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { useCookiesContext } from '../context/cookies';
//import { LoginSocialFacebook } from 'reactjs-social-login';
//import facebook
const FB = window.FB
export const Analytics = ()=> {
    const updateFacebook = (state,action)=>{
        console.log(action)
        if(action.login) return {...state,status: action.response.status}
        if(action.pages) return {...state,pages:action.response.data}
        if(action.test) return {...state, test: true}
        if(action.user)return{...state,user:action.response}
        console.log(state)
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
    useEffect(()=>{
        console.log(facebook)
        if(facebook.status ==='connected'){
        if(!facebook.user)getUser()
        if(!facebook.pages)getPages()
    }
    },[facebook])
    return (
        <main className='home'>
            <section>
                <h1>Welcome {facebook.user && facebook.user.first_name}</h1>
                {/* {facebook.status === 'connected'&& <button onClick={getPages}>get page list</button>} */}
                {facebook.pages &&
                <>
                <h3>Select page:</h3>
                <select value={currentPage} onChange={(e)=>setCurrentPage(e.target.value)}>
                {facebook.pages.map((page)=><option id={page.id}>{page.name}</option>)}
                </select>
                </>
                }
            </section>
            {currentPage &&
                <section>
                    <article>
                        
                    </article>
                </section>
            }
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