// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import React from 'react';
import { useAppContext } from './context/app';
const Header = ({app,dispatchPosition})=> {
    console.log(app)
    let close = 'close'
    const [apps,dispatchApps] = useAppContext()
    return (
        <header className='handle'
            onMouseDown={(e)=>dispatchPosition({task: 'start',e:e})}
            onMouseMove={e=>dispatchPosition({task: 'move',e:e})}
            onMouseUp={(e)=>dispatchPosition({task: 'stop',e:e})}
        >
            <div>
                <img src={require('./context/icons/'+app.icon+'.svg')} alt={app.icon}/>
                <h1>{app.name}</h1>
            </div>
            <menu>
                {app.header.map((item)=>(<button onClick={()=>dispatchApps({app: app.name,do: item})}><img src={require('./icons/'+item+'.svg')}/></button>))}
            </menu>
        </header>
    );
}

export default Header;