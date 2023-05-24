import React, { Children, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/theme';
import { CH1 } from '../StyledComponents';

export const Card = ({children,heading='Default'})=> {
    const theme = useThemeContext()
    const [cardStyle,setCardStyle] =useState({backgroundColor: theme.Card.Background,border: theme.Card.Accent+' 2px solid',boxShadow: theme.Shadow})
    useEffect(()=>{
        setCardStyle({backgroundColor: theme.Card.Background,border:theme.Card.Accent+' 2px solid',boxShadow: theme.Shadow})
    },[theme])
    // console.log(children)
    const [view,setView]=useState(false)
return(
        <article style={cardStyle} className='dataCard'>
            <Ribbon><CH1 style={theme.TextStyle.CardHeading}>{heading}</CH1></Ribbon>
            {view? Children.map(children, child=>(child)): Children.map(children,(child,index)=>index === 0 && child)}
            {Children.count(children) > 1 && <Footer view={view} setView={setView}/>}
        </article>
    )
}

export const Section = ({children,type})=> {
    const theme = useThemeContext()
    const [subStyle,setSubStyle]=useState({borderTop: theme.Card.Accent+' 1px solid'})
    useEffect(()=>{setSubStyle({borderTop: theme.Accent+' 1px solid'})},[theme])
return(
    <section style={subStyle} className={'sub '+ type}>
        {children}
    </section>
    )
}

export const Ribbon =({children,type})=>{
    const theme = useThemeContext()
    const [RibbonStyle,setRibbonStyle]=useState({backgroundColor: theme.Card.Ribbon})
    useEffect(()=>{setRibbonStyle({backgroundColor: theme.Card.Ribbon})},[theme])
    return(
        <header className='Ribbon' style={RibbonStyle}>
            {children}
        </header>
    )
}
export const Footer =({view,setView})=>{
    const theme = useThemeContext()
    const [subStyle,setSubStyle]=useState({borderTop: theme.Card.Accent+' 1px solid'})
    useEffect(()=>{setSubStyle({borderTop: theme.Accent+' 1px solid'})},[theme])
    return(
        <footer style={subStyle}>
            <button onClick={()=>setView(!view)}><CH1>{view? 'Collapse': 'Expand'}</CH1></button>
        </footer>
    )
}
