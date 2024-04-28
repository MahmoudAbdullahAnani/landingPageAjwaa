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

/*
    position: relative;
    padding-bottom: 323px;
    top: 240px;
*/
export default function Benefits() {
  return (
    // <section className={`pt-16 text-center md:pt-20 lg:pt-28 max-h-[842px]`}>
    <section
      className={`relative pt-16 text-center md:pt-0  bg-[url('/images/customers/MapImage.png')] bg-cover bg-no-repeat lg:top-[240px] lg:pb-[323px] `}
    >
      <div className={`container flex flex-col items-center justify-around`}>
        <h1 className={`text-3xl font-extrabold text-primary `}>
          الفوائد ممكن التمتع بها
        </h1>
        <p
          className={`mt-[13px] max-w-[552px] text-center text-xl font-semibold text-[#117C99]`}
        >
          بإمكانك الأن إضافة الأصدقاء أو إضافة أفراد العالم والإستمتاع بأفضل
          الأوقات المرحة, بدلاً من تضيع الوقت لتسجيل بيانات كل احد علي حدة الأن
          بضغطة زر فقط اضف عدد لامحدود من من تحب
        </p>
        <div
          className={`mt-[87px] grid grid-cols-1 items-end justify-center gap-[100px] sm:grid-cols-2 lg:grid-cols-3`}
        >
          {data.map((item) => (
            <SingleBenefit key={item.image} item={item} />
          ))}
        </div>
      </div>
    </section>
    // </section>
  );
}
