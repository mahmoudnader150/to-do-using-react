import { NewTodoForm } from "./NewTodoForm";
import "./styles.css"
import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos,setTodos] = useState(() => {
    const localValue = localStorage.getItem("TODOS");
    if(localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  },[todos]); // run this function whenever the inside the array changes

  function addTodo(title){
    setTodos((currentTodos)=>{
        return [...currentTodos, {id: crypto.randomUUID(),
       title: title, 
       completed: false},
      ] 
    });
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
  <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Your Tasks </h1>
    <br />
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  );
} 