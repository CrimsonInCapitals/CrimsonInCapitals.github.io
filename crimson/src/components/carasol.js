import React, { useEffect, useState } from 'react';
const Carasol = ({children})=> {
    const [counter,setCounter] = useState(0)
    const [displayItem,setdisplayItem] = useState(0)
    children = children.map((child,index)=>({...child, id: index}))
    useEffect((console.log(children)),[])
    useEffect((
        setTimeout(()=>setCounter(counter+1),1000)
    ),[counter])
return(
    <section className='carasol'>

        {children}
        <div className='progressBar'>
            <div className='progress' style={{width: counter}}></div>
        </div>
    </section>
    );
}
export default Carasol;