import React from 'react'
import { TodoItem } from './TodoItem.js'


export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3 " id="your_todo">Your Todos List</h3>
            {props.todos.length === 0 ? <h1 className="text-center Notask">No Todo's Task to Show!</h1> : props.todos.map((todo) => { return (<TodoItem todo={todo} onDelete={props.onDelete} />) })}
        </div>

    )
}
