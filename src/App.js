import ToDoList from "./Components/ToDoList";
import { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
// import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import './App.css'
import { border } from "@mui/system"
import TextField from '@mui/material/TextField'
import { brown } from "@mui/material/colors";

const LOCAL_STORAGE_KEY = 'todoApp.todos'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const mystyle = {
//   width: 100%,
//   font-size: 20px,
//   padding: 20px,
// }


function App() {

  // const [todos, setTodos] = useState([ {id : 1, name: 'todo 1', complete: false} ])
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    if (todos?.length) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    // const newTodos = todos
    const newTodos = [...todos]
    const newTodo = newTodos.find(newTodo => newTodo.id === id)
    newTodo.complete = !newTodo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '')
      return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleTag() {

  }

  // function handleOnChange(event) {
  //   console.log("add to do")
  //   setTodos(event.target.value)
  // }

  return (
    <>
      <Box sx={{
        // text-align: left,
        // background-color: antiquewhite,
        bgcolor: 'yellow',
        width: '50%',
        // height: '200px',
        p: '50px',
        m: '20px auto',
        borderRadius: 2,
        boxShadow: 2,
      }}>
        <div className="box-1">
          {/* <input id="input-2" type="text" /> */}
          <textarea ref={todoNameRef} className="todoTextarea" name="todoTextarea" id="textarea" cols="60" rows="5" placeholder="Jot down..."></textarea>
          {/* <Box className="buttons" sx={{
            display: 'flex',
            gap: 2,
            // flexDirection: 'row'
            // alignItems: 'flex-end',
            // alignContent: 'flex-end',
            justifyContent: 'flex-start'
          }}>
          </Box> */}
          <div className="buttons">
            <span className="btnTag">
              <Button onClick={handleTag}>Tag</Button>
            </span>
            <span className="btnAddtodo">
              <Button variant="contained" onClick={handleAddTodo} sx={{
                marginLeft: 1,
                marginRight: 2
              }}>TO DO</Button>
              <Button variant="outlined" onClick={handleClearTodos}>CLEAR COMPLETE</Button>
            </span>
          </div>
          {/* <button className="btn-primary" id="btnTodo" onClick={handleAddTodo}>TO DO</button> */}
          {/* <button className="btn-primary" id="btnClear" onClick={handleClearTodos}>CLEAR COMPLETE</button> */}
        </div>
      </Box>
      {/* <div className="todoInputContainer">

      </div> */}
      {/* <div className="todoListBox">
          
        </div> */}
      <div className="box-main">

        <div className="box-2">
          <br />
          <div className="todoNumber">{todos.filter(todo => !todo.complete).length} left</div>
          {/* <hr /> */}
          <div className="todoBox">
            <ToDoList className="todolist" todos={todos} toggleTodo={toggleTodo} />
          </div>
        </div>
      </div>


      {/* <div className="container2">
        <div className="item item-1">item-1</div>
        <div className="item item-2">item-2</div>
        <div className="item item-3">item-3</div>
      </div> */}


    </>
  )
}

export default App;
