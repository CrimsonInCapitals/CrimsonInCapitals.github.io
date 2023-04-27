import React from 'react';
import { Link } from 'react-router-dom';
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
        {Header && <h1>{Header}</h1>}
        {children &&  <p>{children}</p>}
    </div>
    )
}

export const CaseWithAside = ({Header='Default',Image=require('../sources/default.png'),size='small',To,children,Right=true})=> {
    return(
        <article className={size+'Card card cardwithaside'}>
            {!Right&& children &&  <p>{children}</p>}

            <img src={Image} alt={Header} className='withaside'/>

            {Right&& children &&  <p>{children}</p>}
        </article>
        )
    }