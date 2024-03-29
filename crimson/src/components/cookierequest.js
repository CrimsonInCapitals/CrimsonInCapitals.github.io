import { useEffect, useState } from "react"
import { useCookiesContext } from "../context/cookies"
import { useThemeContext } from "../context/theme"
import { P } from "./StyledComponents"
import { Link } from "react-router-dom"

export const CookieBar=()=>{
    const cookies=useCookiesContext()
    const{theme}= useThemeContext()
    const [sectionStyle,setSectionStyle]=useState({
        backgroundColor: theme.card.background,
        borderTop: theme.card.acent+' 1px solud',
    })
    useEffect(()=>{
        setSectionStyle({
            backgroundColor: theme.card.background,
            borderTop: theme.card.accent+' 1px solid',
        })
    },[theme])
    return(
        <>
        {!cookies.request &&
            <section className='cookieRequest' style={sectionStyle}>
                <P>Can this site use cookies: <Link to='/privacypolicy' style={theme.textStyle.ch1}>Why?</Link></P>
                <button onClick={()=>cookies.accept(true)}>Yes</button>
                <button onClick={()=>cookies.accept(false)}>No Thank You</button>
            </section>
        }
        </>
    )
}