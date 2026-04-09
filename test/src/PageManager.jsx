import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import * as Pages from './Pages/'
import * as Redirects from './Pages/redirects'
import { FullScreenProvider } from "./components/fullscreenable"
import { useEffect } from "react"
import ReactGA from "react-ga4";

ReactGA.initialize([
    // {
    //     trackingId:"GTM-MWWKRFMQ",
    //     gaOptions:{send_page_view:false}
    // },
    {
        trackingId:'G-GR0Z4YY3B1',
        gaOptions:{send_page_view:false}
    }
])

export const PageManager=()=>{

    const getPage=(url)=>{ 
        let page = Pages.FourZeroFour()
        let shouldBreak = false
        let source = undefined
        Object.keys(Pages).some((r)=>{
            if(Pages[r]('route')==url){
                page = Pages[r]()
                shouldBreak=true
                source = 'page'
            }
            return shouldBreak
        })
        if(!shouldBreak){
            Object.keys(Redirects).some((r)=>{
                if(Redirects[r].route==url){
                    page = Redirects[r]
                    shouldBreak=true
                    source = 'redirect'
                }
                return shouldBreak
            })        
        }
        return {...page, found:shouldBreak,source:source}
    }
    const location = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
        let page =getPage(location.pathname)
        if(page)document.title = page.title
        if(page.source == 'page')ReactGA.send({hitType:'pageview',page:page.route,title:page.title})
        if(page.source == 'redirect')ReactGA.event('source_redirect',{event_catagory:'Engagment',event_lable:page.name})

    },[location])

    return(
        <FullScreenProvider>
            <Routes>
                    {Object.keys(Pages).map((r)=>{
                        let page = Pages[r]();
                        return<Route path={page.route} element={page.element}/>
                    })}
                    {Object.keys(Redirects).map(r=>{
                        let redirect =Redirects[r]
                        const External=()=>{window.location.href =redirect.redirect}
                        return<Route path={redirect.route} element={redirect.external?<External/>:<Navigate to={redirect.redirect} replace/>}/>             
                    })}
            </Routes>
        </FullScreenProvider>

    )
}