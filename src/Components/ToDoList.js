import React from 'react'
import ToDo from './ToDo'

export default function ToDoList(props) {
    return (
        // props.todos.map((todo) => {
        //     return <ToDo key={todo.id} toggleTodo={props.toggleTodo} todo = {todo}/>
        // })
        props.todos.map((todo) => {
            return (
                <div className="container">
                    <ToDo key={todo.id} toggleTodo={props.toggleTodo} todo={todo} />
                </div>
            )
        })
    )
}
