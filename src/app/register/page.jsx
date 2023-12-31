"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [inputsValue, setInputsValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  let { name, email, password } = inputsValue;

  // onChangeHandler Setup
  const onChangeHandler = (name, value) => {
    setInputsValue({ ...inputsValue, [name]: value });
  };

  // onSubmitHandler Setup
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputsValue),
      };
      const res = await fetch("api/register", config);
      const resData = await res.json();
      if (resData["status"] === true) {
        setLoading(false);
        toast.success(resData["msg"]);
        router.replace("/login");
      } else {
        setLoading(false);
        toast.error(resData["msg"]);
      }
    } catch (error) {
      console.log(error.toString());
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" w-1/3 mx-auto p-6 bg-slate-50 border rounded">
        <h2 className="text-center text-lg font-bold text-sky-600 pb-3">
          User Resigtration
        </h2>
        <form className="" onSubmit={onSubmitHandler}>
          <div className=" w-full">
            <label className=" text-slate-500">User Name</label>
            <input
              className="py-2 px-5 w-full my-2 rounded border text-sky-400 border-slate-400 focus:outline-none focus:ring-none focus:border-sky-400 placeholder:text-slate-400 focus:text-sky-400"
              onChange={(e) => {
                onChangeHandler("name", e.target.value);
              }}
              value={name}
              type="text"
              placeholder="User Name..."
            />
          </div>
          <div className=" w-full">
            <label className=" text-slate-500">Email</label>
            <input
              className="py-2 px-5 w-full my-2 rounded border text-sky-400 border-slate-400 focus:outline-none focus:ring-none focus:border-sky-400 placeholder:text-slate-400 focus:text-sky-400"
              onChange={(e) => {
                onChangeHandler("email", e.target.value);
              }}
              value={email}
              type="email"
              placeholder="Your Email..."
            />
          </div>
          <div className=" w-full mt-3">
            <label className=" text-slate-500">Password</label>
            <input
              className="py-2 px-5 w-full my-2 rounded border text-sky-400 border-slate-400 focus:outline-none focus:ring-none focus:border-sky-400 placeholder:text-slate-400 focus:text-sky-400"
              onChange={(e) => {
                onChangeHandler("password", e.target.value);
              }}
              value={password}
              type="password"
              placeholder="Your Password..."
            />
          </div>
          <div className="my-5">
            <button
              className="py-2 px-6 bg-white hover:bg-sky-400 border rounded mx-auto block text-sky-500 hover:text-white font-semibold disabled:hover:bg-white disabled:hover:text-slate-300 disabled:text-slate-300"
              disabled={loading || !name || !email || !password}
            >
              {loading ? "Please Wait.." : "Submit"}
            </button>
          </div>
        </form>

        <div className="text-center py-3">
          <p>
            I have already registerd!
            <Link className="text-sky-500 px-2" href="/login">
              Login here?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
