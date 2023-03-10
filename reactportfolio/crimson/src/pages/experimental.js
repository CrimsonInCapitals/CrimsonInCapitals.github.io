// import './App.css';
// import { useEffect, useState } from 'react';
import React from 'react';
// import { useThemeContext } from '../context/theme';

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Experiment = ()=> {
    // // const [running,setRunning] = useState(false)
    // const [text,setText] = useState(['Hello',"i'm Harrison","Welcome","Have a look around"])
    // const [line1,setLine1] =useState({text: 'Hello',display: ''})



    // const [displaytext,setDisplayText] = useState([])

    // const [blink,setblink] = useState({opacity: 1})
    // const blinker = async () => {
    //     if(blink.opacity == 0){
    //         await wait(200);
    //         setblink({
    //             opacity: 1,
    //         })
    //     }else{
    //         await wait(400);
    //         setblink({
    //             opacity: 0,
    //         })
    //     }
    // }
    // const reveal = async(line,update)=>{
    //     console.log(line)
    //     line.text.split('').map(async(letter)=>{
    //         await wait(200)
    //         update({text: line.text, display:line.display + letter})
    //     })
    //     console.log(line1)
    // }
    // useEffect(()=>{
    //         reveal(line1,setLine1)
    // },[text])

    return (
        <>
        <section>
            hi there
            <div>
                {/* <p>{line1.display.split('').map((line)=>{toString(line)})}</p> */}
            </div>
        </section>
        </>
    );
}

export default Experiment;