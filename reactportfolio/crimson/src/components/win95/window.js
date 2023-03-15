// import './App.css';
// import { useEffect, useState } from 'react';
import React, { useEffect, useReducer, useState } from 'react';
import './win95.css'

import Header from './header';
import HeaderMenu from './headermenu.js';
import Draggable from 'react-draggable';

const openpositions = [{x:0,y:0},{x:1,y:1}]



const Window = ({app,index})=> {
    const positiondefault = {
        transform: 'translate('+openpositions[index].x+'px, '+openpositions[index].y+'px)'
    }
    const move = (position,action)=>{
        if(action.take === 'start'){
            setInMotion(true)
            
        }else if(action.take === 'stop'){setInMotion(false)}
        else{
            console.log(action.e)
        }
    }
    const [inMotion,setInMotion] = useState(false)
    const [position,dispatchPosition] = useReducer(move,positiondefault)
    useEffect(()=>{
        while(inMotion){
            
        }

    },[setInMotion])
    return (
        <Draggable handle=".handle">
            <article className='window'>
                    <Header app={app} dispatchPosition={dispatchPosition}/>
                    <HeaderMenu app={app}/>
                        {app.component}

            </article>
        </Draggable>

    );
}

export default Window;