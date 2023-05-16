import './App.css';
import {Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Footer from './components/footer';
import { useThemeContext } from './context/theme';
import Button from './components/button';
import { useInternalContext } from './context/links';
import Experiment from './pages/experimental';
import { HL } from './components/StyledComponents';

const App = ()=> {
  const isrankone =(variable)=> {if(variable.rank === 1){return true}else{return false}}
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
          {pages.filter(isrankone).map(({name,to,component})=>(
          <HL onClick={showmenu} key={to} to={to} name={name}/>
          ))}
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
