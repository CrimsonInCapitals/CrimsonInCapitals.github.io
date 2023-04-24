// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import '../styling/casestudies.css'
import React from 'react';
import Carasol from '../components/carasol'
import CarasolItem from '../components/carasolItem'
import Scroller from '../components/Scroller';
import CarasolCard from '../components/carasolCard';
const CaseStudies = ()=> {
    const toDisplay = [
        {Header: 'item 1',Discription:'item 1 discription'},
        {Header: 'item 2',Discription:'item 2 discription'},
        {Header: 'item 1',Discription:'item 1 discription'},
        {Header: 'item 2',Discription:'item 2 discription'},
        {Header: 'item 3',Discription:'item 3 discription'}
    ]
    return (
        <>
            <Scroller>
                {toDisplay.map((item)=><CarasolCard key={item.Header} Header={item.Header}/>)}
            </Scroller>
            <section id='AspinalofLondon'>
                My work With Aspianl Of London
            </section>
            <section id='TheDogRoom'>

            </section>
            <section id='AskItalian'>

            </section>
            <section id='AmazingGrace'>

            </section>
        </>
    );
}

export default CaseStudies;