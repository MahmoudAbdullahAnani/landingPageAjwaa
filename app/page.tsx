import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JoinUsNow from "@/components/JoinUsNow";
import Contact from "@/components/Contact";
import Customers from "@/components/Customers";
import Benefits from "@/components/Benefits";
import Advantages from "@/components/Advantages";

export const metadata = {
  title: "Ajwaa || أجواء",
};
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <ScrollUp />
      <Hero />
      <Advantages />
      <Benefits />
      <Customers />
      <JoinUsNow />
      <Contact />
      {/* <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
    </>
  );
}
