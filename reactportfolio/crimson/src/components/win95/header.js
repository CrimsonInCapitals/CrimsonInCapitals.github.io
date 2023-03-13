// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import React from 'react';

const Header = ({children})=> {

    return (
        <header>
            {children}
            <menu>
                <button><img src={require('./icons/close.svg')} alt='close'/></button>
            </menu>
        </header>
    );
}

export default Header;