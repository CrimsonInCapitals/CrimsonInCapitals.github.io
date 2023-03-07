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
import { useInternalContext } from './context/links';

const App = ()=> {
  const isrank =(variable)=> {if(variable.rank === 1){return true}else{return false}}
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
  const pages = useInternalContext()
  return (
    <>
      <header style={mainstyle}>
        <nav>
          {pages.filter(isrank).map(({name,url,component})=>(<Button use='link' key={url} url={url}> {name} </Button>))}
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
