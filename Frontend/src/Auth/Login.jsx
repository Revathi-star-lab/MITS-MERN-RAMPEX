import React, { useState } from 'react'

const Login = () => {
    const[userData,setUserData]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setUserData((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(userData);
 
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" 
            value={userData.email} 
            name="email"
             onChange={handleChange}
            placeholder='Enter the email'/>
            <label>Password:</label>
            <input type="password" 
            name="password"
            placeholder='type password' 
            value={userData.password} 
            onChange={handleChange}/>
            <button type='submit'>login</button>
        </form>
      
    </div>
  )
}

export default Login