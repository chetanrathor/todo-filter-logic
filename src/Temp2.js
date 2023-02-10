import React, { useEffect, useState } from 'react'

const Temp2 = () => {
    const [toDos,setTodos] = useState(()=>{
        let savedItems = localStorage.getItem('todos')
        if(savedItems){
            return JSON.parse(savedItems)
        }
        else{
            return [];
        }
    })

    const[toDo,setTodo] = useState({
        title:'',
        status:'',
        priority:'',
        date:'',
    })

    useEffect(()=>{
        setTodos(JSON.stringify(localStorage.getItem('todos')))
    },[toDo])

let handelSubmit = (e) =>{
setTodos([...toDos,toDo])
localStorage.setItem("todos",JSON.stringify(toDos))

}

  return (
    <div>
     <form onSubmit={(e)=>{e.preventDefault();handelSubmit()}}>
        
        <input type="text" placeholder='title' name='title' value={toDo.title} onChange={(e)=>{setTodo({title:e.target.value})}}></input>
        <br /><br />
        <input type="text" placeholder='priority' name='priority' value={toDo.priority} onChange={(e)=>{setTodo({priority:e.target.value})}}></input>
        <br /><br />
        <input type="text" placeholder='status' name='status' value={toDo.status} onChange={(e)=>{setTodo({status:e.target.value})}}></input>
        <br /><br />
        <input type="date" placeholder='date' onChange={(e)=>{setTodo({date:e.target.value})}}></input>
        <br /><br />
        <input type="submit"></input>
     </form>
    </div>
  )
}

export default Temp2
