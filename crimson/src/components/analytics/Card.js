import React, { Children, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/theme';
import { CH1 } from '../StyledComponents';

export const Card = ({children,heading=undefined})=> {
    const{theme,S}= useThemeContext()
    const [cardStyle,setCardStyle] =useState({backgroundColor: theme.card.background,border: theme.card.accent+' 2px solid',boxShadow: theme.Shadow})
    useEffect(()=>{
        setCardStyle({backgroundColor: theme.card.background,border:theme.card.accent+' 2px solid',boxShadow: theme.Shadow})
    },[theme])
    // console.log(children)
    const [view,setView]=useState(false)
return(
        <article style={S({element:'card'})} className='dataCard'>
            {heading && <Ribbon><CH1 style={theme.textStyle.ch1}>{heading}</CH1></Ribbon>}
            {view? Children.map(children, child=>(child)): Children.map(children,(child,index)=>index === 0 && child)}
            {Children.count(children) > 1 && <Footer view={view} setView={setView}/>}
        </article>
    )
}

export const Section = ({children,type})=> {
    const{theme}= useThemeContext()
    const [subStyle,setSubStyle]=useState({borderTop: theme.card.accent+' 1px solid'})
    useEffect(()=>{setSubStyle({borderTop: theme.card.accent+' 1px solid'})},[theme])
return(
    <section style={subStyle} className={'sub '+ type}>
        {children}
    </section>
    )
}

export const Ribbon =({children,type})=>{
    const{theme}= useThemeContext()
    const [RibbonStyle,setRibbonStyle]=useState({backgroundColor: theme.card.ribbon})
    useEffect(()=>{setRibbonStyle({backgroundColor: theme.card.ribbon})},[theme])
    return(
        <header className='Ribbon' style={RibbonStyle}>
            {children}
        </header>
    )
}
export const Footer =({view,setView})=>{
    const{theme}= useThemeContext()
    const [subStyle,setSubStyle]=useState({borderTop: theme.card.accent+' 1px solid'})
    useEffect(()=>{setSubStyle({borderTop: theme.card.accent+' 1px solid'})},[theme])
    return(
        <footer style={subStyle}>
            <button onClick={()=>setView(!view)}><CH1>{view? 'Collapse': 'Expand'}</CH1></button>
        </footer>
    )
}
