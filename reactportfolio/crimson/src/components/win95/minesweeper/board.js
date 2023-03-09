// import './App.css';
import { Children, useEffect, useState } from 'react';
import React from 'react';
// import { useAppContext } from '../context/app';

const creategameboard = (x=9,y=9)=>{
    let board = []
    for(let i = 0;i<x;i++){
        var row = []
        for(let j =0;j<y;j++){
            row.push(0)
        }
        board.push(row)
    }
    return board
}
const populategameboard = (mines=10,board,click)=>{
    const checkagacent = [{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:+1},{x:0,y:+1},{x:1,y:+1}]

    for(let i = 0; i<mines;i++){
        let randomx = Math.floor(Math.random() * (board.length));
        let randomy = Math.floor(Math.random() * (board[0].length));
        if(board[randomx][randomy] === 0 ||( randomx === click.x && randomy === click.y)){
             board[randomx][randomy] = 'b'
        }
        else{i=i-1}
    }
    board.forEach((row,x) => {
        row.forEach((cell,y) => {
            if(cell === 'b'){
                checkagacent.forEach((check)=>{
                    let helpx = x-check.x
                    let helpy = y-check.y
                    if(helpx >=0 && helpx< board.length&& helpy>=0&& helpy< board[0].length){
                        if(board[helpx][helpy] !== 'b'){
                            board[helpx][helpy] = board[helpx][helpy]+1}
                    }
                })
            }
        })
    });
    return board;
}

class gameclass{
    constructor(properties ={y:9,x:9,m:10},position = {x:1,y:1}){
        this.playerboard = creategameboard(properties.x,properties.y)
        this.gameboard = populategameboard(properties.m,creategameboard(properties.x,properties.y),position)
        this.creategameboard  = ''
    }
}
const checkCell = (x,y,board)=>{
    console.log(board[x][y])
}

const Button = ({x,y,board, children})=>{
    return(
        <button type='button' className='cell' onClick={()=>checkCell(x,y,board)}>
            {children}at location {x} by {y}
        </button>
    )
}

const Board = ()=> {
    const [game,setGame] = useState(new gameclass())
    useEffect(()=>{
        setGame(new gameclass())
    },[])
    useEffect(()=>{
        // game.playerboard.map(row=>{
        //     row.map(cell=>{console.log(cell)})
        // })
    },[game])
    // console.log(game)
    return (
       <section className='board'>
            {game.playerboard.map((row,rowindex)=>(
                <div>
                {row.map((cell,colindex)=>(
                    <Button x={rowindex} y={colindex} board={game.gameboard}>{cell}</Button>
                    // console.log(cell)
                ))}
                </div>
            ))}
       </section>
    );
}

export default Board;
