import React from 'react'
import { MdOutlineDeleteSweep } from "react-icons/md";

function DeleteIcon(props) {
  return (
    <span className={`Icon Icon-delete ${props.completed && "Icon-check--delete"}`} onClick={props.onComplete}>

    <MdOutlineDeleteSweep
        type='delete'
        color='gray red red'
    />
    </span>
    )
}

export default DeleteIcon