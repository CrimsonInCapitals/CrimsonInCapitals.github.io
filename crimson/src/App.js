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
import { Header } from './components/Header';

const App = ()=> {



  const pages = useInternalContext()
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location.pathname])
  return (
    <>
      <Header/>

        
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
