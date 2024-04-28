/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import LeftHero from "./LeftHero/LeftHero";
import RightHero from "./RightHero/RightHero";
import OffiersSlides from "./RightHero/OffiersSlides";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-32 md:pt-[190px] md:pb-[160px] xl:pt-[220px] xl:pb-[200px] 2xl:pt-[250px] 2xl:pb-[200px]"
      >
        <div className="container lg:mr-0 lg:pr-0   ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto flex flex-wrap gap-10 text-center lg:flex-nowrap"
                data-wow-delay=".2s"
              >
                <div className="p-[1rem]">
                  <LeftHero />
                </div>
                <div className={`hidden max-w-[60%] xl:block`}>
                  <RightHero />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-[-1] bg-black">
          <img
            src="/images/hero/hero.png"
            alt="logo"
            width={100}
            height={100}
            className="h-[100vh] w-[100vw]  opacity-60 dark:opacity-50 "
          />
        </div>
      </section>
      <section className="m-0 block w-full bg-[#6b6b6b29] py-5 xl:hidden">
        <div className="">
          <OffiersSlides cartView={1} />
        </div>
      </section>
    </>
  );
};

export default Hero;
