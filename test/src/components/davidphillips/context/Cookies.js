import { createContext, useContext, useState } from "react"
import Cookies from "universal-cookie"
import { Card } from "../components/card"

const path = '/'

const CookiesContext = createContext()
const Cookie = new Cookies()
class cookieHandlerClass{
    constructor(){
        if(Cookie.get('AcceptCookie',{path:'/'})){
            this.permission = true
            this.requested = true
            this.set= (l='misc',d,p=path) =>{
                Cookie.set(l,d,{expires: new Date(Date.now()+15552000000),path: p})//expires in 6 months
                return true
            }
            this.get= (l,p)=>{
                return Cookie.get(l,p)
            }
        }else{
        this.permission = Cookie.get('AcceptCookie',{path:'/'})?true:false
        this.requested = Cookie.get('AcceptCookie',{path:'/'})?true:false
        this.set=()=>false
        this.get=()=>false}

    }
}

export const CookieProvider = ({children})=>{
    const Cookie = new Cookies()
    const [cookieHandler,setCookieHandler]=useState(new cookieHandlerClass())
    const AcceptCookies =()=>{
        setCookieHandler({
            requested:true,
            permission:true,
            set: (l='misc',d,p=path) =>{
                Cookie.set(l,d,{expires: new Date(Date.now()+15552000000),...p})//expires in 6 months
                return true
            },
            get: (l,p)=>{
                return Cookie.get(l,p)
            }
            
        })
    }
    const DeclineCookies=()=>{
        console.log('decline')
        setCookieHandler({...cookieHandler,requested:true,permission:false})
    }
    cookieHandler.set && cookieHandler.set('AcceptCookie',true)
    return(
        <CookiesContext.Provider value={{cookieHandler,DeclineCookies,AcceptCookies}}>
            {children}
        </CookiesContext.Provider>
    )
}
export const useCookiesContext = ()=>useContext(CookiesContext)