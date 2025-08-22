import { Route, Routes } from "react-router-dom"
import * as Pages from './Pages/'

export const PageManager=()=>{
    return(
        <Routes>
            {Object.keys(Pages).map((r)=><Route path={Pages[r]('route')} element={Pages[r]('element')}/>)}
        </Routes>
    )
}