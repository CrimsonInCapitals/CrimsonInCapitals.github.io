import { useEffect, useState } from "react"

export const HorizontalAutoScroller=({children})=>{
    const [offset,setOffset]=useState(-100)
    const [ play,setPlay]=useState(false)
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function f(p){
        let next = p>=0?-100:parseFloat(p)+0.05
        setOffset(next)
        delay(20)        
        play && f(next)
    }
    useEffect(()=>{
        f(-100)
    },[])
    return(
        <div>
            <div style={{position:'absolute',height:'50px',left:'0', width:'100vw',overflow:'hidden',backgroundColor:'red',display:'flex'}} onMouseEnter={()=>setPlay(false)} onMouseLeave={()=>{setPlay(true);f(offset)}}>
                <div style={{transform:'translateX('+offset+'%)',backgroundColor:'blue',minWidth:'100vw'}}>
                    {children}                
                </div>
                <div style={{transform:'translateX('+offset+'%)',backgroundColor:'blue',minWidth:'100vw'}}>
                    {children}                
                </div>
            </div>
        </div>
    )
}