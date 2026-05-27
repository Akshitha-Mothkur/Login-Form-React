import React from "react";
import { useEffect } from "react";

function Demo(){

    useEffect(()=>{
        console.log("Hello")
    },[]);

    return(
        <h1>Demo Component</h1>
    )
}

export default Demo