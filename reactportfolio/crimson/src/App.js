import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Home from './pages/home';
import CaseStudies from './pages/casestudies';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import { useThemeContext } from './context/theme';
import { dark, light } from './colors';
import Button from './components/button';

const App = ()=> {
  const theme = useThemeContext()
  const [mainstyle,setMainstyle]=useState()

  useEffect(()=>{
    if(theme){
      setMainstyle({
        backgroundColor: dark,
        color: light
      })
    }else{
      setMainstyle({
        backgroundColor: light,
        color: dark
      })
    }
  },[theme])
  class Page {
    constructor(name='',url='/',component=<Home/>){
      this.name = name
      this.url = url
      this.component = component
    }
  }
  const pages = [
    new Page('Home','/',<Home/>),
    new Page('Contact','/contact',<Contact/>),
    new Page('About','/about',<About/>),
    new Page('Case Studies','/casestudies',<CaseStudies/>)
]
  return (
    <>
      <header style={mainstyle}>
        <nav>
          {pages.map(({name,url,component})=>(<Button use='link' key={url} url={url}> {name} </Button>))}
        </nav>
      </header>
      <main style={mainstyle}>
        <Routes>
          {pages.map(({name,url,component})=>(<Route key={url} path={url} element={component}/>))}
        </Routes>
      </main>
      <Footer/>
    </>
    );
}

export default App;
