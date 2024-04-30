"use client"

import { useState, useEffect } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { validation } from "@/utils/loginvalidator";
import instance from "@/utils/axiosConfig";
import { errorToast, successToast } from "@/utils/toastshow";

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();


  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setDisabled(false);

    const validate = validation(formData);
    setErrors(validate);

    if (validate.success) {

      try {
        setDisabled(true);

        const response = await instance.post("/api/v1/auth/login", { email: formData.email, password: formData.password });

        setDisabled(false);

        if (response.data.success) {
          localStorage.setItem("refershToken", response.data.data.refershToken);
          const user = JSON.stringify(response.data.data.user)
          localStorage.setItem("user", user);
          
          successToast(response)
          setFormData({ email: "", password: "" });
          setDisabled(false);
          setTimeout(() => {
            router.push(`${process.env.NEXT_PUBLIC_BASE_URL}`);
          }, 500);
        }
      } catch (error) {
        setDisabled(false)
        console.log(error)
        errorToast(error)
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
      <section className="bg-secoundry w-[25rem]  rounded-lg p-10">
        <h3 className="text-2xl font-bold">Log in</h3>
        <p className="text-lg text-gray-300">to continue to My Application</p>
        <br />
        <div>
          <hr />
        </div>
        <br />
        <div>
          <form onSubmit={handleOnSubmit}>

            <div className="flex flex-col gap-1 py-2">
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
            <div className="flex flex-col gap-1">
              <label title="password" className="mb-3">Password</label>
              <input
                type="password"
                content="*"
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                autoComplete="off"
                placeholder="password"
                className="bg-secoundry border-gray-500 border-2 p-2 rounded-lg focus:outline-none"
                required
              />
              {errors.password && <span className="text-red-600">{errors.password}</span>}
            </div>
            <div className="flex items-center justify-between">
              <Link
                href="/forgot"
                className="text-base text-white hover:underline mt-3"
              >
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="bg-blue-800 py-2 w-full px-7 text-xl rounded-lg my-3 focus:ring-2 focus:ring-blue-700 hover:bg-blue-900 font-bold disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed" disabled={disabled} >Log in</button>
          </form>
          <p className="flex text-sm font-light">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className="font-medium text-base mx-1 text-teal-600 hover:underline"
            >
              Sign up
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