import React from 'react'

const NotFound = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"450px", flexDirection:"column", gap:"16px"}}>
      <h1 style={{fontSize:"80px"}}>404</h1>
      <h4>PAGE COULD NOT BE FOUND</h4>
      <a href='/' style={{textDecoration:"underline"}}>GO BACK HOME</a>
    </div>
  )
}

export default NotFound
