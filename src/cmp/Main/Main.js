import React from 'react'
import List from '../List/List'

const Main = (prop) => {
  console.log("prop in main",prop.todoList);
  return (
    <div>
      To Do's
     {
      // console.log(prop.todoList);
      prop.todoList.map((item,index)=>{
        return (
          <>
          <List item={item} key={index}></List>
          </>
          
          
        ) 
        console.log(item);
      })
     }
    </div>
  )
}

export default Main
