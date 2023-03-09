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



const checkagacent = [{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:+1},{x:0,y:+1},{x:1,y:+1}]

const populategameboard = (mines=10,click,game)=>{
    let board = creategameboard(game.playerboard.length,game.playerboard[0].length)
    board.forEach((row,x) => {
        row.forEach((cell,y) => {
            board[x][y] = 0
        })
    })
    for(let i = 0; i<game.mines;i++){ //adds the bombs
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




const Button = ({x,y,setBoard,dispatchGame,children})=>{
    return(
        children === '#'?
        <button type='button' className='cell' onClick={()=>dispatchGame({type:'click',x:x,y:y})}>
        </button>
        :
        <div type='button' className='cell'>
            {children}
        </div>
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
    const setupGame=(game,action={type: 'run',x:1,y:1})=>{
        if(action.type = 'click'){
            if(!game.gameboard){
                let click = {x:action.x,y:action.y}
                let gameboard = populategameboard(game.mines,click,game)
                game = {...game, gameboard:gameboard}
            }
            game.playerboard[action.x][action.y] = game.gameboard[action.x][action.y]
            if(game.gameboard[action.x][action.y] === 0){


                
            }else if(game.gameboard[action.x][action.y] === 'b'){



            }
            return {
                ...game,
            }
        }
        return game
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
                    <Button key={rowindex+colindex} x={rowindex} y={colindex} dispatchGame={dispatchGame}>{cell}</Button>
                ))}
                </div>
            ))}
       </section>
    );
}

export default Board;
