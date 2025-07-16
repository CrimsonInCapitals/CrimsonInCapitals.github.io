// import './App.css';
// import { useEffect, useState } from 'react';
import React from 'react';
import './win95.css'

import Header from './header';
import HeaderMenu from './headermenu.js';
import Draggable from 'react-draggable';

let deskWidth = window.innerWidth
let deskHight = window.innerHeight
const openpositions = [{x:deskWidth/2-200,y:deskHight/2-200},{x:deskWidth/2-160,y:deskHight/2-160},{x:deskWidth/2-1200,y:deskHight/2-120},{x:deskWidth/2-80,y:deskHight/2-80}]


const Window = ({app,index})=> {

    return (
        <Draggable handle=".handle" id={'window'+index} defaultPosition={{x: openpositions[index].x, y: openpositions[index].y}}>
            <article className='MS_window' >
                    <Header app={app}/>
                    <HeaderMenu app={app}/>
                        {app.component}

            </article>
        </Draggable>

    );
}

export default Window;