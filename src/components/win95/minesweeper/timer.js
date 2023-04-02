
import { useEffect, useReducer, useState } from 'react';
import React from 'react';




const Timer = ({count})=>{
    if(count<0){count=0}
    const [displaynum,setDisplaynum] = useState(count.toString().split(''))
    useEffect(()=>{
        let number = count.toString().split('').reverse()
        if(number.length === 1){
            number.push(')')
        }
        if(number.length === 2){
            number.push(')')
        }
        setDisplaynum(number.reverse())
    },[count])
    // useEffect(()=>{console.log(displaynum)},[displaynum])

    return (
        <div className='counter'>
            {displaynum.map((digit,index)=>(
                    <img key={digit+','+index} src={require('./assets/digitalclock/'+digit+'.svg')} alt={'digital clock style number:'+digit}/>
            ))}
        </div>
        );
    }

export default Timer;