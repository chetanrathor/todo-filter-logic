import React, { useState } from 'react'

const Search = () => {

const[searchValue,setSearchValue] = useState('')
let handeInputChange = (e)=>{
setSearchValue(e.target.value)
}
  return (
    <div>
      <input type="text" placeholder='Search' value={searchValue} 
      name="" onChange={(e)=>{handeInputChange(e)}} id="" />
    </div>
  )
}

export default Search
