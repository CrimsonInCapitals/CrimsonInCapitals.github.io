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
import { AppProvider } from './components/win95/context/app';

const App = ()=> {
  const isrank =(variable)=> {if(variable.rank === 1){return true}else{return false}}
  const theme = useThemeContext()
  const [mainstyle,setMainstyle]=useState()
  const [menu,setMenu] =useState({})
  const showmenu =()=>{
    menu.display && menu.display == 'inherit'? setMenu({}):setMenu({display:'inherit'})
    
  }
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
        <nav className='full' style={{...menu, ...mainstyle}}>
          {pages.filter(isrank).map(({name,url,component})=>(<Button onClick={showmenu} use='link' key={url} url={url}> {name} </Button>))}
          <a href='../resume.pdf' target='_blank'>Résumé</a>
        </nav>
        <Button onClick={showmenu} icon='default'className='menu' use='button'></Button>
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
