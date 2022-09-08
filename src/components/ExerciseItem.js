import React from 'react'
function exerciseItem({image,name}) {
  return (
    <div className='exerciseItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
    </div>
  )
}

export default exerciseItem
