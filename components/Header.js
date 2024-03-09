'use client';

import { FiMoreVertical } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <section className=" my-1 p-2 pb-2 border-b-2 border-secoundry">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <RxAvatar size={40} />
          <div>
            <p>
              akay@gmail.com
            </p>
            <p className="text-sm">Last active</p>
          </div>
      </div>
          <FiMoreVertical size={20} />
        </div>
    </section>
  )
}

export default Header
