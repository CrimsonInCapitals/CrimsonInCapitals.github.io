import React, { useEffect, useState } from 'react';



const Carasol = ({children})=> {

    const [value,setValue]=useState(0)
    const [displayItem,setdisplayItem] = useState(0)

    const newslide = ()=>{
        children.length-1 > displayItem? setdisplayItem(displayItem+1):setdisplayItem(0)
    }

    const handlechange = ()=>{
        value == 100? newslide && setValue(value): setValue(value)

    }


return(
    <section className='carasol'>
        {children[displayItem]}
        {children.map((child,index)=>(index=0? child: {...child,className: 'current'}))}
    </section>
    );
}
export default Carasol;