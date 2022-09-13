import React, { useEffect, useRef, useState } from "react";
import Filters from "./Filters";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { AnimatePresence, motion } from "framer-motion";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  const scrollableDiv = useRef(null);

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

    setActiveFilter(0);
    setTodos(newTodos);
    setFilteredTodos(newTodos);
    if (scrollableDiv.current) {
      scrollableDiv.current.scrollTop = 0;
    }
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

  const onAnimationComplete = () => {
    if (scrollableDiv.current) {
      setScrollable(scrollableDiv.current.scrollHeight > scrollableDiv.current.clientHeight);
    }
  };

  const onScroll = (e) => {
    if (e.target.scrollTop === e.target.scrollTopMax) {
      setScrollable(false);
    } else if (scrollableDiv.current.scrollHeight > scrollableDiv.current.clientHeight) setScrollable(true);
  };

  const incompleteTodos = todos.filter((todo) => !todo.isComplete);
  const completedTodos = todos.filter((todo) => todo.isComplete);

  const todoLabel = incompleteTodos.length && (incompleteTodos.length === 1 ? "todo" : "todos");

  return (
    <div className="flex items-center flex-col pt-10">
      <TodoForm onSubmit={addTodo} />
      <div className="bg-white w-[50%] rounded-2xl mt-10 shadow-md overflow-hidden p-6">
        {todos.length ? (
          <>
            <div
              className="overflow-auto max-h-[60vh] scroll-container scroll-smooth"
              ref={scrollableDiv}
              onScroll={onScroll}
              style={{
                boxShadow: scrollable ? "inset 0 -20px 20px -24px rgb(0 0 0 / 0.16)" : "none",
              }}
            >
              <AnimatePresence>
                {filteredTodos.map((todo, index) => (
                  <Todo key={todo.id} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} onAnimationComplete={onAnimationComplete} />
                ))}
              </AnimatePresence>
            </div>
            <div className={`${filteredTodos.length ? "pt-6" : ""} flex justify-between`}>
              <div className="text-gray-400">{incompleteTodos.length ? `${incompleteTodos.length} ${todoLabel} left.` : "All todos completed !"}</div>
              <Filters todos={todos} setFilteredTodos={setFilteredTodos} setActiveFilter={setActiveFilter} activeFilter={activeFilter} />
              <button
                className={`text-gray-400 hover:text-gray-800 transition duration-300 ${completedTodos.length < 1 ? "invisible" : ""}`}
                onClick={() => removeCompletedTodos()}
              >
                Clear completed.
              </button>
            </div>
          </>
        ) : (
          <AnimatePresence>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className="flex justify-center text-gray-400">
              No todos created.
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
