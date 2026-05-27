import React from "react";
//import './Counter.css'
import { useState ,useEffect} from "react";

function Counter(){
    //var count=10;


    const [count,setCount] =useState(10);
    useEffect(()=>
        {
            console.log("Counter updated")
        },[count])
    function increment(){
            setCount(count+1)
            
    }
    function decrement(){
         setCount(count-1)
    }
    return(
<div className="counter">
    <button onClick={increment} >+</button>
        <h1>{count} </h1>
    <button onClick={decrement}>-</button>
    {      //conditional rendering
        // count>10 && <h2>Very good count</h2> 

        count>=10? <h2>Good</h2> : <h2>poor</h2>
    }
</div>

    );
}

export default Counter