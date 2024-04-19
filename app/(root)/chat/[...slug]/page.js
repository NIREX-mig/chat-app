"use client";
import { useState, useEffect } from "react";
import ChatFoter from "@/components/ChatFoter";
import Header from "@/components/Header";
import { useSelector } from "react-redux";



export default function Slug({ params }) {

  const [chatMessages, setChatMessages] = useState([]);
  const [sendMessages, setSendMessages] = useState([]);
  const [text, setText] = useState("");

  // const {socket} = useSelector((state) = state.app);

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnClick();
    }
  }

  // const handleOnClick = () => {
  //   let contectId = params.slug[0];
  //   socket.emit('send', { text, contectId });
  //   setSendMessages(prevMessage => [...prevMessage, text])
  //   setText("");
  // }

  // useEffect(() => {

  //   // socket.on('recieve', (message) => {
  //   //   setChatMessages(prevMessage => [...prevMessage, message])
  //   // });

  //   // socket.emit("joinChat", params.slug[0]);

  // }, [socket, setChatMessages, params])

  return (
    <section className=" w-full h-screen">
      <Header />

      <section className="p-2 w-full h-[calc(100%-150px)] overflow-y-auto">

        {chatMessages.map((msg, i) => {
          return (
            <article key={i} className="bg-secoundry md:w-[30%] w-[40%] px-2 my-1 rounded-lg text-wrap float-left clear-both m-2" >
              <p className="text-wrap p-2">{msg}</p>
            </article>
          )
        })}

        {sendMessages.map((msg, i) => {
          return <article key={i} className="bg-secoundry my-1 md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-right clear-both ">
            <p className="text-wrap p-2">{msg}</p>
          </article>
        })}

      </section>
      <ChatFoter text={text} setText={setText} pressEnter={pressEnter} handleOnClick={handleOnClick} />
    </section>
  );
}
