import React, { useEffect } from "react";

export default function Filters({ todos, setFilteredTodos, activeFilter, setActiveFilter }) {
  useEffect(() => {
    if (activeFilter === 0) {
      setFilteredTodos(todos);
    }
    if (activeFilter === 1) {
      setFilteredTodos(todos.filter((todo) => !todo.isComplete));
    }
    if (activeFilter === 2) {
      setFilteredTodos(todos.filter((todo) => todo.isComplete));
    }
  }, [activeFilter, todos, setFilteredTodos]);
  return (
    <div className="flex gap-4">
      <button
        className={`text-gray-400 hover:text-blue-400 transition duration-300 ${activeFilter === 0 ? "text-blue-500 font-bold" : ""}`}
        onClick={() => {
          setActiveFilter(0);
        }}
      >
        All
      </button>
      <button
        className={`text-gray-400 hover:text-blue-400 transition duration-300 ${activeFilter === 1 ? "text-blue-500 font-bold" : ""}`}
        onClick={() => {
          setActiveFilter(1);
        }}
      >
        Incomplete
      </button>
      <button
        className={`text-gray-400 hover:text-blue-400 transition duration-300 ${activeFilter === 2 ? "text-blue-500 font-bold" : ""}`}
        onClick={() => {
          setActiveFilter(2);
        }}
      >
        Complete
      </button>
    </div>
  );
}
