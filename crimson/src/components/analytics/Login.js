import { useState } from "react"
import { useThemeContext } from "../../context/theme"
import { useFacebookContext } from "../../context/facebook"

const facebookIcon = 'facebook.svg'


export const Login =()=>{
    const theme = useThemeContext()
    let facebook = useFacebookContext()
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
            <button key={platform.name} className={theme.mode+'_Primary login '+platform.name } onClick={platform.login}><img src={require('../../icons/colour/'+platform.icon)}/><p>Login</p></button>
            ))}
            {Message && <span>{Message}</span>}
        </section>
    )
}