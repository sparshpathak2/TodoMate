import React from 'react'



export default function ToDo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div className='todoContainer'>
            <label className='todoLabel'>
                <div className="selectTodo">
                    <input className='todoInput' type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                </div>
                {todo.name.length>"95"?todo.name.slice(0, 96) + '...' : todo.name}
            </label>
        </div>
    )
}
