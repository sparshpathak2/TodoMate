import React from 'react'



export default function ToDo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div className='todoContainer'>
            <label className='todoLabel'>
                <input className='todoInput' type="checkbox" checked= {todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
        </div>
    )
}
