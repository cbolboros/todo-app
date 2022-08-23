import { useState } from "react";
import { HiOutlinePaperAirplane, HiPaperAirplane } from "react-icons/hi";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 5000),
      text: input,
      isComplete: false,
    });

    setInput("");
  };

  const onMouseEnter = (e) => {
    setIsHovered(true);
  };

  const onMouseLeave = (e) => {
    setIsHovered(false);
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="w-[50%] h-auto relative flex">
      <form className="todo-form w-full" onSubmit={onSubmit} autoComplete="off">
        <div className="flex relative bg-white rounded-2xl">
          <input
            onChange={onInputChange}
            className="w-full h-full p-6 pr-0 text-xl rounded-l-2xl focus:outline-none"
            name="text"
            type="text"
            value={input}
            placeholder="Add a todo"
          ></input>
          <button className="todo-button p-6" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {!isHovered ? <HiOutlinePaperAirplane className="rotate-90 w-6 h-6" /> : <HiPaperAirplane className="rotate-90 w-6 h-6" />}
          </button>
        </div>
      </form>
    </div>
  );
}
