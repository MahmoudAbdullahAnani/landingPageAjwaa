"use client";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FormVerifyAccount() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const userName = searchParams.get("userName");

  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const SendCode = async (code: string) => {
    setMessage("");
    setInputValue(code);
    if (code.length === 6) {
      setLoading(true);
      await axios
        .patch(
          process.env.NEXT_PUBLIC_NODE_MODE === "development"
            ? `${process.env.NEXT_PUBLIC_API_LOCAL}/signup`
            : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/signup`,
          {
            email,
            userName,
            verificationAccountCode: code,
          }
        )
        .then((response) => {
          setLoading(false);
          window.sessionStorage.setItem(
            "userIdDB",
            response.data?.data._id || ""
          );
          window.sessionStorage.setItem(
            "userData",
            JSON.stringify(response.data?.data) || ""
          );
          return router.replace("/");
        })
        .catch(({ response }) => {
          console.log(response);
          setLoading(false);
          typeof response?.data?.message === "string"
            ? setMessage(response.data.message as string)
            : setMessage(response.data.message[0] as string);
        });
    }
  };
  return (
    <form className={`max-w-lg mx-auto`}>
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
