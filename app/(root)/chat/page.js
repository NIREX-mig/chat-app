"use client";

import { useEffect, useState } from "react";
import ChatFoter from "@/components/ChatFoter";
import Header from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import socket from "@/socket";
import { setAllMessages } from "@/redux/features/appSlice";
import instance from "@/utils/axiosConfig";
import { errorToast } from "@/utils/toastshow";


export default function Page() {

  const { allMessages, selectedUser } = useSelector((state) => state.app);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if(!selectedUser) return;

    fetchMessages();
  }, [])

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnClick();
    }
  }

  const handleOnClick = async () => {
    try {
      dispatch(setAllMessages([...allMessages, text]));
      setText("");
      const chatId = selectedUser?._id
      const res = await instance.post(`/api/v1/message/${chatId}`, { message: text });
      
    } catch (error) {
      errorToast(error);
    }

  }

  const fetchMessages = async () => {
    try {
      const res = await instance.get(`/api/v1/message/${selectedUser?._id}`);
      dispatch(setAllMessages(...allMessages, message : res.data.data.message));
      console.log(allMessages)
    } catch (error) {
      errorToast(error);
    }
  }


  return (
    <section className=" w-full h-screen">
      <Header />

      <section className="p-2 w-full h-[calc(100%-150px)] overflow-y-auto">
        {allMessages.map((msg, i) => {
          return <article key={i} className="bg-secoundry my-1 md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-right clear-both ">
            <p className="text-wrap p-2">{msg}</p>
          </article>
        })}

      </section>
      <ChatFoter text={text} setText={setText} pressEnter={pressEnter} handleOnClick={handleOnClick} />
    </section>
  );
}
