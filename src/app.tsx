import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoHandler = (text: string) => {
    setTodos([{ id: Math.random().toString(), text: text }]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
