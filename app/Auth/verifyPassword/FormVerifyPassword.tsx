"use client";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function FormVerifyPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  useEffect(() => {
    if (email === null || email === "") return router.replace("/");
  }, [email]);
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [IncorrectData, setIncorrectData] = useState([""]);

  const SendCode = async (code: string) => {
    setMessage("");
    setInputValue(code);
    if (code.length === 6) {
      setLoading(true);
      await axios
        .post(
          process.env.NEXT_PUBLIC_NODE_MODE === "development"
            ? `${process.env.NEXT_PUBLIC_API_LOCAL}/verifyCode`
            : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/verifyCode`,
          {
            email,
            code,
          }
        )
        .then((res) => {
          //   console.log("====================================");
          //   console.log(res);
          //   console.log("====================================");
          setLoading(false);
          if (res.data.status === "success") {
            toast.success(res.data.message, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            return setTimeout(() => {
              router.replace("/Auth/updatePassword?email=" + email);
            }, 1000);
          }
        })
        .catch(({ response }) => {
          //   console.log("====================================");
          console.log(response);
          //     console.log("====================================");
          setLoading(false);
          if (response.data.statusCode === 500) {
            return setIncorrectData([response.data.message as string]);
          }
        });
    }
  };
  return (
    <form className={`max-w-lg mx-auto`}>
      <ul className={`text-[#f07178]`}>
        {IncorrectData.map((item, index) => (
          <li key={`${index}-${Math.random()}`}>{item}</li>
        ))}
      </ul>
      <label
        htmlFor="name"
        className="mb-3 block text-lg font-medium text-dark dark:text-white"
      >
        كود تأكيد الحساب
      </label>
      <div className="flex gap-3">
        <input
          onChange={(e) => inputValue.length < 6 && SendCode(e.target.value)}
          type="text"
          name="name"
          value={inputValue}
          placeholder="ادخل كود تأكيد الحساب"
          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
        />
        {inputValue.length === 6 && (
          <button
            onClick={() => setInputValue("")}
            className={`text-white mx-2 bg-[#952525] px-3 py-2 rounded-md hover:bg-[#952525a7]`}
          >
            تفريغ
          </button>
        )}
      </div>
      {loading && (
        <div className="lds-spinner w-full">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {message.length > 2 && (
        <span className={`text-[#f07178] text-center`}>{message}</span>
      )}
    </form>
  );
}
