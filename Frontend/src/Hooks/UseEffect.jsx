import React ,{useEffect, useState}from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    const[value,setValue]=useState(0);
    const handleIncrement=()=>
    {
      setCount((prev)=>prev+1)//here we can also give count
      setCount((prev)=>prev+1)
      setCount((prev)=>prev+1)
    }
    useEffect(()=>
    {
        console.log("useEffect Mounted");
    },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={(handleIncrement)}>inc</button>
      <h1>{value}</h1>
      <button onClick={()=>setValue(value+1)}>inc</button>
    </div>
  )
}

export default UseEffect