import React, { useState } from 'react'

const Theme = (prop) => {
    const [theme,setTheme] = useState('dark')

    // log the prop
    // console.log(prop);
    let handelToggle = (e) =>{
        e.preventDefault();
        (theme=='light'?setTheme('dark'):setTheme('light'))
        prop.getTheme(theme);
    }

  return (
    <div>
      <button onClick={(e)=>{handelToggle(e)}}>Change To {theme}</button>
    </div>
  )
}

export default Theme
