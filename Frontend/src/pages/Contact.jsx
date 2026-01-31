import React,{useState} from 'react'
import Service from './Service';
const Contact = (props) => {
  const[name,setName]=useState("Pilli Revathi");
  const toggleName=()=>
  {
    setName(name==="Pilli Revathi"?"revathi":"Pilli Revathi");
  }
  return (
    <div>
      <h1>Name:{name}</h1>
      <button onClick={toggleName}>Toggle</button>
      <Service name={props.name}/>
    </div>
  )
}

export default Contact