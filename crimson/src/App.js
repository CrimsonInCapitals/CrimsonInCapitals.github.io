import './App.css';
import {Routes,Route, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Footer from './components/footer';
import { useThemeContext } from './context/theme';
import Button from './components/button';
import { useInternalContext } from './context/links';
import Experiment from './pages/experimental';
import { H1, HL } from './components/StyledComponents';
import { Home } from './pages/home';
import { FourZeroFour } from './pages/404';

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
  const [title,setTitle]=useState({})
  const showmenu =()=>{
    menu.display && menu.display === 'inherit'? setMenu({}):setMenu({display:'inherit'})
    title.display && title.display === 'none'? setTitle({}):setTitle({display:'none'})

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
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location.pathname])
  return (
    <>
      <header style={menuStyle} onClick={showmenu}>
        <nav className='full' style={{...menu}}>
          {pages.filter(isrankone).map(({name,to,component})=>(
          <HL onClick={showmenu} key={to} to={to} name={name}/>
          ))}
          <a href='../resume.pdf' style={theme.TextStyle.CardHeading}target='_blank'>Résumé</a>
        </nav>
        <section className='pagename' style={title}>
        <Routes>
          {pages.map(({name,to})=>(<Route path={to} key={to} element={<H1>{name}</H1>}/>))}
        </Routes>
        </section>
        <Button onClick={showmenu} icon='default'className='menu' use='button'></Button>
      </header>


      <main style={mainstyle} className='home'>
        <Routes>
          {pages.map(({name,to,component})=>(<Route key={to} path={to} element={component}/>))}
          <Route path='*' element={<FourZeroFour/>}/>
        </Routes>
      </main>


      <Footer/>
    </>
    );
}

export default App;
