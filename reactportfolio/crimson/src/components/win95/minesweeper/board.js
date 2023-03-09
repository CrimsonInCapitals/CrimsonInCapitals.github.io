// import './App.css';
import { Children, useEffect, useReducer, useState } from 'react';
import React from 'react';
// import { useAppContext } from '../context/app';

const creategameboard = (x=9,y=9)=>{
    let board = []
    for(let i = 0;i<x;i++){
        var row = []
        for(let j =0;j<y;j++){
            row.push('#')
        }
        board.push(row)
    }
    return board
}




const populategameboard = (mines=10,click,game)=>{
    const checkagacent = [{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:+1},{x:0,y:+1},{x:1,y:+1}]
    let board = creategameboard(game.playerboard.length,game.playerboard[0].length)
    board.forEach((row,x) => {
        row.forEach((cell,y) => {
            board[x][y] = 0
        })
    })
    for(let i = 0; i<mines;i++){ //adds the bombs
        let randomx = Math.floor(Math.random() * (board.length));
        let randomy = Math.floor(Math.random() * (board[0].length));
        if(board[randomx][randomy] === 0 ||( randomx === click.x && randomy === click.y)){
             board[randomx][randomy] = 'b'
        }
        else{i=i-1}
    }
    board.forEach((row,x) => { // adds the numbers near the bombs
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




const Button = ({x,y,setBoard,game,children,setGame})=>{
    const checkCell = ()=>{
        if(!game.gameboard){
            let position = {x: x,y:y}
            setGame(...game,gameboard= ()=>populategameboard(game.mines,position,game))
        }
        setGame({...game,game.playerboard[x][y]: game.gameboard[x][y]})
        // setBoard(game.playerboard)
        console.log(game)
    }
    return(

        <button type='button' className='cell' onClick={checkCell}>
            {children}
        </button>
    )
}

const Board = ()=> {
    class gameclass{
        constructor(properties ={y:9,x:9,m:10},position = {x:1,y:1}){
            this.playerboard = creategameboard(properties.x,properties.y)
            this.mines = properties.m
            this.width = properties.x
            this.hight = properties.y
        }
    }
    const setupGame=(game,action)=>{

        return {
            ...game,
            playerboard: game.playerboard
        }
    }
    const [game,dispatchGame] = useReducer(setupGame,new gameclass())
    const [board,setBoard] = useState(game.playerboard)
    useEffect(()=>{
        console.log(board)
    },[game])
    return (
       <section className='board'>
            {board.map((row,rowindex)=>(
                <div key={rowindex}>
                {row.map((cell,colindex)=>(
                    <Button key={rowindex+colindex} x={rowindex} y={colindex} game={game}setGame={setGame} setBoard={setBoard}>{cell}</Button>
                ))}
                </div>
            ))}
       </section>
    );
}

export default Board;
