import React, { useState } from 'react';
import { value } from 'react-graphs-svg/dist/helpers';

const Tunnel = ({data})=>{
    let style ={
        width: data[0].percent+'%'
    }
    if(data[1]){data[1][0].percent = (data[1][0].value/data[0].value)*100}
    return(
        <div style={style} className='Tunnel' onFocus={()=>console.log(data[0].text)}>
            <span className='tip'>{data[0].text}: {data[0].value}</span>
            {data[1] && <Tunnel data={data[1]}></Tunnel>}
        </div>
    )
}

const TunnelGraph = ({data})=> {
    data[0].percent = 100
    let near = data[0].value
    return (
        <div className='Tunnelparent'>
            <Tunnel data={data}></Tunnel>
        </div>
    );
}

export default TunnelGraph;