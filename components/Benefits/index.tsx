import SingleBenefit from "./SingleBenefit";

const data = [
  {
    image: "/images/Benefits/Benefits-1.png",
    text: `أجواء تساعدك علي 
تقليل التشتت`,
  },
  {
    image: "/images/Benefits/Benefits-2.png",
    text: `نظام نقاط مميز 
من اجلك`,
  },
  {
    image: "/images/Benefits/Benefits-3.png",
    text: `تجربة استخدام
 فرية`,
  },
];
export default function Benefits() {
  return (
    <section className={`pt-16 text-center md:pt-20 lg:pt-28`}>
      <div
        className={`relative flex flex-col items-center justify-around bg-[url('/images/customers/MapImage.png')] bg-cover bg-no-repeat `}
      >
        <h1 className={`text-3xl font-extrabold text-primary `}>
          الفوائد ممكن التمتع بها
        </h1>
        <p className={`mt-[13px] max-w-[568px] text-center text-[#117C99]`}>
          بإمكانك الأن إضافة الأصدقاء أو إضافة أفراد العالم والإستمتاع بأفضل
          الأوقات المرحة, بدلاً من تضيع الوقت لتسجيل بيانات كل احد علي حدة الأن
          بضغطة زر فقط اضف عدد لامحدود من من تحب
        </p>
        <div
          className={`gap-[100px] mt-[87px] grid grid-cols-1 justify-center items-end sm:grid-cols-2 lg:grid-cols-3`}
        >
          {data.map((item) => (
            <SingleBenefit key={item.image} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
