'use client';

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from 'next/navigation'

export default function forgot() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token')
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    newpassword: "",
    cpassword: ""
  });

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <section className="bg-secoundry w-[25rem]  rounded-lg p-10">
        <h3 className="text-2xl font-bold">Forgot Password</h3>
        <br />
        <hr />
        <br />
        <div>
          { token ?
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-1 py-2">
                <label title="text" className="mb-3">New Password</label>
                <input
                  type="text"
                  name="newpassword"
                  value={formData.newpassword}
                  onChange={onChange}
                  autoComplete="off"
                  placeholder="New Password"
                  className="bg-secoundry border-gray-500 border-2 p-2 rounded-lg focus:outline-none"
                  required
                />
                {/* {errors.email && <span className="text-red-600">{errors.email}</span>} */}
              </div>
              <div className="flex flex-col gap-1">
                <label title="password" className="mb-3">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  value={formData.cpassword}
                  onChange={onChange}
                  autoComplete="off"
                  placeholder="Confirm password"
                  className="bg-secoundry border-gray-500 border-2 p-2 rounded-lg focus:outline-none"
                  required
                />
                {/* {errors.password && <span className="text-red-600">{errors.password}</span>} */}
              </div>
              <button type="submit" className="bg-blue-800 py-2 w-full px-7 text-xl rounded-lg my-3 focus:ring-2 focus:ring-blue-700 hover:bg-blue-900 font-bold disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed" disabled={disabled} >Submit</button>
            </form>
            : <form>
              <div className="flex flex-col gap-1 py-2">
              <label title="text" className="mb-3">Email Addresss</label>
              <input
                type="email"
                name="email"
                value=""
                onChange=""
                autoComplete="off"
                placeholder="Email"
                className="bg-secoundry border-gray-500 border-2 p-2 rounded-lg focus:outline-none"
                required
              />
              <button type="submit" className="bg-blue-800 py-2 w-full px-7 text-xl rounded-lg my-3 focus:ring-2 focus:ring-blue-700 hover:bg-blue-900 font-bold disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed" disabled={disabled} >Submit</button>
            </div>
            <p className="flex text-sm font-light">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/login"
              className="font-medium text-base mx-1 text-teal-600 hover:underline"
            >
              Login
            </Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mx-1 my-1 text--600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </p>
            </form>
            
          } 
        </div>
      </section>
    </section>
  )
}