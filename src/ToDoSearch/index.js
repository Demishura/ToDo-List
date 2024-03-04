import React from 'react'
import './ToDoSearch.css'
function ToDoSearch({searchValue,setSearchValue}) {
  return (
      <input 
      className='ToDoSearch' 
      placeholder='Buscar Tarea'
      value={searchValue}
      onChange={(event)=>{ 
        setSearchValue(event.target.value);
        console.log(searchValue)
      }
    }
      />
  
  )
  
}

export default ToDoSearch