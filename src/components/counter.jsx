import React from 'react';


  export default function Counter() {

  //Destructuring
  const [counter,setCounter] = React.useState(0) 

  const handelIncrement = (value)=>{
    if (value+counter< 0) {
      return;
  }
    setCounter(counter + value)
} 
  
     const handelMult =(value)=>{
    setCounter(counter*value)
  }


  return (
    <>
    <h1 >Counter</h1>
    <h2>{counter}</h2>
    <button onClick={()=>handelIncrement(1)}>Add</button>
    <button onClick={()=> handelIncrement(-1)} >Reduce</button>
    <button onClick={()=>handelMult(2)} >Double</button>
    </>
  );
}
