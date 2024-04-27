import BtnLinkOffers from "../Common/BtnLinkOffers";

export default function JoinUsNow() {
  return (
    <section className={`pt-16 md:pt-20 lg:pt-28`}>
      <div
        className={`relative flex h-[531px] items-center justify-center bg-[url('/assets/DestinationSection/DestinationSection-1.png')] bg-cover bg-no-repeat `}
      >
        <div
          className={`absolute z-0 h-full w-full bg-[#117C99] opacity-[.35]`}
        ></div>
        <div
          className={` z-10 text-center text-[86px] font-[600] text-[#FFF] lg:text-[116.477px]`}
        >
          <h4 className={`text-5xl  font-[600]`}>
            إنضم النا الان واستمتع بأجواء <br />
            الرائعة داخل مصر
          </h4>
          <BtnLinkOffers />
        </div>
      </div>
    </section>
  );
}
