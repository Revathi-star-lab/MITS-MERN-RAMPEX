import React, { useReducer } from 'react'//it is a alternate form for useState
const intialVal={count:0}
const reducer=(state,action)=>{
    switch(action.type){
        case "Increment":{
            return {count:state.count+1}
        }
        case "Decrement":{
            return {count:state.count-1}
        }
        case "Reset":
            {
                return intialVal
            }
        default:
        {
            return {count:state.count};
        }   
    }

}
const UseReducer = () => {
    const[state,dispatch]=useReducer(reducer,intialVal);//dispatch is a function
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset^_^</button>
    </div>
  )
}

export default UseReducer