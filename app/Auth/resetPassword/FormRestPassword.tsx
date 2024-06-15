"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { holdSignIn } from "@/public/MainSVGs";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
// Schema RestPassword
const RestPasswordSchema = z.object({
  email: z.string().email({ message: "البريد الالكتروني غير صحيح" })
});

type Inputs = {
  email: string;
};
function FormRestPassword() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(RestPasswordSchema),
    mode: "onChange",
  });

  const [IncorrectData, setIncorrectData] = useState([]);

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,

  }: {
    email: string;

  }) => {
    setIncorrectData([]);
    // console.log(data);
    // 1) axios post req on /signin
    await axios
      .post(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/signin`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/signin`,
        {
          email,

        }
      )
      .then((response: any) => {

      });

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className={`text-[#f07178]`}>
        {IncorrectData.map((item, index) => (
          <li key={`${index}-${Math.random()}`}>{item}</li>
        ))}
      </ul>
      <div className="mb-8">
        <label
          htmlFor="email"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          بريدك الالكتروني
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          name="email"
          placeholder="ادخل بريدك الالكتروني"
          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
        />
        <span className={`text-[#f07178] text-center`}>
          {errors.email && <span>{errors.email.message}</span>}
        </span>
      </div>

      <div className="mb-6">
        <button disabled={isSubmitting} className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
          ارسال كود التغيير
        </button>
      </div>
    </form>
  );
}

export default FormRestPassword;
