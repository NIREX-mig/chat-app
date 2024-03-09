"use client";
import { useState,useEffect } from "react";
import { useRouter} from "next/navigation";
import ChatCard from "@/components/ChatCard";
import ChatFoter from "@/components/ChatFoter";
import Header from "@/components/Header";
import {io} from "socket.io-client";



export default function Home({params}) {

  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  const router = useRouter();

  // const socket = io("http://localhost:8000")


  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnClick();
    }
  }

  // const handleOnClick = (e) => {
  //   e.preventDefault();
  //   let value = e.target.value;

  //   if (value) {
  //     socket.emit('private message', message);
  //   }
  // }

  useEffect(() => {
    const isAuthenticated =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
    if (!isAuthenticated) {
      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
    }

    // socket.on('private message', ({data})=>{
    //   setMessage(data);
    // })

  }, [router, socket, setMessage])

  return (
    <section className=" w-full h-screen">
      <Header />

      <section className="p-2 w-full h-[calc(100%-150px)] overflow-y-auto">

        <article className="bg-secoundry md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-left clear-both">
          <p className="text-wrap p-2">hii</p>
        </article>
        <p>{console.log(params.slug[0])}</p>

        <article className="bg-secoundry md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-right clear-both ">
          <p className="text-wrap p-2">{message}</p>
        </article>
        
      </section>
      <ChatFoter text={text} setText={setText} pressEnter={pressEnter} handleOnClick={handleOnClick} />
    </section>
  );
}
