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
// Schema Login
const LoginSchema = z.object({
  email: z.string().email({ message: "البريد الالكتروني غير صحيح" }),
  rememberMe: z.boolean(),
  password: z
    .string()
    .min(3, { message: "كلمة المرور قصيرة" })
    .max(20, { message: "كلمة المرور طويلة" }),
});

type Inputs = {
  email: string;
  password: string;
  rememberMe: string;
};
function SigninForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const [IncorrectData, setIncorrectData] = useState([]);

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
    rememberMe,
  }: {
    email: string;
    password: string;
    rememberMe: string;
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
          password,
        }
      )
      .then((response: any) => {
        // console.log({ data: response.data?.data });
        if (
          !response.data?.data.verificationAccountCode ||
          response.data?.data.verificationAccountCode !== "done"
        ) {
          router.replace("/signup");
          toast.error("عليك تأكيد الحساب ", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return toast.error(
            "اعد عملية التسجيل مرة اخري لكي يصلك كود التأكيد",
            {
              position: "bottom-right",
              autoClose: 8000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
        if (rememberMe) {
          window.localStorage.setItem(
            "userIdDB",
            response.data?.data._id || ""
          );
          window.localStorage.setItem(
            "userData",
            JSON.stringify(response.data?.data) || ""
          );
        } else {
          window.sessionStorage.setItem(
            "userIdDB",
            response.data?.data._id || ""
          );
          window.sessionStorage.setItem(
            "userData",
            JSON.stringify(response.data?.data) || ""
          );
        }
        return router.replace("/");
      });

    reset({ password: "" });
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
      <div className="mb-8">
        <label
          htmlFor="password"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          كلمة السر
        </label>
        <input
          {...register("password", {
            required: "Password is required",
          })}
          type="password"
          name="password"
          placeholder="ادخل كلمة السر خاصتك"
          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
        />
        <span className={`text-[#f07178] text-center`}>
          {errors.password && <span>{errors.password.message}</span>}
        </span>
      </div>
      <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="mb-4 sm:mb-0">
          <label
            htmlFor="checkboxLabel"
            className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
          >
            ابقني مسجل
            <div className="relative">
              <input
                {...register("rememberMe")}
                type="checkbox"
                id="checkboxLabel"
                className="sr-only"
              />
              <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                <span className="opacity-0">{holdSignIn()}</span>
              </div>
            </div>
          </label>
        </div>
        <div>
          <Link
            href={"/Auth/resetPassword"}
            className="text-sm font-medium text-primary hover:underline"
          >
            نسيت كلمة السر؟
          </Link>
        </div>
      </div>
      <div className="mb-6">
        <button className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
          تسجيل دخول
        </button>
      </div>
    </form>
  );
}

export default SigninForm;
