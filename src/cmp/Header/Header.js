import React, { useState } from 'react'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import './Header.css'
import Theme from '../Theme/Theme'

const Header = (prop) => {
  const[filterComponent,setFilterComponent] = useState(false)
let handelFilterClick = ()=>{
setFilterComponent(!filterComponent)
}

//log the prop
// console.log(prop.getTheme);

  return (
    <div>
      <div className="headerContainer">
        <ul >
          <li>My ToDo Application</li>
          <li><Search ></Search></li>
          <li><button onClick={()=>{handelFilterClick()}}>Filter</button></li>
          <li>Create To do list with us</li>
          <li><Theme getTheme={prop.getTheme}></Theme></li>
          <li><button>Log Out</button></li>
        </ul>
      </div>
      {(filterComponent === true ? <Filter></Filter>:null)}
    </div>
  )
}

export default Header
