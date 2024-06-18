"use client";
import NewsLatterBox from "./NewsLatterBox";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLInputElement>(null);
  const onSubmit = async (e: Event) => {
    e.preventDefault();
    if (name.length < 3) {
      nameRef.current?.focus();
      return toast.error("Name must be at least 3 characters");
    }
    if (email.length < 11) {
      emailRef.current?.focus();
      return toast.error("Email Not Valid");
    }
    if (msg.length < 5) {
      msgRef.current?.focus();
      return toast.error("Message must be at least 5 characters");
    }
    // send

    await axios
      .post(
        process.env.NEXT_PUBLIC_NODE_MODE === "development"
          ? `${process.env.NEXT_PUBLIC_API_LOCAL}/msg`
          : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/msg`,
        {
          name,
          email,
          msg,
        }
      )
      .then((res) => {
        console.log(res.data);
        setEmail("");
        setName("");
        setMsg("");
        toast.success(res.data.message);
      })
      .catch((err) => {
        // setErrorGender(err);
        typeof err.response.data.message !== "string" &&
          toast.error(err.response.data.message[0]);
        typeof err.response.data.message === "string" &&
          toast.error(err.response.data.message);
        console.log("Sub Msg ===> ", err.response.data.message);
      });
  };

  return (
    <section
      dir="rtl"
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28 "
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-[#117C99] dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {"هل تحتاج مساعدة؟"}
              </h2>
              <p className="mb-12 text-base font-medium text-[#333333] dark:text-white">
                {
                  "دعم على مدار الساعة طوال أيام الأسبوع: نحن هنا لدعمك في كل خطوة من اجل التمتع بأفضل تجربة"
                }
              </p>
              {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment //
              @ts-ignore */}
              <form onSubmit={onSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-2xl font-medium text-black dark:text-white"
                      >
                        {"الإسم"}
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder={"ادخل اسمك"}
                        className="w-full rounded-md border border-[#117C99] py-3 px-6 text-base text-[#000] placeholder-[#A3A3A3] shadow-one outline-none focus:border-[#2ABDE4] focus-visible:shadow-none  dark:text-white "
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-2xl font-medium text-black dark:text-white"
                      >
                        {"البريد الالكتروني"}
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder={"ادخل بريدك الالكتروني"}
                        className="w-full rounded-md border border-[#117C99] py-3 px-6 text-base text-[#000] placeholder-[#A3A3A3] shadow-one outline-none focus:border-[#2ABDE4]  focus-visible:shadow-none "
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-2xl font-medium text-black dark:text-white"
                      >
                        {"الرسالة"}
                      </label>
                      <textarea
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        name="message"
                        rows={5}
                        placeholder={"الرسالة او السؤال"}
                        className="w-full rounded-md border border-[#117C99] py-3 px-6 text-base text-[#000] placeholder-[#A3A3A3] shadow-one outline-none focus:border-[#2ABDE4]  focus-visible:shadow-none "
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    {/* <input
                      type="submit"
                      value={
                        <>
                          <span>{t("Send Message")}</span>
                          <span className="text-[#fff]">{send}</span>
                        </>
                      }
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      onClick={onSubmit}
                      className="rounded-2xl flex gap-2 items-center justify-center bg-[#117C99] py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    /> */}
                    <button
                      name="submit"
                      type="submit"
                      // @ts-ignore
                      onSubmit={onSubmit}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-[#117C99] py-4 px-9 text-2xl font-bold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    >
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.5 2L15.5 22L11.5 13L2.5 9L22.5 2Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22.5 2L11.5 13"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{"أرسال"}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
