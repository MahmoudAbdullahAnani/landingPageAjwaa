"use client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  holdSignIn,
  iconShowPasswordNot,
  iconShowPassword,
} from "@/public/MainSVGs";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

// Schema updatePassword
const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(3, { message: "كلمة المرور قصيرة" })
      .max(20, { message: "كلمة المرور طويلة" }),
    confirmPassword: z
      .string()
      .min(3, { message: "كلمة المرور قصيرة" })
      .max(20, { message: "كلمة المرور طويلة" }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "كلمات المرور غير متطابقة",
    path: ["confirmPassword"], // path of error
  });

type Inputs = {
  password: string;
  confirmPassword: string;
};
function FormUpdatePassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  useEffect(() => {
    if (email === null || email === "") return router.replace("/");
  }, [email]);
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(updatePasswordSchema),
    mode: "onChange",
  });

  const [IncorrectData, setIncorrectData] = useState("");
  const onSubmit: SubmitHandler<Inputs> = async ({
    password,
    confirmPassword,
    
  }: Inputs) => {
    setIncorrectData("");
    // 1) axios post req on /updatePassword
    await axios
      .post(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/updatePassword`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/updatePassword`,
        {
          password,
          confirmPassword,
          email
        }
      )
      .then((res) => {
        // console.log("====================================");
        // console.log(res);
        // console.log("====================================");
        if (res.data._id.length > 0) {
          toast.success('تم تغيير كلمة المرور', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          reset();
          return router.push("/signin");
        }
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };
  return (
    <form className={`max-w-lg mx-auto`} onSubmit={handleSubmit(onSubmit)}>
      <span className={`text-[#f07178]`}>{IncorrectData}</span>

      <div className="mb-8">
        <label
          htmlFor="password"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          {" "}
          كلمة السر{" "}
        </label>
        <div className={`relative`}>
          <span
            className={`cursor-pointer rounded-full absolute top-[50%] left-[5%] translate-x-[-50%] translate-y-[-50%]`}
            onClick={() => setViewPassword(!viewPassword)}
          >
            {viewPassword ? iconShowPassword() : iconShowPasswordNot()}
          </span>
          <input
            {...register("password", {
              required: "Password is required",
            })}
            type={viewPassword ? "text" : "password"}
            name="password"
            placeholder="ادخل كلمة السر"
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-updatePassword"
          />
        </div>
        <span className={`text-[#f07178] text-center`}>
          {errors.password && <span>{errors.password.message}</span>}
        </span>
      </div>

      <div className="mb-8">
        <label
          htmlFor="password"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          {" "}
          تاكيد كلمة السر{" "}
        </label>
        <div className={`relative `}>
          <span
            className={`cursor-pointer rounded-full absolute top-[50%] left-[5%] translate-x-[-50%] translate-y-[-50%]`}
            onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
          >
            {viewConfirmPassword ? iconShowPassword() : iconShowPasswordNot()}
          </span>
          <input
            {...register("confirmPassword", {
              required: "confirm Password is required",
            })}
            type={viewConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="تاكيد كلمة السر"
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-updatePassword"
          />
        </div>
        <span className={`text-[#f07178] text-center`}>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </span>
      </div>
      <div className="mb-6">
        <button
          className={`flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out  ${
            isSubmitting ? "bg-opacity-5" : "hover:bg-opacity-80"
          } hover:shadow-updatePassword`}
        >
          تغيير كلمة السر
        </button>
      </div>
    </form>
  );
}

export default FormUpdatePassword;
