"use client";
import { IoClose } from "react-icons/io5";


const AddChatModal = ({ handleClose,handleAddName, setName, name, errors}) => {



  const handleOnChange = (e) => {
    setName(e.target.value);
  }

  return (
    <section className=" backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0">
      <section className="-translate-x-[50%] -translate-y-[50%] fixed top-[20%] left-[50%] md:w-[40%] w-full h-[30%] rounded-lg bg-secoundry p-3">
        <IoClose size={30} className="absolute top-2 right-2 cursor-pointer hover:bg-primary" onClick={handleClose} />
        <h3 className="text-xl text-center mb-3 p-2 font-bold" >Add A New Chat</h3>
        <form onSubmit={handleAddName}>

          <div className="flex items-center gap-2 p-2 ">
            <label htmlFor="title" className="">
              name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={handleOnChange}
              autoComplete="off"
              className="w-full bg-secoundry border-white rounded-lg border-2 focus:outline-none p-2"
              />
          </div>
              {errors.name && <span className="text-red-500 ml-16 ">{errors.name}</span>}
          <button
            type="submit"
            className="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 mx-auto  disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
          >Add Name</button>
        </form>
      </section>
    </section>
  )
}

export default AddChatModal
