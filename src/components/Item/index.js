import React from "react"
import './index.css'

export default props => (
    <div className='item'>
        <div style={{ textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.toggleComplete}>{props.todo.text}</div>
        <button onClick={props.onDelete}>x</button>
    </div>
)