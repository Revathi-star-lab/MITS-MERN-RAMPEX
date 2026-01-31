import React,{useState} from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const handleDecrement=()=>{
      setCount(count-1);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Counter