"use client";

import { useEffect, useState } from "react";
import ChatFoter from "@/components/ChatFoter";
import Header from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import socket from "@/socket";
import { pushNewMessage, setAllMessages } from "@/redux/features/appSlice";
import instance from "@/utils/axiosConfig";
import { errorToast, messageToast } from "@/utils/toastshow";
import ScrollableContainer from "@/components/ScrollableContainer";


export default function Chat() {

  const { allMessages, selectedUser } = useSelector((state) => state.app);

  const [text, setText] = useState("");
  const [SelectedUser, setSelectedUser]= useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMessages();
    setSelectedUser(JSON.parse(localStorage.getItem("selectedUser")));
  }, [selectedUser,,setSelectedUser]);

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnClick();
    }
  }

  const handleOnClick = async () => {
    try {
      setText("");
      let localSelectedUser = JSON.parse(localStorage.getItem("selectedUser"));

      const res = await instance.post(`/api/v1/message/${localSelectedUser?._id}`, { message: text });
      dispatch(pushNewMessage(res.data.data));
    } catch (error) {
      errorToast(error);
    }
  }

  const fetchMessages = async () => {
    let localSelectedUser = JSON.parse(localStorage.getItem("selectedUser"));
    if (!localSelectedUser) {
      messageToast("Something Went Wrong!")
      return
    }
    try {
      const res = await instance.get(`/api/v1/message/${localSelectedUser?._id}`);
      dispatch(setAllMessages(res.data.data));
    } catch (error) {
      errorToast(error);
    }
  }


  return (
    <section className=" w-full h-screen">
      <Header />
      <section className=" md:w-full h-[calc(100%-150px)] overflow-y-auto ">
        <ScrollableContainer>
          {allMessages.map((msg, i) => {
            return <articl key={i} className={`my-1 m:max-w-[40%] max-w-[40%] px-2 rounded-lg text-wrap ${msg.sender._id == SelectedUser?.participants?._id ? "float-left bg-green-300 text-black" : "float-right bg-blue-300 text-black"} clear-both`}>
              <p className="text-wrap p-2">{msg.message}</p>
            </articl>
          })}
        </ScrollableContainer>

      </section>

      <ChatFoter text={text} setText={setText} pressEnter={pressEnter} handleOnClick={handleOnClick} />
    </section>

  );
}
