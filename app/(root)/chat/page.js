"use client";

import { useEffect, useState } from "react";
import ChatFoter from "@/components/ChatFoter";
import Header from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import socket from "@/socket";
import { pushNewMessage, setAllMessages } from "@/redux/features/appSlice";
import instance from "@/utils/axiosConfig";
import { errorToast, messageToast } from "@/utils/toastshow";
import ScrollableMessages from "@/components/ScrollableMessages";


export default function Page() {

  const { allMessages, selectedUser } = useSelector((state) => state.app);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMessages();
  }, [selectedUser]);

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnClick();
    }
  }

  const handleOnClick = async () => {
    try {
      setText("");
      const res = await instance.post(`/api/v1/message/${selectedUser?._id}`, { message: text });
      dispatch(pushNewMessage(res.data.data));
    } catch (error) {
      errorToast(error);
    }
  }

  const fetchMessages = async () => {
    if (!selectedUser) {
      messageToast("Something Went Wrong!")
      return
    }
    try {
      const res = await instance.get(`/api/v1/message/${selectedUser?._id}`);
      dispatch(setAllMessages(res.data.data));
    } catch (error) {
      errorToast(error);
    }
  }


  return (
    <section className=" w-full h-screen">
      <Header />
      <div className="p-2 w-full h-[calc(100%-150px)] overflow-y-auto ">
        {/* <ScrollableMessages allMessages={allMessages} /> */}
        {allMessages.map((msg, i) => {
          return <articl key={i} className={`my-1 m:max-w-[40%] max-w-[40%] px-2 rounded-lg text-wrap ${msg.sender._id == selectedUser?.participants._id ? "float-left bg-green-400  text-black" : "float-right bg-blue-200 text-black"} clear-both`}>
          {/* return <articl key={i} className="bg-secoundry my-1 md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-right clear-both "> */}
            <p className="text-wrap p-2">{msg.message}</p>
          </articl>
        })}
      </div>

      <ChatFoter text={text} setText={setText} pressEnter={pressEnter} handleOnClick={handleOnClick} />
    </section>

  );
}
