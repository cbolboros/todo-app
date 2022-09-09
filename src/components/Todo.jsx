import React from "react";
import { motion } from "framer-motion";

export default function Todo({ todo, completeTodo, removeTodo }) {
  const checked = todo.isComplete;
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        opacity: { duration: 0.1 },
        height: { duration: 0.4 },
      }}
    >
      <div className="todo-row pt-3 pb-3">
        <div className="flex items-center group">
          <div className="flex-1">
            <input
              id={todo.id}
              type="checkbox"
              defaultChecked={checked}
              onClick={() => completeTodo(todo.id)}
              className="todo-checkbox w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={todo.id}
              className={`${todo.isComplete ? "line-through" : ""} ml-4 text-xl font-medium text-gray-900 dark:text-gray-300 select-none leading-normal`}
            >
              {todo.text}
            </label>
          </div>
          <button className="transition ease-in opacity-0 group-hover:opacity-100 text-4xl leading-4 dark:text-gray-300" onClick={() => removeTodo(todo.id)}>
            &times;
          </button>
        </div>
      </div>
    </motion.div>
  );
}
