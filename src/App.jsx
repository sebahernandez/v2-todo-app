import React, { useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to the gym",
    completed: true,
  },
  {
    id: 2,
    title: "Complete online js bluuweb course",
    completed: false,
  },

  {
    id: 3,
    title: "10 minute meditation",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />

      <main className="container mx-auto mt-8  px-4">
        <TodoCreate createTodo={createTodo} />
        {/* todolist (todoitem) todoupdate & tododelete */}
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />

        {/* TodoComputed */}
        <TodoComputed />

        {/* todoFilter */}
        <TodoFilter />
      </main>

      <section className="mt-8 text-center">
        Drag and drop to reorder list
      </section>
    </div>
  );
};

export default App;
