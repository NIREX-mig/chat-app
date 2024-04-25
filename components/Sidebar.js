"use client";
import { useEffect, useState } from "react";
import Chat from "./Chat"
import SidebarHeader from "./SidebarHeader"
import AddChatModal from "./AddChatModal"
import { FaSearch } from "react-icons/fa"
import { useGetContectsQuery } from "@/redux/features/chatApi";


const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false)
  const [contects, setContects] = useState([])


  const handleClose = () => {
    setModalOpen(false);
  }


  const handleOnChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <section className=" p-2 h-screen border-r-2 border-secoundry" >

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
        <button type="button" onClick={()=>setModalOpen(true)} className="w-full hover:bg-secoundry my-1 py-1">Start A New Chat</button>
        {modalOpen && <AddChatModal  handleClose={handleClose} setModalOpen={setModalOpen} />}
      </section>

      <section className="h-[78%] overflow-hidden overflow-y-auto">
        {contects?.map((user, i) => {
          return <Chat key={i} />
        })}
      </section>
    </section>
  )
}

export default Sidebar
