"use client";

import { IoSend } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react';

const ChatFoter = ({ text, setText, pressEnter, handleOnClick }) => {

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
          autoComplete="off"
          placeholder="Type a message"
          className="focus:outline-none bg-secoundry h-10 rounded-md p-2 w-[90%]"
        />
        {/* <EmojiPicker/> */}
        <button type="button" onClick={handleOnClick} className="p-2 group hover:bg-white rounded-full text-center ">
          <IoSend size={25} className="group-hover:fill-primary" />
        </button>
    </section>
  )
}

export default ChatFoter
