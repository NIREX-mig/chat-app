"use client";

import { useEffect, useState } from "react";
import ChatFoter from "@/components/ChatFoter";
import Header from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import socket from "@/socket";
import { setReceivedMessage, setSendMessage } from "@/redux/features/appSlice";
import instance from "@/utils/axiosConfig";
import { errorToast } from "@/utils/toastshow";


export default function Page() {

  const {sendMessage, receivedMessage, selectedUser} = useSelector((state)=>state.app);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  useEffect(() =>{
    getChats();
  }, [receivedMessage])

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnClick();
    }
  }

  const handleOnClick = async () => {
    try {
      dispatch(setSendMessage(text));
      const chatId = selectedUser?._id
      const res = await instance.post(`/api/v1/message/${chatId}`,{ message : text});
      console.log(res)
      setText("");
    } catch (error) {
      errorToast(error);
    }
    
  }

  const getChats = async () =>{
    try {
      const chatId = selectedUser?._id;
      const res = await instance.get(`/api/v1/message/${chatId}`);
      dispatch(setReceivedMessage(res.data.data.message));
      // console.log(res.data.data.message);
      console.log(receivedMessage)
    } catch (error) {
      errorToast(error);
    }
  }


  return (
    <section className=" w-full h-screen">
      <Header />

      <section className="p-2 w-full h-[calc(100%-150px)] overflow-y-auto">

        {receivedMessage.map((msg, i) => {
          return (
            <article key={i} className="bg-secoundry md:w-[30%] w-[40%] px-2 my-1 rounded-lg text-wrap float-left clear-both m-2" >
              <p className="text-wrap p-2">hello</p>
            </article>
          )
        })}

        {sendMessage.map((msg, i) => {
          return <article key={i} className="bg-secoundry my-1 md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-right clear-both ">
            <p className="text-wrap p-2">{msg}</p>
          </article>
        })}

      </section>
      <ChatFoter text={text} setText={setText} pressEnter={pressEnter} handleOnClick={handleOnClick} />
    </section>
  );
}
