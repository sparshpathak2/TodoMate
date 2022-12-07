<Container maxWidth="sm" alignItems='center'>
        <Box sx={{
          borderRadius: '5px',
          borderColor: 'yellow',
          bgcolor: 'yellow',
          padding: '30px',
          margin: '20px',
          alignItems: 'center',
          // '&:hover': {
          //   borderRadius: '15px',
          //   borderColor: 'primary.main',
          // backgroundColor: 'primary.main',
          // opacity: [0.9, 0.8, 0.7],
          // },
        }}>
          {/* <Grid> */}
          {/* <Grid item> */}
          <Stack direction="row" spacing={2}>
            <TextField
              // ref={todoNameRef}
              // onChange={handleOnChange}
              onChange={(e)=> setTodos(e.target.value)}
              // className="textfield-css"
              id="filled-multiline-static"
              label="Jot down..."
              multiline
              rows={4}
              sx={{
                width: '100%',
                borderWidth: '5px',
                borderRadius: '5px',
                boxShadow: '5px 5px 5px #888888',
                // alignItems: 'center',
              }}
            // defaultValue="Default Value"
            // variant="filled"
            />
            {/* <input className="input" ref={todoNameRef} /> */}
          </Stack>
          <Stack direction='row' spacing={2} py={2} sx={{
            // alignItems:'center',
            justifyContent: 'center',
          }}>
            <Button variant="contained" onClick={handleAddTodo}>To Do</Button>
            <Button variant="outlined" onClick={handleClearTodos}>Clear Complete</Button>
          </Stack>
          <div>{todos.filter(todo => !todo.complete).length} left To-Do</div>
          <ToDoList todos={todos} toggleTodo={toggleTodo} />
          {/* </Grid> */}
          {/* </Grid> */}
        </Box>
      </Container>