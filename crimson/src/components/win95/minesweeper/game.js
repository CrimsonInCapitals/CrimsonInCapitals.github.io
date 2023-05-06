// import './App.css';
// import {Link,Routes,Route} from 'react-router-dom'
import { useEffect, useReducer} from 'react';
import React from 'react';
// import { useAppContext } from '../context/app';
import Board from './board';
import Timer from './timer';
import Button from './button';
import Cookies from 'universal-cookie';


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




const Minesweeper = ({mode={width:16,hight:16,mines:40}})=> {
    const cookies = new Cookies();
    if(!cookies.get('minesweeper')){
        cookies.set('minesweeper', mode, { path: '/' });
    }else{
        mode = cookies.get('minesweeper')
    }
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
        constructor(properties ={y:mode.hight,x:mode.width,m:mode.mines},position = {x:1,y:1}){
            // var cookies = new Cookies();
            // if(cookies.get('game',{path:'./minesweeper'})){
                // let game = cookies.get('game',{path: './minesweeper'})
                // this.playerboard = game.playerboard
                // this.mines = game.mines
                // this.width = game.width
                // this.hight = game.hight
                // this.position = game.position
                // this.state = game.state
                // this.timer = game.timer
                // this.flags = game.flags
            // }else{
            this.playerboard = creategameboard({width: properties.x-1,hight:properties.y-1})
            this.mines = properties.m
            this.width = properties.x-1
            this.hight = properties.y-1
            this.position = position
            this.state = 'ready'
            this.timer = 0
            this.flags = 0
            this.new = ()=>{
            // }
            }
        }
    }
    const setupGame=(game,action={type: 'new'})=>{
        let cookies = new Cookies()
        // cookies.set('game',{path: './minesweeper'})
        if(action.type === 'new'){
            game = new gameclass()
            cookies.set('game',game,{path:'./minesweeper'})
            return game
        }//creates a new game
        cookies.set('game',game,{path:'./minesweeper'})
        if(game.state === 'over' || game.state === 'win'){return{...game}}//prevents action if game has ended

        if(action.type==='timer'){return{...game,timer: action.timer+1}}// increases the timer

        if(action.type === 'mousedown'){//itiates a click event

            if(action.is === 'f' && action.button === 0){return{...game}}//if cell is flaged don't do click
            return{
                ...game,
                x:action.x,
                y:action.y,
                state: 'suspense'
            }
        }else if( action.type === 'mouseup'){//follows through a click event
            game.state = 'play'
            if(game.x === action.x && action.y === game.y ){//mouse up on same button as mouse down check
                switch(action.button){
                    case 0://left click
                        if(!game.gameboard){// if gameboard doesnt exist it creates one
                            let click = {x:action.x,y:action.y}
                            let gameboard = populategameboard(click,game)
                            game = {...game, gameboard:gameboard}
                        }
                        game.playerboard[action.x][action.y] = game.gameboard[action.x][action.y]//reviels the tile
                        if(game.gameboard[action.x][action.y] === 0){// if zero reviel suroundings
                            game = zerofunction(action.x,action.y,game)
                        }else if(game.gameboard[action.x][action.y] === 'b'){//mine clicked/game over
                            game.gameboard.forEach((row,x) => {row.forEach((cell,y) => {//loops through gameboard to reviel each bomb location
                                if(game.playerboard[x][y]==='f'){game.playerboard[x][y]='x'}//if cell was flaged sets it to incorrectly flaged
                                if(cell === 'b'){game.playerboard[x][y] = 'b'}// if it contained a bpmb
                            })});
                            game.playerboard[action.x][action.y] = 'e'
                            game.state = 'over'
                            return{...game}
                        }
                        let total =((game.width+1) * (game.hight+1))-game.mines//total is number of cells that must be revield to win
                        game.playerboard.forEach((row) => {row.forEach((cell) => { //loops through player board to total the number of revield cells
                            if(cell !== '#' && cell !== 'f'){total = total-1}//mines each unrevield cell, after this total in number of unrevield cells
                        })})
                        if(total === 0){///game won
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
                    default: break;
                }
            }
            game.x = ''
            game.y = ''
        }
        return {...game}
    }
    const [game,dispatchGame] = useReducer(setupGame,new gameclass({x:mode.width,y:mode.hight,m:mode.mines}))
    useEffect(()=>{
        if(game.state === 'play' || game.state === 'suspense'){
            setTimeout(()=>dispatchGame({type: 'timer',timer: game.timer}),1000)
        }
    },[game.timer,game.state])
    // console.log(cookies.get('game',{path: './minesweeper'}))
    return (
       <>
       <main className='game'>
        <section className='controls'>
        <Timer count={game.mines-game.flags}/>
        <Button key={game.state} dispatchGame={dispatchGame} type='action'>{game.state}</Button>
        <Timer count={game.timer}/>

        </section>

        <Board game={game} dispatchGame={dispatchGame}/>
       </main>
       </>
    );
}

export default Minesweeper;