"use client";

import { useState } from "react";
import Chat from "./Chat"
import SidebarHeader from "./SidebarHeader"
import AddChatModal from "./AddChatModal"
import {FaSearch} from "react-icons/fa"


const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState("")

  const users = [];

  const handleAddEmail = () => {
    users.push(email);
    setModalOpen(false);
  }

  const handleClose = () =>{
    setModalOpen(false);
  }

  const handleClick = () => {
    setModalOpen(true);
  }

  const handleOnChange = (e) =>{
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

      <section className="">
        <button type="button" onClick={handleClick} className="w-full hover:bg-secoundry my-1 py-1">Start A New Chat</button>
        {modalOpen && <AddChatModal handleAddEmail={handleAddEmail} handleClose={handleClose} setEmail={setEmail} email={email}/>}
      </section>

      <section className="h-[78%] overflow-hidden overflow-y-auto">
        {users.map((user,i)=>{
          return<Chat key={i} user={user} />
        })}
      </section>
    </section>
  )
}

export default Sidebar
