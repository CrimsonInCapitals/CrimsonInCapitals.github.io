import './App.css';
import {Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Footer from './components/footer';
import { useThemeContext } from './context/theme';
import { dark, light } from './colors';
import Button from './components/button';
import { useInternalContext } from './context/links';
import Experiment from './pages/experimental';

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
          <Route path='/exp' element={<Experiment/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
    );
}

export default App;
