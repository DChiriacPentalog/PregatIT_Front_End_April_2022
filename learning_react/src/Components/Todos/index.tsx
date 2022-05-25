import React, { useState } from "react";

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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add todo</button>
      </form>


      {
        todos.map((todo) =>
        <div key={todo.id}>

          <div>{todo.text}</div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <input type="checkbox" onChange={() => toggleTodo(todo.id)}/>

        </div>)}
    </div>
  );
}

export default Todos;
