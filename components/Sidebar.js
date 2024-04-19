"use client";
import { useEffect, useState } from "react";
import Chat from "./Chat"
import SidebarHeader from "./SidebarHeader"
import AddChatModal from "./AddChatModal"
import { FaSearch } from "react-icons/fa"
import { useGetContectsQuery } from "@/redux/features/chatApi";
import { nameValidation } from "@/utils/namevalidator";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [contects, setContects] = useState([])
  const [errors, setErrors] = useState({});



  const handleAddName = async (e) => {
    e.preventDefault();
    const validate = nameValidation(name);
    setErrors(validate);
    if (validate.success) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/contect/addcontect`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authToken": localStorage.getItem('authToken')
        },
        body: JSON.stringify({ name })
      })
      const response = await res.json();
      setContects(contects.concat(response.savedContect))
      if(response.success){
        toast.success( "Successfully Add Name" , {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setName("");
        setModalOpen(false);
      } else {
        toast.error( response.Error , {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    }
  }

  const handleClose = () => {
    setModalOpen(false);
  }

  const handleClick = () => {
    setModalOpen(true);
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
        <button type="button" onClick={handleClick} className="w-full hover:bg-secoundry my-1 py-1">Start A New Chat</button>
        {modalOpen && <AddChatModal handleAddName={handleAddName} handleClose={handleClose} setName={setName} errors={errors}/>}
      </section>

      <section className="h-[78%] overflow-hidden overflow-y-auto">
        {contects?.map((user, i) => {
          return <Chat key={i} user={user}/>
        })}
      </section>
    </section>
  )
}

export default Sidebar
