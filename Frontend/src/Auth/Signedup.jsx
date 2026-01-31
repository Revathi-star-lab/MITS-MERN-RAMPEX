import React ,{useState}from 'react'
const Signedup = () => {
    const[userData,setUserData]=useState({
         name:"",   
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
            <label>Name:</label>
            <input type="text" 
            value={userData.name} 
            name="name"
             onChange={handleChange}
            placeholder='Enter the name'/>
            <br/><br/>
            <label>Email:</label>
            <input type="email" 
            value={userData.email} 
            name="email"
             onChange={handleChange}
            placeholder='Enter the email'/>
            <br/><br/>
            <label>Password:</label>
            <input type="password" 
            name="password"
            value={userData.password} 
            onChange={handleChange}
             placeholder='type password'/>
            <br /><br />
            <button type='submit'>login</button>
        </form>
      
    </div>
  )
}

export default Signedup