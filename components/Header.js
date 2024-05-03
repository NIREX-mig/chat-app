'use client';

import { useSelector } from "react-redux";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
;

const Header = () => {

  const { selectedUser } = useSelector((state) => state.app);
  const [SelectedUser, setSelectedUser] = useState(null);
  const router = useRouter()

  useEffect(() => {
    setSelectedUser(JSON.parse(localStorage.getItem("selectedUser")));
  }, [selectedUser,setSelectedUser]);

  const handleBackButton = () =>{
    router.back();
  }

  return (
    <section className=" my-1 p-2 pb-2 border-b-2 border-secoundry">

      <div className="flex justify-between items-center ">
        <div className="flex gap-3 items-center">
          <IoMdArrowBack size={30} onClick={handleBackButton} className={`p-1 hover:bg-gray-500  hover:rounded-full hover:fill-white md:hidden`} />
          <Image src={SelectedUser?.participants?.avatar} width={45} height={45} alt="profile" className="rounded-full" />
          <div>
            <p className="cursor-default">
              {SelectedUser?.participants?.email}
            </p>
            <p className="text-sm cursor-default">Last active</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
