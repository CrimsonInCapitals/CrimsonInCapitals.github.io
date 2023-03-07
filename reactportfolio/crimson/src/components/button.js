import {Link} from 'react-router-dom'
import '../styling/button.css'
// import { Children, useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { dark,light,crimson } from '../colors';
import { useThemeContext } from '../context/theme';

const Button = ({icon='default',url='/',use='link',children,target='_blank'})=> {
    const darkmode = useThemeContext()
    const [iconsrc,setIconsrc]=useState(require('../icons/'+icon+'.svg'))
    const [iconbsrc,setIconbsrc]=useState(require('../icons/'+icon+'colour.svg'))
    const [styling,setStyling]=useState()
    useEffect(()=>{
    if(darkmode){
        setStyling({
            color: light
        })
        setIconsrc(require('../icons/'+icon+'.svg'))
    }else{
        setStyling({
            color: dark
        })
        setIconsrc(require('../icons/'+icon+'lightmode.svg'))
    }},[darkmode])
    return (
        <>
        {use === 'link'&&
        <Link to={url} style={styling}>
            {/* <img src={'./icon/'+icon+'.svg'}/> */}
            {children}
        </Link>
        }
        {use === 'a'&&
        <a target={target} href={url} style={styling}>
            <img className='one' src={iconsrc} alt={'icon for'+icon}/>
            <img className='two' src={iconbsrc} alt={'icon for'+icon}/>
            {children}
        </a>
        }
        {use === 'button' &&
        <button type='button' style={styling}>
            <img src={'./icons/'+icon+'.svg'} alt={'icon for'+icon}/>
            {children}
        </button>
        }
        </>
    );
}

export default Button;