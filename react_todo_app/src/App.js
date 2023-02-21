import React, { useState } from "react";
import "./styles.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

/** App Component */
function App() {
  const [ todo, setTodo ] = useState("");
  const [todos, setTodos ] = useState([]);
  
  const handleButtonClick = () => {
    if(todo.length>0){
       const singleTodo =  todo;
       setTodos([...todos, singleTodo])
       setTodo("")
    }
  }

  const handleOnChange = (event) => {
    setTodo(event.target.value)
  }

  const handleResetBtn = () => {
    setTodos([])
  }

  const handleRemoveClick = (index) => {
    const newTodos = todos.filter((item, itemIndex) => itemIndex !== index)
    setTodos(newTodos)
  }


  return (
      <div className="main-box">
        <div className="combined-box">
          <div className="input-box">
            <Input handleOnChange={handleOnChange} todo={todo} />
          </div>
          <div className="button-box">
            <button type='button' onClick={handleButtonClick} disabled= {todo.length==0}>Add Todo</button>
            <button type="button" onClick={handleResetBtn} disabled= {todos.length==0}>Reset List</button>
          </div>
        </div>
        <div className="todo-list">
          <TodoList handleRemoveClick={handleRemoveClick} todos={todos} />
        </div>
      </div>
  );
}

export default App;
