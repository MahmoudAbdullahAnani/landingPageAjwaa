/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import LeftHero from "./LeftHero/LeftHero";
import RightHero from "./RightHero/RightHero";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 h-[100vh] overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container lg:pr-0 lg:mr-0  ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto flex gap-10 flex-wrap lg:flex-nowrap text-center"
                data-wow-delay=".2s"
              >
                <LeftHero />
                <div className={`max-w-[60%]`}>
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
            className="h-[100vh] w-[100vw] object-cover opacity-60 dark:opacity-50 "
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
