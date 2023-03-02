import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Home from './pages/home';

const App = ()=> {
  class Page {
    constructor(name='',url='/',component=<Home/>){
      this.name = name
      this.url = url
      this.component = component
    }
  }
  const pages = [
    new Page('Home','/',<Home/>),
    new Page('Contact','/contact',<Home/>),
    new Page('About','/about',<Home/>)
]
  return (
    <>
      <header>
        <nav>
          {pages.map(({name,url,component})=>(<Link key={url} to={url}> {name} </Link>))}
        </nav>
      </header>
      <main>
        <Routes>
          {pages.map(({name,url,component})=>(<Route key={url} path={url} element={component}/>))}
        </Routes>
      </main>
      <footer>
        footer
      </footer>
    </>
    );
}

export default App;
