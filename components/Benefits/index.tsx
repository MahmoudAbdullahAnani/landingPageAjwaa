import Customers from "../Customers";

export default function Benefits() {
  return (
    <section className={`pt-16 text-center md:pt-20 lg:pt-28`}>
      <div
        className={`relative flex flex-col items-center justify-around bg-[url('/images/customers/MapImage.png')] bg-cover bg-no-repeat `}
      >
        <h1 className={`text-3xl font-extrabold text-primary `}>
          الفوائد ممكن التمتع بها
        </h1>
        <p className={`text-[#117C99] text-center mt-[13px]`}>
          بإمكانك الأن إضافة الأصدقاء أو إضافة أفراد العالم والإستمتاع بأفضل
          الأوقات المرحة, بدلاً من تضيع الوقت لتسجيل بيانات كل احد علي حدة الأن
          بضغطة زر فقط اضف عدد لامحدود من من تحب
        </p>
        <div className={`flex max-w-[400px] overflow-x-scroll`}></div>
      </div>
    </section>
  );
}
