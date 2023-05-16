import { useState } from "react"
import { useThemeContext } from "../../context/theme"
import { useFacebookContext } from "../../context/facebook"

const facebookIcon = 'facebook.svg'


export const Login =({f})=>{
    const theme = useThemeContext()
    let [facebook,disbatchFacebook] = useFacebookContext()
    const [Message,setMessage] =useState()
    const Login = [{
        name: 'facebook',
        icon: 'facebook.svg',
        login: function(){
            setMessage( facebook.Login())
            }
        }]
    return(
        <section>
            <h2>Connect Platforms:</h2>
            {Login.map((platform)=>(
            <button className={'login '+platform.name} onClick={platform.login}><img src={require('../../icons/'+theme.IconSource+platform.icon)}/><p>Login</p></button>
            ))}
            {Message && <span>{Message}</span>}
        </section>
    )
}