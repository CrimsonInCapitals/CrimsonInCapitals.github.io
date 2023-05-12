import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/theme';

export const Card = ({children})=> {
    const theme = useThemeContext()
    const [cardStyle,setCardStyle] =useState()
    useEffect(()=>{
        setCardStyle({backgroundColor: theme.Card})
        console.log(theme.Background)
    },[theme])
return(
        <section style={cardStyle} className='card'>
            {children}
        </section>
    )
}

export const Section = ({children})=> {
return(
    <div >
    </div>
    )
}
