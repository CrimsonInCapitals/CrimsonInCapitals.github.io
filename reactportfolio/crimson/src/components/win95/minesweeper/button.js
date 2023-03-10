import React from "react";

const Button = ({x,y,dispatchGame,type,children})=>{
    return(
        type === 'action' ?
            <button
            type='button'
            onClick={()=>dispatchGame({type:'new',x:x,y:y,is:children})}
            onContextMenu={(e)=>{e.preventDefault(); dispatchGame({type:'rightclick',x:x,y:y,is:children})}}
        >
            {children}
        </button>:
        (children === '#'|| children === 'f'|| children==='g')?
        <button
            type='button'
            onClick={()=>dispatchGame({type:'click',x:x,y:y,is:children})}
            onContextMenu={(e)=>{e.preventDefault(); dispatchGame({type:'rightclick',x:x,y:y,is:children})}}
        >
            {children === '#'? '' : children}
        </button>
        :
        <div type='button' className='cell'>
            {children}
        </div>
    )
}
export default Button