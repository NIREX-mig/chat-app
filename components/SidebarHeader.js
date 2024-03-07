'use client';

import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

const SidebarHeader = () => {

  const [modal, setModal] = useState(false);
  
  const handleOnClick = () => {
    setModal(!modal);
  }

  return (
    <section className="flex justify-between items-center border-b-2 border-secoundry py-2 pb-4">
      <RxAvatar size={30} className="cursor-pointer" onClick={handleOnClick} />
      {modal && <div className="absolute left-5 top-14 red p-5 rounded-xl">
        HELO
        </div>}
      <FiMoreVertical size={20} className="cursor-pointer" />
    </section>
  )
}

export default SidebarHeader
