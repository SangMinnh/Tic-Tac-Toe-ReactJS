import './style.css'
import React, { useState } from 'react';

const Square = (props) => {
    return ( 
         <button className="square" 
         onClick={()=>{
                props.onClick();     
             }}
        onMouseOver={()=>{  
                    props.onMouseOver();
             }}
        onMouseOut={()=>{
                    props.onmouseOut();
             }}
           >
             {props.value} 
             <div className="square-hover">
             {props.afterClickedValue}  
             </div>
         </button>
  
     );
}
 
export default Square;