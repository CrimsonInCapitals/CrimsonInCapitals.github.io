// import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
//import { LoginSocialFacebook } from 'reactjs-social-login';
//import facebook

export const Analytics = ()=> {
    const login =()=>{
        window.FB.login(
            function(response){
                console.log(response)
                setFacebook({...facebook,status: response.status})
            },
            {scope: 'instagram_basic'}
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

    const [facebook,setFacebook] = useState({status:'unset'})
    return (
        <main className='home'>
            <section>
                <h1>Welcome {facebook.first_name}</h1>
                <p>place holder</p>
                <p>...</p>

                <button onClick={()=>console.log(facebook)}>log current properties</button>
                {facebook.status === 'connected'&& <button onClick={()=>window.FB.api('/me','GET',{"fields":"id,first_name"},function(response) {setFacebook({...facebook,first_name: response.first_name,id: response.id})})}>get name</button>}
                {facebook.status !== 'connected' &&<button onClick={login}>Log in With Facebook</button>  }
            </section>
        </main>
    );
}