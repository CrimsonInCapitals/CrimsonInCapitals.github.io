import React, { useEffect, useState } from "react";
import './win95.css'
import { useAppContext } from "./context/app";
const DesktopButton = ({appname})=>{
    const [apps,displatchApps] = useAppContext()
    const [app,setApp] = useState({name: 'Default',icon: 'minesweeper'})
    useEffect(()=>{
        apps.forEach(testapp => {
            if(testapp.name === appname){
                setApp(testapp)
            }
        });
    },[apps,appname])
    return(
        <button className="desktopbutton"
        onClick={()=>displatchApps({app: app.name,do: 'open'})}
        >
            <img  src={require('./context/icons/'+app.icon+'.svg')}alt={app.name}/>
            <label>{app.name}</label>
        </button>
    )
}
export default DesktopButton