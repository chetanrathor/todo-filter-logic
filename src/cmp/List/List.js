import React from 'react'

const List = (prop) => {
  console.log(prop.item.title);
  return (
    <div>
     <span> {prop.item.title}</span> and <span>{prop.item.description}</span>
    </div>
  )
}

export default List
