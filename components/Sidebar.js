"use client";

import { useEffect, useState } from "react";
import Chat from "./Chat"
import SidebarHeader from "./SidebarHeader"
import AddChatModal from "./AddChatModal"
import { FaSearch } from "react-icons/fa"
import instance from "@/utils/axiosConfig";
import { usePathname, useRouter } from "next/navigation";



const Sidebar = () => {

  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false)
  const [chats, setChats] = useState([]);
  const pathname = usePathname();
  const router = useRouter();


  useEffect(() => {
    getChats();
  }, [])

  const handleClose = () => {
    setModalOpen(false);
  }

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  }

  const getChats = async () => {
    const token = localStorage.getItem("refershToken")
    if (!token) {
      return
    }

    try {
      const {data} = await instance.get("/api/v1/chat/fetchchats")

      if (data.success) {
        setChats(chats.concat(data.data));
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={`p-2 h-screen border-r-2 border-secoundry ${pathname === "/chat" && "hidden md:block"} `}  >

      <SidebarHeader />

      <section className="flex items-center p-2 my-2">
        <FaSearch size={15} className="mx-2" />
        <input type="text"
          name="search"
          value={search}
          onChange={handleOnChange}
          className="focus:outline-none bg-primary"
          placeholder="Search in Chats"
          autoComplete="off"
        />
      </section>

      <section>
        <button type="button" onClick={() => setModalOpen(true)} className="w-full hover:bg-secoundry my-1 py-1">Start A New Chat</button>
        {modalOpen && <AddChatModal handleClose={handleClose} setModalOpen={setModalOpen} setChats={setChats} chats={chats} />}
      </section>

      <section className="h-[78%] overflow-hidden overflow-y-auto">
        {chats?.map((chat, i) => {
          return <Chat key={i} chat={chat} />
        })}
      </section>

    </section>
  )
}

export default Sidebar
