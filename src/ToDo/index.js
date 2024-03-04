import React from "react"
import './ToDo.css'
import CompleteIcon from '../Assets/CompleteIcon'
import DeleteIcon from "../Assets/DeleteIcon"

function ToDo(props){
    return (
      <li className="Partido">
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>
        <CompleteIcon/>
        </span>
        <p className={`${props.completed && "Partido-p--complete"}`}>{props.text}</p>
        <span className={`Icon Icon-delete`}onClick={props.onDelete}><DeleteIcon/></span>        

     </li>
    )
  }
export {ToDo}  