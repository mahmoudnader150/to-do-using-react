import "./styles.css"
import { useState } from "react";

export default function App() {
  const [newItem , setNewItem] = useState("");
  const [todos,setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); //prevent from refreshing the page
    setTodos((currentTodos)=>{
        return [...currentTodos, {id: crypto.randomUUID(),
       title: newItem, 
       completed: false},
      ] 
    });
    setNewItem(""); //clear the input field after adding a new item
  }

  function deleteTodo(id) {
    // deletes the todo item with the given id
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  function toggleTodo(id, completed) {
    // sets completed status of the todo item
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  console.log(todos);

  return(
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item" />
    </div>
    <button className="btn">Add</button>
   
  </form>
  <h1 className="header">Your Tasks </h1>
  <br />
  <ul>
   {todos.length === 0 && "No tasks to complete"} 
   {todos.map(todo =>{
    return(
      <li key={todo.id} >
        <label>
          <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={e => toggleTodo(todo.id, e.target.checked)}
          />
          {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
      </li>
    )
   })}
     
  </ul>
  </>
  );
} 