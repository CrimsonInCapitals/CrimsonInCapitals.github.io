import React, { useEffect, useState } from 'react';

const Carasol = ({children})=> {
    const [counter,setCounter] = useState(0)
    const [displayItem,setdisplayItem] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
                counter == 0? setCounter(100):setCounter(0)
                children.length-1 == displayItem? setdisplayItem(0):setdisplayItem(displayItem+1)
        },10000)
    }
    ,[counter])
return(
    <section className='carasol'>
        {children[displayItem]}
        <div className='progressBar'>
            <div className='progress' style={{width: counter+'%'}}></div>
        </div>
    </section>
    );
}
export default Carasol;