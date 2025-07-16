import {Routes,Route, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Main, useThemeContext } from '../context/theme';
import {ButtonL} from './button';
import { useInternalContext } from '../context/links';
import { H1, HL } from './StyledComponents';

export const Header = ()=>{
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
    return(
        <header onClick={showmenu} style={S({element:'header',properties:['backgroundColor','borderBottom']})}>
            <div id='HeaderSection'>
<nav className='full' style={{...menu}}>
          {pages.filter(isrankone).map(({name,to,component})=>(
          <HL onClick={showmenu} key={to} to={to} name={name}/>
          ))}
        </nav>
        <section className='pagename' style={title}>
        <Routes>
          {pages.map(({name,to})=>(<Route path={to} key={to} element={<H1>{name}</H1>}/>))}
        </Routes>
        </section>
        <ButtonL onClick={showmenu} icon='default'className='menu' use='button'></ButtonL>
            </div>
      </header>
    )
}