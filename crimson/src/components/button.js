import {Link, useLocation} from 'react-router-dom'
import '../styling/button.css'
import './button.css'
// import { Children, useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { dark,light,crimson } from '../colors';
import { useThemeContext } from '../context/theme';
import { P } from './StyledComponents';

export const ButtonL = ({icon='default',url='/',use='link',children,target,className,onClick})=> {
    const location = useLocation()
    const {theme} = useThemeContext()
    const [iconsrc,setIconsrc]=useState(require('../icons/'+theme.IconSource+icon+'.svg'))
    const [iconbsrc]=useState(require('../icons/colour/'+icon+'.svg'))
    const [styling,setStyling]=useState()
    const [hover,setHover]=useState(false)
    useEffect(()=>{
        setStyling({
            color: hover ? crimson:theme.textStyle.cp.color,
            textDecoration: location.pathname === url && 'underline'
        })
        setIconsrc(require('../icons/'+theme.IconSource+icon+'.svg'))
    },[theme,hover,location,icon,url])
    return (
        <>
        {use === 'link'&&
        <Link to={url} style={styling}
            className={'default '+className}
            onClick={onClick}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}>
            {/* <img src={'./icon/'+icon+'.svg'}/> */}
            {children}
        </Link>
        }
        {use === 'a'&&
        <a target={target? target:'_blank'}
        className={'default '+className}

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
        className={'default '+className}
            onClick={onClick}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}>
            <img className='one' src={iconsrc} alt={'icon for'+icon}/>
            <img className='two' src={iconbsrc} alt={'icon for'+icon}/>
            {children}
        </button>
        }
        </>
    );
}



export const Button =({children,priority=undefined,onClick,parent='main',className})=>{
    const button = useThemeContext().theme.class.button
    const {S,C}=useThemeContext()
    let element = !priority?'button0':'Button'+priority
    return(
        <button
            type='button'
            className={priority+' '+className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
export const MultiButton =({options,F,className,priority,parent='main'})=>{
    const {theme} = useThemeContext()
    let start = options.default? {...options.default,location:options.index.length} : {...options[options.index[0]],location:0}
    const [current,setcurrent]=useState(start)
    const action =()=>{
        let next = options.index.length-1<=current.location? 0:current.location+1
        let set = options[options.index[next]]
        setcurrent({...set,location:next})
        F(set)
    }
    const [dotStyle,setDotStyle]=useState([{backgroundColor: theme.textStyle.p.color},{...theme.textStyle.a,backgroundColor: theme.textStyle.p.color}])
    return(
        <Button parent={parent} className={className} onClick={action} priority={priority}>
            <div className="options">
                {options.index.map((key)=>(
                    <div key={key}style={current.value === options[key].value?dotStyle[0]:dotStyle[1]}/>
                ))}
            </div>
            <p>{current.text}</p>
        </Button>
    )
}
export const AvitarButton=({text,ImgSrc,priority,onClick})=>{
    return(
        <Button priority={priority} onClick={onClick}>
            <div className='avitar'>
                {ImgSrc && <img src={ImgSrc}/>}
            </div>
            <p>{text}</p>
        </Button>
    )
}