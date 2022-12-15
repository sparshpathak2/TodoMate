import React from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ToDo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <Box className='todoContainer1' sx={{
            borderRadius: 1.5,
            boxShadow: 1,
            '&:hover': {
                boxShadow: 2,
            }

        }}>
            {/* <div className='todoContainer'> */}
            <label className='todoLabel'>
                <div className="selectTodo">
                    {/* <input className='todoInput' type="checkbox" checked={todo.complete} onChange={handleTodoClick} /> */}
                    <Checkbox checked={todo.complete} onChange={handleTodoClick} {...label} />
                </div>
                <div className="todoName">
                {todo.name.length > "95" ? todo.name.slice(0, 96) + '...' : todo.name}
                </div>
            </label>
            {/* </div> */}
        </Box>
    )
}
