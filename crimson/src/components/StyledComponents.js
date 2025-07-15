import { Link, useLocation } from "react-router-dom"
import { useThemeContext } from "../context/theme"
import { useEffect, useState } from "react"
import { crimson } from "../colors"

export const P =({children,className='',Style=''})=>{ // paragraph
    const{theme}= useThemeContext()
    return(
        <p className={"default "+className} style={{...Style,...theme.textStyle.p}}>{children}</p>
    )
}
export const CP =({children,className='',Style})=>{ // Card paragraoh
    const{theme}= useThemeContext()
    return(
        <p className={"default cardParagraph"+className} style={{...Style,...theme.textStyle.cp}}>{children}</p>
    )
}
export const H1 =({children,className='',Style})=>{ // heading 1
    const{theme}= useThemeContext()
    return(
        <h1 className={"default "+className} style={{...Style,...theme.textStyle.h1}}>{children}</h1>
    )
}
export const H2 =({children,className='',Style})=>{// heading 2
    const{theme}= useThemeContext()
    return(
        <h2 className={"default "+className} style={{...Style,...theme.textStyle.h2}}>{children}</h2>
    )
}
export const H3 =({children,className='',Style})=>{// heading 2
    const{theme}= useThemeContext()
    return(
        <h3 className={"default "+className} style={{...Style,...theme.textStyle.h2}}>{children}</h3>
    )
}
export const H4 =({children,className='',Style})=>{// heading 2
    const{theme}= useThemeContext()
    return(
        <h4 className={"default "+className} style={{...Style,...theme.textStyle.h2}}>{children}</h4>
    )
}
export const CH1 =({children,className,Style})=>{// card heading 1
    const{theme}= useThemeContext()
    return(
        <h1 className={"default "+className} style={{...Style,...theme.textStyle.ch1}}>{children}</h1>
    )
}
export const CH2 =({children,className,Style})=>{// card heading 1
    const{theme}= useThemeContext()
    return(
        <h1 className={"default "+className} style={{...Style,...theme.textStyle.ch2}}>{children}</h1>
    )
}
export const RH =({children,className,Style})=>{// card Ribbon heading 
    const{theme}= useThemeContext()
    return(
        <h1 className={"default "+className} style={{...Style,...theme.textStyle.ch1}}>{children}</h1>
    )
}
export const CFB =({children,className,Style,onClick})=>{// card heading 1
    const{theme}= useThemeContext()
    return(
        <button onClick={onClick} className={"default "+className} style={{...Style,...theme.textStyle.ch1}}>{children}</button>
    )
}


export const Ap =({children,className='',Style})=>{//aside
    const{theme}= useThemeContext()
    return(
        <p className={"default "+className} style={{...Style,...theme.textStyle.p}}>{children}</p>
    )
}
export const HL =({children,className='',Style,to,name,onClick})=>{
    const{theme}= useThemeContext()
    const [hover,setHover]=useState(false)
    const location = useLocation()
    const [Propertys,setPropertys]=useState({
        backgroundColor: location.pathname === to? theme.card.accent : ' '
    })
    useEffect(()=>{
            if(hover)setPropertys({backgroundColor:crimson})
            else setPropertys({backgroundColor: theme.card.accent})
    },[hover,theme,location.pathname,to])
    return(
            <Link to={to} className={'default '+className} onClick={onClick} style={{...Style}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
             <h1 style={hover?{color: crimson}:theme.textStyle.ch1}>{name}</h1>
                {location.pathname === to &&<div  className={'buttonline'} style={{...Propertys}}/>}
        </Link>
    )
}