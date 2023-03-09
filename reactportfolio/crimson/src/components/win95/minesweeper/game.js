// import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import { useAppContext } from '../context/app';
import Board from './board';

const Minesweeper = ()=> {
    const apps = useAppContext()
    return (
       <>
       <main className='game'>
        <Board/>
       </main>
       </>
    );
}

export default Minesweeper;