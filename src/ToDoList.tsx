import React, { useState } from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [currentFilter, setCurrentFilter] = useState<string>("all");
  const filters = ["All", "Active", "Completed"];

  const generateUniqueId = (): string => {
    return Math.random().toString(36).substring(7);
  };

  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === "Completed") {
      return todo.completed;
    } else if (currentFilter === "Active") {
      return !todo.completed;
    }
    return true;
  });

   const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { title: newTodo, completed: false, id: generateUniqueId() },
      ]);
      setNewTodo("");
    }
  };
  
   const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
   const handleToggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };


  return (
    <div className="container">
      <p style={{ color: "grey" }}>todos</p>
      <div>
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          placeholder="What's need to be done?"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <ul>
        {filteredTodos.map((todo, index: number) => (
          <div className="todo">
            <li key={index + 3}>
            <div className="round">
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(index)}
              />
              <label
              htmlFor="checkbox"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#ccc" : "black",
                }}
              >
                {todo.title + " "}
              </label>
              </div>
              {/* <button onClick={() => handleDeleteTodo(index)}>X</button> */}
            </li>
          </div>
        ))}
      </ul>
      <div className="info">
        <p>
          {todos.length > 0 ? (
            `${todos.filter((todo) => !todo.completed).length} left`
          ) : (
            <p>Add tasks</p>
          )}
        </p>
        <div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={filter === currentFilter ? "active" : ""}
            >
              {filter}
            </button>
          ))}
        </div>
        {todos.length === 0 ? (
          <p>Clear completed</p>
        ) : (
          <button onClick={() => setTodos([])}>Clear</button>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
//извините, не особо понял как сделать круглый чекбокс)