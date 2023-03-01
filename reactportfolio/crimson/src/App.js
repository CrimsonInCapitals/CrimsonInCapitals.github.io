import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  const hello = '11'
  const {webpages,setWebPages} = useState()
  setWebPages({
    home: {
      name: 'Home',
      url:'/',
      component: 'home'
    },
    contact: {
      name:'Contact',
      url:'/contact',
      component: 'get in touch'
    }
  })
  useEffect(()=>{console.log(webpages)},[webpages]);
  console.log(hello)
  return (
    <>
    <header>
      <nav>
        {webpages.map(({name,url,component})=>(<Link to={url}> {name} </Link>))}
      </nav>
    </header>
    <main>
      <Routes>
        <Route path='/' element={'home'}/>
        <Route path='/contact' element={'get in touch'}/>
      </Routes>

    </main>
    <footer>
      footer
    </footer>
    </>
    );
}

export default App;
