import { Navigate, Route, Routes } from "react-router-dom"
import * as Pages from './Pages/'
import * as Redirects from './Pages/redirects'
import { FullScreenProvider } from "./components/fullscreenable"
import { useEffect } from "react"
import TagManager from "react-gtm-module"

class redirect{
    constructor(path,destination){
        this.path=path
        this.destination=destination
    }
}

const redirectList = [
    new redirect('/articles',Pages.Articles('route'))
]


export const PageManager=()=>{
    useEffect(()=>{
        const TagManagerArgs={
            gtmId:'GTM-MWWKRFMQ',
        }
        TagManager.initialize(TagManagerArgs)
    },[])
    return(
        <FullScreenProvider>
            <Routes>
                    {Object.keys(Pages).map((r)=><Route path={Pages[r]('route')} element={Pages[r]('element')}/>)}
                    {Object.keys(Redirects).map(r=>{
                        return r.external==true?
                        <Route path={Redirects[r].route} component={()=>{window.location.replace(Redirects[r].redirect);return null}}/>:
                        <Route path={Redirects[r].route} element={<Navigate to={Redirects[r].redirect} replace/>}/>
                    })}
                    {redirectList.map(({path,destination})=><Route path={path} element={<Navigate to={destination} replace/>}/>)}
                    {/* <Route path={'/articles'} element={<Navigate to="/articles/all" replace/>}/> */}
            </Routes>
        </FullScreenProvider>

    )
}