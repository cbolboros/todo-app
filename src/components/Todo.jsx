import React from "react";
import { motion } from "framer-motion";

export default function Todo({ todo, completeTodo, removeTodo, onAnimationComplete }) {
  const checked = todo.isComplete;

  return (
    <motion.div
      onAnimationComplete={onAnimationComplete}
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
              className="todo-checkbox w-4 h-4 accent-gray-200 rounded border-gray-300 focus:ring-gray-300   dark:focus:ring-gray-300 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-400 dark:border-gray-400"
            />
            <label
              htmlFor={todo.id}
              className={`${
                todo.isComplete ? "line-through dark:text-gray-200 text-gray-200" : "text-black"
              } ml-4 text-xl font-medium select-none leading-normal`}
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
