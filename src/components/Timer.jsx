import React from "react";
import "./Timer.css"
import { useState } from "react";
import { useEffect } from "react";

   function Timer(){

    const [second,setSeconds] = useState(0);
    const [min,setMin] = useState(0);
    var timer;
    useEffect(()=>{
      
        timer=setInterval(()=>{
            setSeconds(second+1);
            if(second===59){
                setMin(min);
                setSeconds(0)
            }
        },1000)
        return()=>clearInterval(timer)
    });

    const restart=()=>{

        setSeconds(0);
        setMin(0)
    }
    const stop=()=>{
        clearInterval(timer)
    }
    return (
       
        <div className="timer">
         
         <div className="container">
         <div className="timer-container">
             <h1>Timer</h1>
             <h1>{min<10 ? "0"+min:min}:{second<10 ? "0" + second:second}</h1>
             <button className="restart" onClick={restart}>Restart</button>
             <button className="stop" onClick={stop}>Stop</button>
         </div>

         </div>
        </div>
    )
   }

   export {Timer}