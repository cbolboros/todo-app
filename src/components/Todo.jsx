import React from "react";
import { MdDelete } from "react-icons/md";

export default function Todo({ todo, completeTodo, removeTodo }) {
  const checked = todo.isComplete;
  return (
    <div className="first:p-6 pl-6 pb-6 pr-6">
      <div className={todo.isComplete ? "todo-row line-through" : "todo-row"}>
        <div key={todo.id} className="flex items-center ">
          <div className="flex-1">
            <input
              id={todo.id}
              type="checkbox"
              checked={checked}
              onClick={() => completeTodo(todo.id)}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={todo.id} className="ml-4 text-2xl font-medium text-gray-900 dark:text-gray-300 select-none">
              {todo.text}
            </label>
          </div>
          <button onClick={() => removeTodo(todo.id)}>
            <MdDelete className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
