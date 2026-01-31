import React ,{useEffect,useState}from 'react'

const UseEffectApi = () => {
  const[users,setUsers]=useState([]);
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
    },[]) 
  return (
    <div>
     <ul>
      {users.map((user,id)=>
      <li key={id}>
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>
        <p>Latitude:{user.address.geo.lat}</p>
       
      </li>
      )}</ul> 
    </div>
  )
}

export default UseEffectApi