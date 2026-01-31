import React,{useState,useEffect,useRef}from 'react'

const UseRef = () => {
  const[count,setCount]=useState(0);
  const value=useRef(0);//{current:0}
  const inputRef=useRef();
  useEffect(()=>
  {
    setTimeout(()=>{
      setCount(count+1)
    },2000)
    value.current=value.current+1;
  
  },[count])
  useEffect(()=>{
    value.current=value.current+1;
  })
  const handleClick=()=>
  {
    inputRef.current.focus();
    inputRef.current.style.color="blue"
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <p>{`${value.current} times compent rendered`}</p>
      <input type="text" ref={inputRef}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default UseRef