import './App.css';
import {Routes,Route, Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Footer from './components/footer';
import { useThemeContext } from './context/theme';
import { dark, light } from './colors';
import Button from './components/button';
import { useInternalContext } from './context/links';
import Experiment from './pages/experimental';
import { CH1 } from './components/StyledComponents';

const App = ()=> {
  const location=useLocation()
  const isrank =(variable)=> {if(variable.rank === 1){return true}else{return false}}
  const theme = useThemeContext()
  const [mainstyle,setMainstyle]=useState({
    backgroundColor: theme.Background,
  })
  const [menuStyle,setMenuStyle]=useState({
    backgroundColor: theme.Card.Background,
    borderBottom: theme.Card.Accent+' 1px solid'
  })
  const [menu,setMenu] =useState({})
  const showmenu =()=>{
    menu.display && menu.display === 'inherit'? setMenu({}):setMenu({display:'inherit'})
  }
  useEffect(()=>{
    setMenuStyle({
      backgroundColor: theme.Card.Background,
      borderBottom: theme.Card.Accent+' 1px solid'
    })
    setMainstyle({
      backgroundColor: theme.Background,
    })
  },[theme])
  const pages = useInternalContext()
  return (
    <>
      <header style={menuStyle}>
        <nav className='full' style={{...menu}}>
          {pages.filter(isrank).map(({name,to,component})=>(
          <Link onClick={showmenu} key={to} to={to}>
             <CH1>{name}</CH1>
             <div  className={'buttonline'} style={{backgroundColor: location.pathname===to?theme.Card.Accent:''}}/>
             </Link>))}
          <a href='../resume.pdf' style={theme.TextStyle.CardHeading}target='_blank'>Résumé</a>
        </nav>
        <Button onClick={showmenu} icon='default'className='menu' use='button'></Button>
      </header>
      <main style={mainstyle}>
        <Routes>
          {pages.map(({name,to,component})=>(<Route key={to} path={to} element={component}/>))}
          <Route path='/exp' element={<Experiment/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
    );
}

export default App;
