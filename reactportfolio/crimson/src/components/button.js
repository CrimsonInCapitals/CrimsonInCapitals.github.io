import {Link, useLocation} from 'react-router-dom'
import '../styling/button.css'
// import { Children, useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { dark,light,crimson } from '../colors';
import { useThemeContext } from '../context/theme';

const Button = ({icon='default',url='/',use='link',children,target='_blank'})=> {
    const location = useLocation()
    const darkmode = useThemeContext()
    const [iconsrc,setIconsrc]=useState(require('../icons/'+icon+'.svg'))
    const [iconbsrc,setIconbsrc]=useState(require('../icons/'+icon+'colour.svg'))
    const [styling,setStyling]=useState()
    const [hover,setHover]=useState(false)
    useEffect(()=>{
    if(darkmode){
        setStyling({
            color: hover ? crimson:light,
            textDecoration: location.pathname == url && 'underline'
        })
        setIconsrc(require('../icons/'+icon+'.svg'))
    }else{
        setStyling({
            color: hover? crimson: dark,
            textDecoration: location.pathname == url && 'underline'
        })
        setIconsrc(require('../icons/'+icon+'lightmode.svg'))
    }},[darkmode,hover,location])
    return (
        <>
        {use === 'link'&&
        <Link to={url} style={styling}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}>
            {/* <img src={'./icon/'+icon+'.svg'}/> */}
            {children}
        </Link>
        }
        {use === 'a'&&
        <a target={target}
            href={url}
            style={styling}
            onMouseEnter={()=>{setHover(true)}}
            onMouseLeave={()=>{setHover(false)}}>
            <img className='one' src={iconsrc} alt={'icon for'+icon}/>
            <img className='two' src={iconbsrc} alt={'icon for'+icon}/>
            {children}
        </a>
        }
        {use === 'button' &&
        <button type='button' style={styling}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}>
            <img src={'./icons/'+icon+'.svg'} alt={'icon for'+icon}/>
            {children}
        </button>
        }
        </>
    );
}

export default Button;