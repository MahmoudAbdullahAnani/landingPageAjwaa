import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "404 || Ajwaa || أجواء ",
};

export default function NotFound() {
  return (
    <div className={`dark:bg-black dark:text-[#fff] text-[#000] h-[100vh] w-[100%] flex justify-center items-center`}>
      <div>
        <Image className={`h-[400px] w-[100%]`} src={'/images/not-found.png'}  width={100} height={100} alt="404" />
      </div>
        <div className={`flex flex-col gap-5`}>
            <div>
                <h1 className={`text-3xl`}>404 - الصفحة غير موجودة</h1>
                <p className={`text-2xl`}>.الصفحة التي تبحث عنها غير موجودة</p>
            </div>
            <Link className={`text-center w-fit mx-auto bg-primary rounded-xl hover:bg-[#296677] duration-150 text-lg p-2 px-10 text-white`} href={'/'}>رجوع</Link>
        </div>
    </div>
  );
}
