import React, { useState } from 'react'

const Tmp = () => {
    const [value,setValue] = useState('')
    const [valuelist,setValuelist] = useState([])
    let submit = () =>{
       let list = JSON.parse(localStorage.getItem('todo'))
       list.push(value)
    localStorage.setItem('todo',JSON.stringify(list))
    // console.log();
       setValue('')
    }
  return (
    
    <div>
      <input type="text" onChange={(e)=>{setValue(e.target.value)}} value={value} />
      <button onClick={submit}>Submit </button>
    </div>
  )
}

export default Tmp
