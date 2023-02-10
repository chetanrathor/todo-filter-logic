import React, { useState,useEffect } from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Main from '../Main/Main'

const Ascreen = () => {
    const [theme,setTheme] = useState()
    const[toDo,setTodo] = useState()
    const[todoList,settodoList] = useState(()=>{
        let savedItems = localStorage.getItem('todos')
        if(savedItems){
            return JSON.parse(savedItems)
        }
        else{
            return []
        }
    })
 
    let getTheme = (data)=>{
        // console.log(data);
        setTheme(data)
        // console.log(style);
    }

    let getTodo = (data)=>{
        // console.log("To do come from create",data);
        setTodo(data)
        // settodoList([...todoList,{toDo}])
        settodoList([...todoList,data])
        // if ((toDo!={})) {
        // }
    }

    useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todoList))
    },[todoList])
   
    let returnTheme  = ()=>{
        return theme;
    }
    // console.log(returnTheme);
  return (
    <div style={(theme=='dark'?{backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'})}>
      <Header getTheme={getTheme}/>
      <Banner getTodo={getTodo}></Banner>
      <Main todoList={todoList}></Main>
    </div>
  )
}

export default Ascreen
