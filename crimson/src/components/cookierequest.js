import { useEffect, useState } from "react"
import { useCookiesContext } from "../context/cookies"
import { useThemeContext } from "../context/theme"
import { P } from "./StyledComponents"

export const CookieBar=()=>{
    const [cookies,disbatchCookies]=useCookiesContext()
    const theme = useThemeContext()
    const [sectionStyle,setSectionStyle]=useState({
        backgroundColor: theme.Card.Background,
        borderTop: theme.Card.Accent+' 1px solud'
    })
    useEffect(()=>{
        setSectionStyle({
            backgroundColor: theme.Card.Background,
            borderTop: theme.Card.Accent+' 1px solid'
        })
    },[theme])
    return(
        <>
        {!cookies.request &&
            <section className='cookieRequest' style={sectionStyle}>
                <P>Can this site use cookies:</P>
                <button onClick={()=>disbatchCookies({accept: true,request:true})}>Yes</button>
                <button onClick={()=>disbatchCookies({accept:false,request:true})}>No Thank You</button>
            </section>
        }
        </>
    )
}