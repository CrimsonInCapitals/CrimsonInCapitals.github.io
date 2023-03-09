// import './App.css';
// import { useEffect, useState } from 'react';
import React from 'react';
import './win95.css'

import Header from './header';
import { useAppContext } from './context/app';

const Window = ({app,children})=> {
    const apps = useAppContext()
    return (
       <article className='window'>
            <Header>{apps[app].name}</Header>
            <menu>
                {apps[app].menu.map((item)=>(<p key={item.display}>{item.display}</p>))}
            </menu>
                {apps[app].component}

       </article>
    );
}

export default Window;