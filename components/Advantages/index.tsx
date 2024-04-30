import ItemsAdvantages from "./ItemsAdvantages";

export const AdvantagesData = [
  {
    title: "إمكانية إضافة صديق ",
    paragraph: `بإمكانك الأن إضافة الأصدقاء أو إضافة أفراد العائلة والإستمتاع 
بأفضل الأوقات المرحة, بدلاً من تضيع الوقت لتسجيل بيانات كل
احد علي حدة الأن بضغطة زر فقط اضف عدد لامحدود من من تحب`,
    timeView: 0,
    image: "/images/Advantages/addF.gif",
  },
  {
    title: "مرونة في عملية الدفع",
    paragraph: `نحن نقدم خيارات دفع متنوعة لتلبية احتياجاتك المالية بشكل مرن وملائم.
    مع خدماتنا، يمكنك تخصيص خطة دفع تتلاءم مع ميزانيتك وتفضيلاتك الشخصية بكل سهولة ومرونة.`,
    timeView: 0,
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712662767/wiuk0p8a8tv6qpwfvcgc.jpg",
  },
  {
    title: "تقليل التشتت",
    paragraph:
      "نظام الدفع الذي نقدمه يسهل عليك إدارة مالك بفعالية دون تشتت الاهتمامات.",
    timeView: 0,
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712662797/dohmxzucvikkydwkgrk2.jpg",
  },
  {
    title: "توفير خدمات داخل وسائل النتقل",
    paragraph:
      "نحن نقدم خدمات داخل وسائل النقل لتسهيل عملية الدفع وتوفير تجربة مريحة ومتكاملة لعملائنا.",
    timeView: 0,
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712662972/hdpx1mynzl2qxjmtapsc.jpg",
  },
];
export default function Advantages() {
  return (
    <section className={`pt-16 text-center xl:pt-0 `}>
      <div
        className={`relative h-[840px] bg-[url('/images/Advantages/Advantages.png')] bg-cover bg-no-repeat `}
      >
        <div className={`container flex flex-col items-end justify-start`}>
          <h1
            className={`w-full text-center text-3xl font-extrabold text-primary `}
          >
            بعض مزايا أجواء
          </h1>
          <ul
            className={`mt-[20px] flex w-full flex-row-reverse flex-wrap justify-between gap-[20px] lg:mt-[35px]`}
          >
            <ItemsAdvantages data={AdvantagesData} />
          </ul>
        </div>
      </div>
    </section>
  );
}
