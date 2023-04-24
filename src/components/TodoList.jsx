import React from "react";
import TodoItem from "./TodoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className="mt-8 overflow-hidden rounded-t-md bg-white dark:bg-gray-800 [&>article]:p-4"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvided) => (
                <TodoItem
                  todo={todo}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}

          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
