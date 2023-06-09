import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = React.forwardRef(
  ({ todo, deleteTodo, updateTodo, ...props }, ref) => {
    const { id, title, completed } = todo;

    return (
      <article
        {...props}
        ref={ref}
        className=" flex items-center gap-4 border-b border-b-gray-200 dark:bg-gray-800 "
      >
        <button
          className={`h-5 w-5 flex-none rounded-full border-2 ${
            completed
              ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "inline-block"
          }`}
          onClick={() => updateTodo(id)}
        >
          {completed && <IconCheck />}
        </button>

        <p
          className={`grow text-gray-600 dark:text-gray-300 ${
            completed && "line-through"
          }`}
        >
          {title}
        </p>
        <button className="flex-none" onClick={() => deleteTodo(id)}>
          <IconCross />
        </button>
      </article>
    );
  }
);

export default TodoItem;
