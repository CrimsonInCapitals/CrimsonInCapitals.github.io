// import './App.css';
//import { useEffect} from 'react';
import React from 'react';
// import { useAppContext } from '../context/app';
import Button from './button';





const Board = ({game,dispatchGame})=> {
    return (
       <section className='board'>
            {game.playerboard.map((row,rowindex)=>(
                <div key={rowindex}>
                {row.map((cell,colindex)=>(
                    <Button key={rowindex+','+colindex} type='cell' x={rowindex} y={colindex} dispatchGame={dispatchGame}>{cell}</Button>
                ))}
                </div>
            ))}
       </section>
    );
}


export default Board