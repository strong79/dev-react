import { useState } from 'react';

const TodoForm = (props) =>{
    const [todo,setTodo] = useState("");
    
    const handleNewTodoSubmit = (event) =>{
      event.preventDefault();
      props.onSubmit(
        {
          id:new Date().getTime(), 
          title:todo,
          completed:false
        });
      setTodo("");
    }
    
    return (
      <form >
        <input className="listNameInput" value={todo} onChange={(event)=>setTodo(event.target.value)} type="text" placeholder='Enter a task' required></input><br></br>        
        <button className='addBtn' onClick={handleNewTodoSubmit}>add todo</button>
      </form>
    );
  }

export default TodoForm;