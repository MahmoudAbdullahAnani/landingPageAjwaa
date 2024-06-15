"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { holdSignIn } from "@/public/MainSVGs";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

// Schema SignUp
const SignUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: "الاسم قصير" })
    .max(20, { message: "الاسم طويل" }),
  email: z.string().email({ message: "البريد الالكتروني غير صحيح" }),
  password: z
    .string()
    .min(3, { message: "كلمة المرور قصيرة" })
    .max(20, { message: "كلمة المرور طويلة" }),
});

type Inputs = {
  name: string;
  email: string;
  password: string;
};

function SignUpForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(SignUpSchema),
    mode: "onChange",
  });

  const [IncorrectData, setIncorrectData] = useState("");
  const onSubmit: SubmitHandler<Inputs> = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    setIncorrectData("");
    const lastName = name.split(" ")[1] || "";
    // 1) axios post req on /signup
    await axios
      .post(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/signup`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/signup`,
        {
          firstName: name.split(" ")[0] || "",
          lastName,
          email,
          userName: `${name.split(" ")[0]}-${lastName}`,
          password,
        }
      )
      .then((response) => {
        // console.log("====================================");
        // console.log(response);
        // console.log("====================================");
        // console.log({ data: response.data });
        // if (response?.data.token === "varification") {
        reset();
        return router.push(
          `/Auth/verifyAccount?email=${email}&userName=${`${
            name.split(" ")[0]
          }-${lastName}`}`
        );
        // }
      })
      .catch(({ response }) => {
        console.log(response);
        reset({ name: "", email: "", password: "" });
        console.log("====================================");
        console.log(response.data?.message);
        console.log("====================================");
        typeof response.data?.message === "string"
          ? setIncorrectData(response.data?.message as string)
          : setIncorrectData(response.data?.message[0] as string);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className={`text-[#f07178]`}>{IncorrectData}</span>
      <div className="mb-8">
        <label
          htmlFor="name"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          {" "}
          الاسم{" "}
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          name="name"
          placeholder="ادخل الاسم"
          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
        />
        <span className={`text-[#f07178] text-center`}>
          {errors.name && <span>{errors.name.message}</span>}
        </span>
      </div>
      <div className="mb-8">
        <label
          htmlFor="email"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          {" "}
          البريد الإلكتروني{" "}
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          name="email"
          placeholder="ادخل بريدك الكتروني"
          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
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
          {" "}
          كلمة السر{" "}
        </label>
        <input
          {...register("password", {
            required: "Password is required",
          })}
          type="password"
          name="password"
          placeholder="ادخل كلمة السر"
          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
        />
        <span className={`text-[#f07178] text-center`}>
          {errors.password && <span>{errors.password.message}</span>}
        </span>
      </div>
      <div className="mb-6">
        <button className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
          تسجيل
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
