import Square from "../Square/Square"
import React, { useState } from 'react';
import './style.css'

const Board = () => {
    const [boardState, setBoardState] = useState(()=>{
        return {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
       
    })

    const status = 'Next player: ' + (boardState.xIsNext ? 'X' : 'O');

const handleClick = (i)=>{
    const squares = boardState.squares.slice();
    squares[i] = boardState.xIsNext ? 'X' : 'O';
    var x = document.getElementsByClassName("square");
    x[i].style.color = boardState.xIsNext ? 'rgb(255,51,51)' : 'rgb(51,153,255)';
    x[i].style.animation = boardState.xIsNext ? 'glow-red 1s ease-in-out infinite alternate' : 'glow-blue 1s ease-in-out infinite alternate';
    setBoardState({
      squares: squares,
      xIsNext: !boardState.xIsNext,
    });
}


const handleMouseOver = (i)=>{
    var x = document.getElementsByClassName("square-hover");
    x[i].style.visibility = 'visible';

}

const handleMouseOut = (i)=>{
    var x = document.getElementsByClassName("square-hover");
    x[i].style.visibility = 'hidden';
}
    const renderSquare = (i) => {
        return (
          <Square
            value={boardState.squares[i]}
            afterClickedValue = {boardState.xIsNext ? 'X' : 'O'}
            onClick={() => {
                if(!boardState.squares[i]){
                    handleClick(i)
                    handleMouseOut(i)}}}   

            onMouseOver={()=> {
                if(!boardState.squares[i]){
                    handleMouseOver(i)}}}

            onmouseOut = {()=> {  
                    handleMouseOut(i)}}
          />
        );
      }

    return (
        <div className="board">
        <div className="status">{status}</div> 
        <div className="board-container">  
        
          {renderSquare(0)}
          <div className='line'></div>
          {renderSquare(1)}
          <div className='line'></div>
          {renderSquare(2)}

          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          
          {renderSquare(3)}
          <div className='line'></div>
          {renderSquare(4)}
          <div className='line'></div>
          {renderSquare(5)}

          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>

          {renderSquare(6)}
          <div className='line'></div>
          {renderSquare(7)}
          <div className='line'></div>
          {renderSquare(8)}  
        </div>
        </div>
      
    );
}
 
export default Board;