import React from 'react';
import { Link } from 'react-router-dom';
import { H1, H2, P } from './StyledComponents';
export const CaseCard = ({Header='Default',Image=require('../sources/default.png'),size='small',To})=> {
return(
    To ?
    <Link className={size+'Card card'} to={To}>
        <img src={Image} alt={Header}/>
        <h2 className='cardheader'>{Header}</h2>

    </Link>:
    <article className={size+'Card card'}>
    <img src={Image} alt={Header}/>
    <h2 className='cardheader'>{Header}</h2>

</article>
    )
}

export const CaseText = ({Header,Image=require('../sources/default.png'),size='small',To,children})=> {
return(
    <div className={size+'Card card'}>
        {Header && <H1>{Header}</H1>}
        {children &&  <P>{children}</P>}
    </div>
    )
}

export const CaseWithAside = ({Header='Default',Image=require('../sources/default.png'),size='small',To,children,Right=true})=> {
    return(
        <article className={size+'Card card cardwithaside'}>
            {!Right&& children &&  <P>{children}</P>}

            <img src={Image} alt={Header} className='withaside'/>

            {Right&& children &&  <P>{children}</P>}
        </article>
        )
    }