import { Route, Routes } from "react-router-dom"
import * as Pages from './Pages/'
import { FullScreenProvider } from "./components/fullscreenable"

export const PageManager=()=>{
    // console.log(Pages)
    return(
        <FullScreenProvider>
            <Routes>
                    {Object.keys(Pages).map((r)=><Route path={Pages[r]('route')} element={Pages[r]('element')}/>)}
            </Routes>
        </FullScreenProvider>

    )
}