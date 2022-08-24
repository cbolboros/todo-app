import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { motion } from "framer-motion";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState(0);

  useEffect(() => {
    if (!todos.length) {
      setActiveFilter(0);
    }
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    setFilteredTodos(newTodos);

    console.log(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    setFilteredTodos(removeArr);
  };

  const removeCompletedTodos = () => {
    const incompleteTodos = [...todos].filter((todo) => !todo.isComplete);
    setTodos(incompleteTodos);
    setFilteredTodos(incompleteTodos);
  };

  const incompleteTodos = todos.filter((todo) => !todo.isComplete);
  const completedTodos = todos.filter((todo) => todo.isComplete);

  const todoLabel = incompleteTodos.length && (incompleteTodos.length === 1 ? "todo" : "todos");

  return (
    <div className="flex items-center flex-col pt-10">
      <TodoForm onSubmit={addTodo} />
      <motion.div layout animate={{ borderRadius: "16px" }} className="bg-white w-[50%] rounded-2xl mt-10 shadow-md">
        {todos.length ? (
          <motion.div layout animate={{ height: "100%" }}>
            {filteredTodos.map((todo, index) => (
              <Todo key={todo.id} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
            ))}
            <motion.hr layout className="ml-6 mr-6" />
            <motion.div layout className="p-6 flex justify-between">
              <div className="text-gray-400">{incompleteTodos.length ? `${incompleteTodos.length} ${todoLabel} left.` : "All todos completed !"}</div>
              <Filters todos={todos} setFilteredTodos={setFilteredTodos} setActiveFilter={setActiveFilter} activeFilter={activeFilter} />
              <button
                className={`text-gray-400 hover:text-gray-800 transition duration-300 ${completedTodos.length < 1 ? "invisible" : ""}`}
                onClick={() => removeCompletedTodos()}
              >
                Clear completed.
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <div className="p-6 flex justify-center text-gray-400">No todos created.</div>
        )}
      </motion.div>
    </div>
  );
}
