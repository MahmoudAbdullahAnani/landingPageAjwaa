import Link from "next/link";
import TopText from "./TopText";
import BtnLinkOffers from "@/components/Common/BtnLinkOffers";

export default function LeftHero() {
  return (
    <div dir="rtl">
      <div className="mb-[72px]">
        <TopText />
        <h3 className={`mt-[28px] text-start text-xl font-semibold text-white`}>
          تقدم أجواء تجربة استخدام مرنة من اجل الإستمتاع بالرحلات الجماعية و
          رحلات السفر لاستقشاف العالم و تقديم سلسلة من الفنادق الرائعة وتوفير
          سبل تنقل مريحة
        </h3>
      </div>
      <div className="text-start">
        <BtnLinkOffers />
      </div>
    </div>
  );
}
