import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/theme';

export const Card = ({children,heading='Default'})=> {
    const theme = useThemeContext()
    const [cardStyle,setCardStyle] =useState({backgroundColor: theme.Card.Background,border: theme.Card.Accent+' 2px solid',boxShadow: theme.Shadow})
    useEffect(()=>{
        setCardStyle({backgroundColor: theme.Card.Background,border:theme.Card.Accent+' 2px solid',boxShadow: theme.Shadow})
    },[theme])
return(
        <section style={cardStyle} className='card'>
            <Ribbon><h2 style={theme.TextStyle.CardHeading}>{heading}</h2></Ribbon>
            {children}
        </section>
    )
}

export const Section = ({children})=> {
    const theme = useThemeContext()
    const [subStyle,setSubStyle]=useState({borderTop: theme.Card.Accent+' 2px solid'})
    useEffect(()=>{setSubStyle({borderTop: theme.Accent+' 2px solid'})},[theme])
return(
    <div style={subStyle} className='sub'>
        {children}
    </div>
    )
}

export const Ribbon =({children})=>{
    const theme = useThemeContext()
    const [RibbonStyle,setRibbonStyle]=useState({backgroundColor: theme.Card.Ribbon})
    useEffect(()=>{setRibbonStyle({backgroundColor: theme.Card.Ribbon})},[theme])
    return(
        <div className='Ribbon' style={RibbonStyle}>
            {children}
        </div>
    )
}
