import React, { useState } from 'react'
import './Crate.css'
const Create = (prop) => {
  const [toDo,setTodo] = useState({
    title:'',
    description:'',
  })
  // Handel Chnages in the inputs
  let hadelChange = (e) =>{
  
    setTodo((prevData)=>{
      return {
        ...prevData,[e.target.name]:e.target.value
      }
    })
  }

  // Handel submit action in the form
  let handelSubmit = ()=>{
    
    prop.getTodo(toDo)
    setTodo({
      title:'',
      description:'',
    })

  }
  return (

    <div>
      <form action=""  onSubmit={(e)=>{e.preventDefault();handelSubmit()}}>
        <input type="text" placeholder='title' required className={(toDo.title!=""?'form-valid':'form-invalid')} name='title' value={toDo.title} onChange={(e)=>{hadelChange(e)}} />
        <br />
        <br />
        <input type="text" placeholder='' required name='description' value={toDo.description} onChange={(e)=>{hadelChange(e)}} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Create
