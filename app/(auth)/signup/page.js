"use client";

import { useState, useEffect } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { validation } from "@/utils/authvalidator";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  
  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
    if (isAuthenticated) {
      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}`);
    }
  }, [router]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    if (formData.cpassword !== formData.password) {
      setDisabled(false);
      return setErrors({ ...errors, cpassword: 'Confirm password dose not match' })
    }
    setDisabled(false)
    const validate = validation(formData);
    setErrors(validate);
    console.log(validate)
    if (validate.success) {
      setDisabled(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/auth/signup`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({email : formData.email, password : formData.password}) 
      });
      const data = await res.json();
      setDisabled(false);
      if(data.success){
        setFormData({ email: "", password: "", cpassword: "" })
        setDisabled(false);
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/login`)
      }

    }

  }

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value })
  }
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <section className="bg-secoundry sm:w-[25rem] w-full  rounded-lg p-10">
        <h3 className="text-2xl font-bold">Sign up</h3>
        <p className="text-lg text-gray-300">to continue to My Application</p>
        <br />
        <div>
          <hr />
        </div>
        <br />
        <div>
          <form onSubmit={handleOnSubmit}>

            <div className="flex flex-col mb-2">
              <label title="text" className="mb-3">Email Addresss</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                autoComplete="off"
                placeholder="Email"
                className="bg-secoundry border-gray-500 border-2 p-2 rounded-lg focus:outline-none"
                required
              />
              {errors.email && <span className="text-red-600">{errors.email}</span>}
            </div>
            <div className="flex flex-col">
              <label title="password" className="mb-3">Password</label>
              <input
                type="password"
                content="*"
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                autoComplete="off"
                placeholder="password"
                className="bg-secoundry border-gray-500 border-2 p-2 rounded-lg focus:outline-none mb-2"
                required
              />
              {errors.password && <span className="text-red-600">{errors.password}</span>}
            </div>
            <div className="flex flex-col">
              <label title="password" className="mb-3">Confirm Password</label>
              <input
                type="password"
                content="*"
                name="cpassword"
                value={formData.cpassword}
                onChange={handleOnChange}
                autoComplete="off"
                placeholder="confirm password"
                className="bg-secoundry border-gray-500 border-2 p-2 rounded-lg focus:outline-none"
                required
              />
            </div>
            {errors.cpassword && <span className="text-red-600">{errors.cpassword}</span>}
            <button type="submit" className="bg-blue-800 py-2 w-full px-7 text-xl rounded-lg my-3 focus:ring-2 focus:ring-blue-700 hover:bg-blue-900 font-bold disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed" disabled={disabled} >Sign up</button>
          </form>
          <p className="flex text-sm font-light ">
            login with account?
            <Link
              href="/login"
              className="font-medium text-base mx-1 text-teal-600 hover:underline"
            >
              login
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
        </div>
      </section>
    </section>
  )
}