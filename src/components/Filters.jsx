import React, { useEffect } from "react";
import { motion } from "framer-motion";

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
  }, [activeFilter]);
  return (
    <motion.div layout className="flex gap-4">
      <button
        className={`text-gray-400 hover:text-gray-800 transition duration-300 ${activeFilter === 0 ? "text-gray-800" : ""}`}
        onClick={() => {
          setActiveFilter(0);
        }}
      >
        All
      </button>
      <button
        className={`text-gray-400 hover:text-gray-800 transition duration-300 ${activeFilter === 1 ? "text-gray-800" : ""}`}
        onClick={() => {
          setActiveFilter(1);
        }}
      >
        Incomplete
      </button>
      <button
        className={`text-gray-400 hover:text-gray-800 transition duration-300 ${activeFilter === 2 ? "text-gray-800" : ""}`}
        onClick={() => {
          setActiveFilter(2);
        }}
      >
        Complete
      </button>
    </motion.div>
  );
}
