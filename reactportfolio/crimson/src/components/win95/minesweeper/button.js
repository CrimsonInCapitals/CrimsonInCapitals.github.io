import React from "react";

const Button = ({x,y,dispatchGame,type,children})=>{
    class action{
        constructor(event,x,y,children){
            this.type = event.type
            this.x=x
            this.y=y
            this.even=event
            this.button=event.button
            this.preventDefault =event.preventDefault
            this.is = children
        }
    }
    return(
        type === 'action' ?
            <button
            type='button'
            onClick={(e)=>dispatchGame({type:'new',e:e,x:x,y:y,is:children})}
            onContextMenu={(e)=>{e.preventDefault(); dispatchGame({type:'rightclick',x:x,y:y,is:children})}}
        >
            <img src={require('./assets/state/'+children+'.svg')} alt={children}/>
        </button>:
        (children === '#'|| children === 'f'|| children==='g')?
        <button
            type='button'
            // onClick={(e)=>dispatchGame({type:'click',e:e,x:x,y:y,is:children})}
            onMouseDown={(e)=>{e.preventDefault();dispatchGame(new action(e,x,y,children))}}
            onMouseUp={(e)=>{e.preventDefault();dispatchGame(new action(e,x,y,children))}}
            onContextMenu={(e)=>{e.preventDefault();}}
        >
            {children === '#'? '' : <img src={require('./assets/cells/'+children+'.svg')} alt={children}/>}
        </button>
        :
        <div type='button' className='cell'>
            {children ===0? '':   <img src={require('./assets/cells/'+children+'.svg')} alt={children}/>}
        </div>
    )
}
export default Button