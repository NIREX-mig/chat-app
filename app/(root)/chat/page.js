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
import Loader from "@/components/ui/Loader";
import moment from "moment";

export default function Chat() {

  const { allMessages, selectedUser } = useSelector((state) => state.app);

  const [text, setText] = useState("");
  const [SelectedUser, setSelectedUser] = useState(null)
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMessages();
    setSelectedUser(JSON.parse(localStorage.getItem("selectedUser")));
  }, [selectedUser, , setSelectedUser]);

  useEffect(() => {
    socket.on("received_message", (newMessage) => {
      dispatch(pushNewMessage(newMessage));
    });
    return () => {

      socket.off("received_message", (newMessage) => {
        console.log("off received message")
      });
    }
  })

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
      const { data } = await instance.post(`/api/v1/message/${localSelectedUser?._id}`, { message: text });
      socket.emit("private_message", data.data)
      dispatch(pushNewMessage(data.data));
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
      setLoading(true);
      const { data } = await instance.get(`/api/v1/message/${localSelectedUser?._id}`);
      dispatch(setAllMessages(data.data));

      setLoading(false);
    } catch (error) {
      errorToast(error);
    }
  }


  return (loading ?
    <div className="absolute top-[50%] left-[50%]">
      <Loader />
    </div> :
    <section className=" w-full h-screen">
      <Header />
      <section className=" md:w-full h-[calc(100%-150px)] overflow-y-auto ">
        <ScrollableContainer>
          {allMessages.map((msg, i) => {
            return <article key={i} className={`my-1 m:max-w-[40%] max-w-[40%] px-2 text-wrap ${msg.sender._id == SelectedUser?.participants?._id ? "float-left bg-green-300 text-black rounded-e-xl rounded-tl-xl" : "float-right bg-blue-300 text-black rounded-s-xl rounded-tr-xl"} clear-both flex flex-col items-end`}>
              <p className="text-wrap p-2">{msg.message}</p>
              <p className="text-xs p-1">{moment(msg.createdAt).fromNow()}</p>
            </article>
          })}
        </ScrollableContainer>

      </section>

      <ChatFoter text={text} setText={setText} pressEnter={pressEnter} handleOnClick={handleOnClick} />
    </section>
  );
}
