// import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';

const Header = ({children})=> {

    return (
        <header>
            {children}
        </header>
    );
}

export default Header;