import React from "react";

export default function Filters({ todos, setTodos, filterType, setFilterType }) {
  return (
    <div className="flex gap-4">
      <button
        className={`text-gray-400 hover:text-gray-800 transition duration-300 ${filterType === "all" ? "text-gray-800" : ""}`}
        onClick={() => {
          setFilterType("all");
        }}
      >
        All
      </button>
      <button
        className={`text-gray-400 hover:text-gray-800 transition duration-300 ${filterType === "incomplete" ? "text-gray-800" : ""}`}
        onClick={() => {
          setFilterType("incomplete");
        }}
      >
        Incomplete
      </button>
      <button
        className={`text-gray-400 hover:text-gray-800 transition duration-300 ${filterType === "complete" ? "text-gray-800" : ""}`}
        onClick={() => {
          setFilterType("complete");
        }}
      >
        Complete
      </button>
    </div>
  );
}
