// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useReducer, useState } from 'react';
import React from 'react';
// import { useAppContext } from '../context/app';
import Board from './board';
import Timer from './timer';
import Button from './button';



const creategameboard = (game)=>{
    let board = []
    for(let i = 0;i<=game.width;i++){
        var row = []
        for(let j =0;j<=game.hight;j++){
            row.push('#')
        }
        board.push(row)
    }
    return board
}

const checkagacent = [{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:+1},{x:0,y:+1},{x:1,y:+1}]

const populategameboard = (click,game)=>{
    let board = creategameboard(game)
    board.forEach((row,x) => {
        row.forEach((cell,y) => {
            board[x][y] = 0
        })
    })
    for(let i = 0; i<game.mines;i++){ //adds the bombs
        let randomx = Math.floor(Math.random() * (game.width));
        let randomy = Math.floor(Math.random() * (game.hight));
        if(board[randomx][randomy] === 0 &&( randomx !== click.x || randomy !== click.y)){
             board[randomx][randomy] = 'b'
        }
        else{i=i-1}
    }
    board.forEach((row,x) => { // adds the numbers near the bombs
        row.forEach((cell,y) => {
            if(cell === 'b'){
                checkagacent.forEach((check)=>{
                    let helpx = x+check.x
                    let helpy = y+check.y
                    if(helpx<0 || helpx> game.width||helpy<0||helpy>game.hight){return}//if outside board
                    if(board[helpx][helpy] === 'b'){return}//is bomb
                    board[helpx][helpy] = board[helpx][helpy]+1
                })
            }
        })
    });
    return board;
}




const Minesweeper = ()=> {
    const [count,setcount] =useState(0)
    var [inplay,setInplay] = useState(false)
    const zerofunction = (cx,cy,game) =>{
        checkagacent.forEach((check) => {
            let x = cx+check.x
            let y = cy+check.y
            if(x < 0 || x > game.width || y <0 || y > game.hight){return}//outside the board
            if(game.playerboard[x][y] !== '#'){return}//has already been acted on
            game.playerboard[x][y] = game.gameboard[x][y] //makes visible to player
                if(game.playerboard[x][y] === 0){ // is also zero, runs function again
                    game = zerofunction(x,y,game)
                }
        })
        return game
    }
    class gameclass{
        constructor(properties ={y:9,x:9,m:10},position = {x:1,y:1}){
            this.playerboard = creategameboard({width: properties.x-1,hight:properties.y-1})
            this.mines = properties.m
            this.width = properties.x-1
            this.hight = properties.y-1
            this.position = position
            this.state = 'ready'
            this.timer = 0
            this.flags = 0
            this.new = ()=>{
            }
        }
    }
    const setupGame=(game,action={type: 'run',x:1,y:1})=>{
        console.log(action)
        if(action.type === 'new'){
            return new gameclass()
        }
        if(game.state === 'over' || game.state === 'win'){
            if(action.type !== 'new'){
                return{...game}
            }
        }
        if(action.type === 'mousedown'){
            game.x = action.x
            game.y = action.y
            game.state = 'suspense'
        }else if( action.type === 'mouseup'){
            if(game.x === action.x && action.y === game.y ){//mouse up on same button as mouse down
                game.state = 'play'
                switch(action.button){
                    case 0://left click
                        if(game.state !== 'play' && game.state !== 'ready'){return{...game}}
                        if(action.is === 'f'){return{...game}}
                        if(!game.gameboard){
                            let click = {x:action.x,y:action.y}
                            let gameboard = populategameboard(click,game)
                            game = {...game, gameboard:gameboard,state:'play'}
                            setInplay(true)
                        }
                        game.playerboard[action.x][action.y] = game.gameboard[action.x][action.y]
                        if(game.gameboard[action.x][action.y] === 0){
                            game = zerofunction(action.x,action.y,game)
                        }else if(game.gameboard[action.x][action.y] === 'b'){//game over
                            setInplay(false)
                            game.gameboard.forEach((row,x) => { //loops through gameboard to reviel each bomb location
                                row.forEach((cell,y) => {
                                    if(game.playerboard[x][y]==='f'){game.playerboard[x][y]='x'
                                    }
                                    if(cell === 'b'){
                                    game.playerboard[x][y] = 'b'
                                    }
                                })
                            });
                            game.playerboard[action.x][action.y] = 'e'
                            return {
                                ...game,
                                state: 'over'
                            }
                        }
                        let total =(game.width+1) * (game.hight+1)
                        console.log(total)
                        game.playerboard.forEach((row) => { //loops through gameboard to reviel each bomb location
                            row.forEach((cell) => {
                                if(cell !== '#' && cell !== 'f'){
                                    total = total-1
                                }
                            })
                        })
                        console.log(total - game.mines)
                        if(total - game.mines === 0){///game won
                            game.state = 'win'
                        }
                    break;
                    case 2://right click
                        console.log('right clcik',)
                        if(action.is === '#'){
                            game.playerboard[action.x][action.y] = 'f'
                            game.flags = game.flags+1
                        }
                        if(action.is === 'f'){
                            game.playerboard[action.x][action.y] = 'g'
                            game.flags = game.flags - 1
                        }
                        if(action.is === 'g'){
                            game.playerboard[action.x][action.y] = '#'
                        }
                    break;
                    default:
                        return{...game}
                }
                // validclick()
            }
            game.x = ''
            game.y = ''
        return{...game}
        }
        if(action.type==='timer'){
            game.timer = action.timer+1
            return{...game}
        }
        return {
            ...game
        }
    }
    const [game,dispatchGame] = useReducer(setupGame,new gameclass({x:8,y:8,m:10}))

    useEffect(()=>{
        if(game.state === 'play' || game.state === 'suspense'){
            setTimeout(()=>dispatchGame({type: 'timer',timer: game.timer}),1000)
        }
    },[inplay,game.timer])
    return (
       <>
       <main className='game'>
        <section className='controls'>
        <Timer count={game.mines-game.flags}/>
        <Button dispatchGame={dispatchGame} type='action'>{game.state}</Button>
        <Timer count={game.timer}/>

        </section>

        <Board game={game} dispatchGame={dispatchGame}/>
       </main>
       </>
    );
}

export default Minesweeper;