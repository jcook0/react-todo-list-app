import React, {useState, useEffect, useRef} from 'react';
import Todos from './Todos'
import { uuid } from 'uuidv4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  const date = new Date();

  const [todos, setTodos] = useState([]);
  const textbox = useRef(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  }, [todos]);


  function toggleTask(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(t => t.Id === id);
    todo.Completed = !todo.Completed;
    setTodos(newTodos);
  }

  function addTask() {
      let taskName = textbox.current.value;

      if (taskName == '') return;

      let dateStr = date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();
      let id = uuid();
      setTodos(prev => [{Id: id, Name: taskName, Date: dateStr, Completed: false}, ...todos] );
  }

  function removeDoneTasks() {
    setTodos(prev => {
      return prev.filter(todo => todo.Completed == false )
    });
  }

  return (
    <>
      <Todos todos = {todos} toggleTasks = {toggleTask} />
      <hr></hr>
      <input ref={textbox} type="text" placeholder="Task Name"></input>
      <button onClick={addTask}>Add Task</button>
      <button onClick={removeDoneTasks}>Remove Completed Tasks</button>
      <p>Completed Tasks: {todos.filter(todo => todo.Completed == true).length}</p>
    </>
  )
}

export default App;
