import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import TodoList from './Todolist';
import TodoForm from './TodoForm';
//git test
function App() {  
  const [todos,setTodos] = useState([]);

  const AddTodoToList = (newTodo) =>{    
    setTodos([...todos,newTodo]);
  }
  const enterData =  async () =>{
    let res= await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=3");
    setTodos(res.data);
  }

  useEffect(() =>{
    enterData()
  },[]);

  const handleDelete = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
    <div className="App">
      <p className='title'>To Do List</p>
      <TodoForm onSubmit={AddTodoToList} />      
      <TodoList todos={todos} deleteTodo={handleDelete}  />
    </div>
    </>
  );
}

export default App;
