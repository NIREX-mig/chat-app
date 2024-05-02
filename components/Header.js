'use client';

import { useSelector } from "react-redux";
import Image from "next/image";

const Header = () => {
  
  const {selectedUser} = useSelector((state) => state.app);

  return (
    <section className=" my-1 p-2 pb-2 border-b-2 border-secoundry">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Image src={selectedUser?.participants?.avatar} width={45} height={45} alt="profile" className="rounded-full" />
          <div>
            <p className="cursor-default">
              {selectedUser?.participants?.email}
            </p>
            <p className="text-sm cursor-default">Last active</p>
          </div>
      </div>
        </div>
    </section>
  )
}

export default Header
