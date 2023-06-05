import './App.css';
import {Routes,Route, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Footer from './components/footer';
import { Main, useThemeContext } from './context/theme';
import {ButtonL} from './components/button';
import { useInternalContext } from './context/links';
import Experiment from './pages/experimental';
import { H1, HL } from './components/StyledComponents';
import { Home } from './pages/home';
import { FourZeroFour } from './pages/404';

const App = ()=> {
  const isrankone =(variable)=> {if(variable.rank === 1){return true}else{return false}}
  const {theme,S} = useThemeContext()

  const [menu,setMenu] =useState({})
  const [title,setTitle]=useState({})
  const showmenu =()=>{
    menu.display && menu.display === 'inherit'? setMenu({}):setMenu({display:'inherit'})
    title.display && title.display === 'none'? setTitle({}):setTitle({display:'none'})

  }

  const pages = useInternalContext()
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location.pathname])
  return (
    <>
      <header onClick={showmenu} style={S({element:'header',properties:['backgroundColor','borderBottom']})}>
        <nav className='full' style={{...menu}}>
          {pages.filter(isrankone).map(({name,to,component})=>(
          <HL onClick={showmenu} key={to} to={to} name={name}/>
          ))}
          <a href='../resume.pdf' target='_blank'>Résumé</a>
        </nav>
        <section className='pagename' style={title}>
        <Routes>
          {pages.map(({name,to})=>(<Route path={to} key={to} element={<H1>{name}</H1>}/>))}
        </Routes>
        </section>
        <ButtonL onClick={showmenu} icon='default'className='menu' use='button'></ButtonL>
      </header>


      <Main className='home'>
        <Routes>
          {pages.map(({name,to,component})=>(<Route key={to} path={to} element={component}/>))}
          <Route path='*' element={<FourZeroFour/>}/>
        </Routes>
      </Main>


      <Footer/>
    </>
    );
}

export default App;
