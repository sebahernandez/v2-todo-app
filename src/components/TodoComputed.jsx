import React from "react";

const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4 ">
      <span className="text-gray-400">{computedItemsLeft} Items Left</span>
      <span className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </span>
    </section>
  );
};

export default TodoComputed;
