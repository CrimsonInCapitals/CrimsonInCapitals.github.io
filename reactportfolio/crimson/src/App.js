import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Home from './pages/home';
import CaseStudies from './pages/casestudies';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';

const App = ()=> {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    console.log('query:'+mediaQuery.matches)
    const handler = event => setIsDarkMode(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [isDarkMode]);
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
      <header>

        <nav>
          {pages.map(({name,url,component})=>(<Link key={url} to={url}> {name} </Link>))}
        </nav>
      </header>
      <main>
        <Routes>
          {pages.map(({name,url,component})=>(<Route key={url} path={url} element={component}/>))}
        </Routes>
      </main>
      <Footer darkmode={isDarkMode}/>
    </>
    );
}

export default App;
