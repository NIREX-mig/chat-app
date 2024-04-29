'use client';

import { useState, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import instance from "@/utils/axiosConfig";
import { errorToast, successToast } from "@/utils/toastshow";
import Image from "next/image";


const SidebarHeader = () => {

  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();


  useEffect(() => {
    const isAuthenticated =
      typeof window !== "undefined" ? localStorage.getItem("refershToken") : null;
    if (!isAuthenticated) {
      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
    }

    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [router, modal]);

  const handleLogOut = async () => {
    try {
      const response = await instance.post('/api/v1/auth/logout');
      if (response.data.success) {
        successToast(response)
        setTimeout(() => {
          localStorage.removeItem('refershToken');
          localStorage.removeItem('user');
          setModal(false);
        }, 500);
      }
    } catch (error) {
      setModal(false);
      errorToast(error)
    }
  }
  const handleManageProfile = () => {

  }

  const handleOnClick = () => {
    setModal(!modal);
  }

  return (
    <section className="flex justify-between items-center border-b-2 border-secoundry py-2 pb-4">
      <Image src={user?.avatar} alt="profilePic" width={25} height={25} className="rounded-full" onClick={handleOnClick} />
      {modal && <section className="absolute left-7 top-14 p-5 rounded-xl bg-secoundry border-gray-700 border">
        <div className=" py-3 px-4 flex items-center gap-3 cursor-pointer hover:bg-primary" onClick={handleManageProfile}>
          <CgProfile size={25} />
          <h3>Manage Profile</h3>
        </div>
        <div className="py-3 px-4 flex items-center gap-3 cursor-pointer hover:bg-primary" onClick={handleLogOut}>
          <FiLogOut size={25} />
          <h3>Log Out</h3>
        </div>
      </section>}
    </section>
  )
}

export default SidebarHeader
