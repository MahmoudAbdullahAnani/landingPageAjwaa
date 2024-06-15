import { googleIcon, holdSignIn, bgSignIn } from "@/public/MainSVGs";
import Link from "next/link";
import SigninForm from "./SigninForm";

export const metadata = {
  title: "تسجيل دخول || Ajwaa || أجواء ",
};

const SigninPage = () => {
  return (
    <>
      <section
        className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
        dir="rtl"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  تسجيل الدخول إلى حسابك
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  قم بتسجيل الدخول إلى حسابك لإجراء عملية دفع أسرع.
                </p>
                <button className="mb-6 flex w-full items-center justify-center rounded-md bg-white p-3 text-base font-medium text-body-color shadow-one hover:text-primary dark:bg-[#242B51] dark:text-body-color dark:shadow-signUp dark:hover:text-white">
                  تسجيل الدخول بجوجل
                  <span className="mr-3">{googleIcon()}</span>
                </button>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    أو قم بتسجيل الدخول باستخدام بريدك الإلكتروني
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>
                </div>
                <SigninForm />
                <p className="text-center text-base font-medium text-body-color">
                  ليس لديك حساب؟ {` `}
                  <Link href="/signup" className="text-primary hover:underline">
                    قم بالتسجيل
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">{bgSignIn()}</div>
      </section>
    </>
  );
};

export default SigninPage;
