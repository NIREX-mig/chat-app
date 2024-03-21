"use client";
import { useState, useEffect } from "react";
import ChatCard from "@/components/ChatCard";
import ChatFoter from "@/components/ChatFoter";
import Header from "@/components/Header";
import { io } from "socket.io-client";


export default function Home({ params }) {

  // const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [text, setText] = useState("");

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnClick();
    }
  }

  const handleOnClick = (e) => {
    let recipient = params.slug[0];
    socket.emit('send', {text, recipient});
    setText("");
  }

  // useEffect(() => {

  //   const socketConnection = io("http://localhost:8000", { transports: ['websocket'] })

  //   socketConnection.on('recieve', (message) => {
  //     setChatMessages(prevMessage => [...prevMessage, message])
  //   });

  //   socketConnection.emit("register user", params.slug[0]);

  //   setSocket(socketConnection);

  //   return () => {
  //     socketConnection.disconnect();
  //   }

  // }, [setSocket, setChatMessages,params])

  return (
    <section className=" w-full h-screen">
      <Header />

      <section className="p-2 w-full h-[calc(100%-150px)] overflow-y-auto">

        {chatMessages.map((msg, i) => {
          return (
            <article key={i} className="bg-secoundry md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-left clear-both m-2" >
              <p className="text-wrap p-2">{msg}</p>
            </article>
          )
        })}


        <article className="bg-secoundry md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-right clear-both ">
          <p className="text-wrap p-2">hello</p>
        </article>

      </section>
      <ChatFoter text={text} setText={setText} pressEnter={pressEnter} handleOnClick={handleOnClick} />
    </section>
  );
}
