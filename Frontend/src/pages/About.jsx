import React from 'react'
import Contact from './Contact'
const About = ({dept,name,age}) => {
  return (
    <div>
      <p>Name:{name}</p>
      {/* <p>Name:{name}</p>
      <p>Dept:{dept}</p>
      <p>Age:{age}</p>
      <p>Dept:{dept}</p> */}
      <Contact name={name}/>
    </div>
  )
}

export default About