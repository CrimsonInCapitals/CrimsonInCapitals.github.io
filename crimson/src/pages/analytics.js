// import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { useCookiesContext } from '../context/cookies';
//import { LoginSocialFacebook } from 'reactjs-social-login';
//import facebook

export const Analytics = ()=> {
    const [cookies,disbatchCookies] = useCookiesContext()

    const getpages=(parentresponse)=>{
        window.FB.api(
            '/me/accounts','GET',{},
            function(response){
                setFacebook({...facebook,pages:response.data,status: parentresponse.status})
            }
        )
    }
    const login =()=>{
        window.FB.login(
            function(response){
                console.log(response)
                setFacebook({...facebook,status: response.status})
                getpages(response)
            },
            {scope: 'email, manage_fundraisers,read_insights,publish_video,catalog_management,pages_manage_cta,pages_manage_instant_articles,pages_show_list,read_page_mailboxes,ads_management,ads_read,business_management,pages_messaging,pages_messaging_subscriptions,instagram_basic,instagram_manage_comments,instagram_manage_insights,instagram_content_publish,leads_retrieval,whatsapp_business_management,instagram_manage_messages,page_events,pages_read_engagement,pages_manage_metadata,pages_read_user_content,pages_manage_ads,pages_manage_posts,pages_manage_engagement,whatsapp_business_messaging'}
        )
    }

    const theme = useThemeContext()
    const [name,setName]=useState()
    const[shadow,setShadow] = useState()
    useEffect(()=>{
        setShadow({
            boxShadow: theme? '0 0 20px 4px black':  '0 0 20px 4px #fff5ed'
        })
    },[theme])
    console.log(cookies)
    console.log(cookies.set('get',['cookies','/','']))
    const [facebook,setFacebook] = useState({status:'unset'})
    return (
        <main className='home'>
            <section>
                <h1>Welcome {facebook.first_name}</h1>
                <p>place holder</p>
                <p>...</p>
                {facebook.status === 'connected'&& <button onClick={getpages}>get page list</button>}
                hi
                {facebook.pages && facebook.pages.map((page)=><h2>{page.name}</h2>)}
                hi
                <button onClick={()=>console.log(facebook)}>log current properties</button>
                {facebook.status === 'connected'&& <button onClick={()=>window.FB.api('/me','GET',{"fields":"id,first_name"},function(response) {setFacebook({...facebook,first_name: response.first_name,id: response.id})})}>get name</button>}
                {facebook.status !== 'connected' &&<button onClick={login}>Log in With Facebook</button>  }
                {!cookies.request &&
                <section>
                <button onClick={()=>disbatchCookies({accept: true,request:true})}>ACCEPT COOKIE</button>
                <button onClick={()=>disbatchCookies({accept:false,request:true})}>Decline cookie</button>
                </section>
                }
            </section>
        </main>
    );
}