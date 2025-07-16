// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import React from 'react';
import { useAppContext } from './context/app';
const Header = ({app})=> {
    const [apps,dispatchApps] = useAppContext()
    // console.log(apps)
    return (
        <header>
            <div className='MS_handle'>
                <img src={require('./context/icons/'+app.icon+'.svg')} alt={app.name+' icon'}/>
                <h1>{app.name}</h1>
            </div>
            <menu>
                {app.header.map((item)=>(<button onClick={()=>dispatchApps({app: app.name,do: item})}><img src={require('./icons/'+item+'.svg')} alt={item+' button icon'}/></button>))}
            </menu>
        </header>
    );
}

export default Header;