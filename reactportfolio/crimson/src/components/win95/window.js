// import './App.css';
// import { useEffect, useState } from 'react';
import React from 'react';
import './win95.css'

import Header from './header';
import { useAppContext } from './context/app';

const Window = ({app})=> {
    return (
       <article className='window'>
            <Header>{app.name}</Header>
            <menu>
                {app.menu.map((item)=>(<p key={item.display}>{item.display}</p>))}
            </menu>
                {app.component}

       </article>
    );
}

export default Window;