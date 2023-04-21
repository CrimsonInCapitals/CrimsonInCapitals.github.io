// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
// import { useEffect, useState } from 'react';
import '../styling/casestudies.css'
import React from 'react';
import Carasol from '../components/carasol'
import CarasolItem from '../components/carasolItem'
const CaseStudies = ()=> {
    return (
        <>
        <section>
            <h1>CaseStudies page</h1>
        </section>
        <Carasol>
            <CarasolItem></CarasolItem>
            <CarasolItem></CarasolItem>
            <CarasolItem></CarasolItem>
        </Carasol>
        </>
    );
}

export default CaseStudies;