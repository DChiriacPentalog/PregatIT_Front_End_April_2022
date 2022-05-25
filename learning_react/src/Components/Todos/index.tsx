import React, { useState } from "react";
import "./Todos.css"
function Todos() {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //to avoid page refresh
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    if (todo.trim().length === 0) {
        alert("Please enter a todo");
        return;
      }
      else if( todo.trim().length === 1){
        alert("Please enter a valid todo");
        return;
      }
    setTodos([...todos, newTodo]); //setTodos([...todos]concat newTodo)
    setTodo("");
  };


  const deleteTodo = (id: string) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !==  id)
    setTodos(updatedTodos);
  }

  const toggleTodo = (id: string) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        className="todo-input"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          autoFocus
        />
        <button className="button add-button"  type="submit">Add todo</button>
      </form>


      {
        todos.map((todo) =>
        <div key={todo.id}>

          <div>{todo.text}</div>
          <button className="button delete-button"onClick={() => deleteTodo(todo.id)}>Delete</button>
          <input type="checkbox" onChange={() => toggleTodo(todo.id)}/>

        </div>)}
    </div>
  );
}

export default Todos;
