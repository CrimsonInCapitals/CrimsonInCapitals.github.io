import React, { useEffect, useState } from 'react';
import CarasolItem from './carasolItem';
import CarasolCard from './carasolItem';
import Scroller from './Scroller';



const Carasol = ({items})=> {

    const [value,setValue]=useState(0)
    const [displayItem,setdisplayItem] = useState(0)

    const newslide = ()=>{
        items.length-1 > displayItem? setdisplayItem(displayItem+1):setdisplayItem(0)
    }

    const handlechange = ()=>{
        value == 100? newslide && setValue(value): setValue(value)

    }


return(
    <section className='carasol'>
        <CarasolItem Header={items[displayItem].Header}/>
        
    </section>
    );
}
export default Carasol;