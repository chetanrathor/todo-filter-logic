import React, { useState } from 'react'
import Create from '../Create/Create'

const Banner = (prop) => {
  const [createTodoComponent,setCreateToDoComponent] = useState(false)
  let handelCreateTodoButton = ()=>{
    setCreateToDoComponent(!createTodoComponent)
  }
  return (
    <div>
      <div>
        <h1>
          Welcome to the to do list
        </h1>
        <h1>
          Create To With Us
        </h1>
      </div>
      <div>
        <button onClick={()=>{handelCreateTodoButton()}}>Create To do</button>
      </div>
      {(createTodoComponent==true?<Create getTodo={prop.getTodo}></Create>:null)}
    </div>
  )
}

export default Banner
