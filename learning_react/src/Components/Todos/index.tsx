import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todos.css";

function Todos() {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");
  const [todoEdit, setTodoEdit] = useState(null);
  const [todoEditText, setTodoEditText] = useState("");



  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem('todos') || "")
  //   if (todos) {
  //     setTodos(todos);
  //    }
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const updateTodos = () => {

    return setTodos([...todos]);
  }




  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //to avoid page refresh
    interface Todo {
      id: string
      text: string | null;
      completed: boolean
    }

    const newTodo: Todo = {
      id: uuidv4(),
      text: todo,
      completed: false,
    };
    if (todo.trim().length === 0) {
      alert("Please enter a todo");
      return;
    } else if (todo.trim().length === 1) {
      alert("Please enter a valid todo");
      return;
    }
    setTodos([...todos, newTodo]); //setTodos([...todos]concat newTodo)
    setTodo("");
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  function editTodo(id: any){
    const updatedTodos = [...todos].map((todo) => {

      if(todo.id === id){
        todo.text = todoEditText
      }
      return todo;
    })
    setTodos(updatedTodos);
    setTodoEdit(null);
    setTodoEditText("");
  }
  return (
    <div className="flex flex-column">
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          autoFocus
        />
        <button className="button add-button" type="submit">
          Add todo
        </button>
      </form>

      <div className="flex  flex-column">
      {todos.map((todo) => (
        <div className="todos flex flex-row" key={todo.id}>
          {todoEdit === todo.id ? (
            <input
            className="todo-input"
              type="text"
              onChange={(e) => setTodoEditText(e.target.value)}
              value={todoEditText}
            />
          ) : (
            <div>{todo.text}</div>
          )}


          <button
            className="button delete-button"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>


          {todoEdit === todo.id ? ( <button className="button" onClick={() => editTodo(todo.id)}>Submit</button>) : ( <button className="button" onClick={() => setTodoEdit(todo.id)}>Edit</button>)}
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={() => toggleTodo(todo.id)}
            checked={todo.completed}
          />

        </div>
      ))}
    </div>
    </div>
  );
}

export default Todos;
