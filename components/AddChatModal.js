"use client";

import instance from "@/utils/axiosConfig";
import { errorToast, messageToast, successToast } from "@/utils/toastshow";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Select from 'react-select';


const AddChatModal = ({ handleClose, setModalOpen, setChats, chats }) => {

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    getOptions();
  }, [])

  const getOptions = async () => {
    const res = await instance.get("/api/v1/chat/search");
    if (res.data.success) {
      const dataArray = res.data.data;
      let tempArray = [];
      for (let x in dataArray) {
        let object = {
          value: dataArray[x].username,
          label: dataArray[x].username,
          id: dataArray[x]._id,
          username: dataArray[x].username,
          email: dataArray[x].email,
          avatar: dataArray[x].avatar
        }
        tempArray.push(object)
      }
      setOptions(options.concat(tempArray))
    }
  }

  const handleOnSubmit = async () => {
    if(!selectedOption){
      messageToast("Please Select A Chat")
      return
    }
    try {
      const response = await instance.post(`/api/v1/chat/createonetoonechat/${selectedOption.id}`);
      if (response.data.success) {
        successToast(response);
        setChats(chats.concat(response.data.data));
        setModalOpen(false);
      }
    } catch (error) {
      errorToast(error);
    }
  }

  const handleOnChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }

  return (
    <section className=" backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0">
      <section className="-translate-x-[50%] -translate-y-[50%] fixed top-[20%] left-[50%] md:w-[40%] w-full h-[30%] rounded-lg bg-secoundry p-3">
        <IoClose size={30} className="absolute top-2 right-2 cursor-pointer hover:bg-primary" onClick={handleClose} />
        <h3 className="text-xl text-center mb-3 p-2 font-bold" >Create New Chat</h3>
        <div className="flex flex-col gap-6">

          <div className="text-secoundry">
            <Select
              className=""
              value={selectedOption}
              onChange={handleOnChange}
              options={options}
              placeholder="Select to add Chat..."
            />
          </div>
          <button type="button" onClick={handleOnSubmit} className="text-white bg-blue-700 hover:bg-blue-800  font-bold rounded-lg text-lg py-2.5 px-7  mx-auto">Create Chat</button>
        </div>
      </section>
    </section >
  )
}

export default AddChatModal
