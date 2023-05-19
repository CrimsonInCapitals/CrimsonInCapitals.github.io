import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CH1, H1, H2, P } from './StyledComponents';
import { useThemeContext } from '../context/theme';
export const CaseCard = ({Header='Default',Image=require('../sources/default.png'),size='small',To})=> {
    const theme = useThemeContext()
    const [cardStyle,setCardStyle] =useState({backgroundColor: theme.Card.Background,border: theme.Card.Accent+' 2px solid'})
    useEffect(()=>{
        setCardStyle({backgroundColor: theme.Card.Background,border:theme.Card.Accent+' 2px solid'})
    },[theme])
return(
    To ?
    <Link className={size+'Card card'} to={To} style={cardStyle}>
        <img src={Image} alt={Header}/>
        <CH1 className='cardheader'>{Header}</CH1>

    </Link>:
    <article className={size+'Card card'} style={cardStyle}>
    <img src={Image} alt={Header}/>
    <CH1 className='cardheader'>{Header}</CH1>

</article>
    )
}

export const CaseText = ({Header,Image=require('../sources/default.png'),size='small',To,children,back=true})=> {
    const theme = useThemeContext()
return(
    <div className={size+'Card card'}>
        {Header &&
        <H1 className='heading'>
            {back&&<Link style={theme.TextStyle.Heading1} to='/casestudies'>←</Link>}
            {Header}
        </H1>
        }
        {children &&  <P>{children}</P>}
    </div>
    )
}

export const CaseWithAside = ({Header='Default',Image=require('../sources/default.png'),size='small',To,children,Right=true})=> {
    const theme = useThemeContext()
    const [cardStyle,setCardStyle] =useState({backgroundColor: theme.Card.Background,border: theme.Card.Accent+' 2px solid'})
    useEffect(()=>{
        setCardStyle({backgroundColor: theme.Card.Background,border:theme.Card.Accent+' 2px solid'})
    },[theme])
    return(
        <article className={size+'Card card cardwithaside'}>
            {!Right&& children &&  <P>{children}</P>}

            <img src={Image} alt={Header} style={cardStyle}className='withaside'/>

            {Right&& children &&  <P>{children}</P>}
        </article>
        )
    }