"use client";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

const ChatFoter = ({ message, setMessage }) => {

  const [text, setText] = useState("");
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnClick();
    }
  }

  const handleOnClick = (e) => {
    setMessage(text);
    setText('');
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  return (
    <section className="w-full bg-primary p-4 border-t-2 border-secoundry flex gap-5 items-center">
      <input
        type="text"
        name="message"
        id="message"
        value={text}
        onChange={handleOnChange}
        onKeyUp={pressEnter}
        placeholder="Type a message"
        className="focus:outline-none bg-secoundry h-10 rounded-md p-2 w-[95%]"
      />
      <div className="p-2   group hover:bg-white rounded-full text-center "
        onClick={handleOnClick}
      >
        <IoSend size={25} className="group-hover:fill-primary" />
      </div>
    </section>
  )
}

export default ChatFoter
