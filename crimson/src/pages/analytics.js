// import './App.css';
import { useEffect, useReducer, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { LoginSocialFacebook } from 'reactjs-social-login';
//import facebook

export const Analytics = ()=> {

    const callFacebook = (state,action)=>{
        return window.FB.getLoginStatus(function(response){console.log(response)})
        return ({...state,type: state.type+1})
    }
    const [facebookInfo,dispatchFacebookinfo]=useReducer(callFacebook,{type:0})
    const theme = useThemeContext()
    const[shadow,setShadow] = useState()
    useEffect(()=>{
        setShadow({
            boxShadow: theme? '0 0 20px 4px black':  '0 0 20px 4px #fff5ed'
        })
    },[theme])
    useEffect(()=>{
        console.log(facebookInfo)
        console.log(window.FB)
        window.FB.getLoginStatus(function(response){console.log(response)})
    },[facebookInfo])
    return (
        <main className='home'>
            <section>
                <h1>Welcome</h1>
                <p>place holder</p>
                <p>...</p>
                <div class="fb-login-button" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="true"></div>
                <button onClick={()=>dispatchFacebookinfo({type: 'response'})}></button>
                <button onClick={()=>window.FB.login()}>click me</button>            </section>
        </main>
    );
}

