import React from 'react'

function Note({index, title, delNote, changeCurrent}) {
  return (
   
    <div>
        <h3>{title}</h3>
        <button  onClick={()=>delNote(index)}>Delete</button>
        <button onClick={()=> changeCurrent(index)}>Edit</button>
        <hr />
    </div>
    
  )
}

export default Note