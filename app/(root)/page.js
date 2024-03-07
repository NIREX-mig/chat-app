"use client";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import ChatCard from "@/components/ChatCard";
import ChatFoter from "@/components/ChatFoter";
import Header from "@/components/Header";


export default function Home() {

  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
    if (!isAuthenticated) {
      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
    }
  }, [router])

  return (
    <section className=" w-full h-screen">
      <Header />

      <section className="p-2 w-full h-[calc(100%-150px)] overflow-y-auto">

        <article className="bg-secoundry md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-left clear-both">
          <p className="text-wrap p-2">hii</p>
        </article>

        <article className="bg-secoundry md:w-[30%] w-[40%] px-2 rounded-lg text-wrap float-right clear-both ">
          <p className="text-wrap p-2">{message}</p>
        </article>
        
      </section>
      <ChatFoter message={message} setMessage={setMessage} />
    </section>
  );
}
