"use client";

import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
// import Stars from "/assets/Icon/stars.svg";
// import ArrowBack from "/assets/Icon/eva_arrow-back-fill.svg";
// import ArrowNext from "/assets/Icon/eva_arrow-next-fill.svg";

const OffiersSlides = ({
  listTestimoni = [
    {
      name: "iezh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "iezh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "iezh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "iezh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 block h-4 w-4 cursor-pointer rounded-l-full rounded-r-full transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="flex items-stretch px-3" key={index}>
            <div className="border-gray-500 hover:border-orange-500 flex flex-col rounded-lg border-2 p-8 transition-all">
              <div className="flex w-full flex-col items-stretch xl:flex-row xl:items-center">
                <div className="order-2 flex xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="ml-5 flex flex-col text-left">
                    <p className="text-black-600 text-lg capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-black-500 text-sm capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="order-1 ml-auto flex flex-none items-center xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="ml-4 flex">
                    <div className="h-4 w-4">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z"
                          fill="#FEA250"
                        />
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-start">
        <div className="mt-14 flex w-auto flex-none justify-between">
          <div
            className="border-orange-500 hover:bg-orange-500 hover:text-white-500 text-orange-500 mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border bg-white transition-all"
            onClick={sliderRef?.slickPrev}
          >
            <div className="h-6 w-6 ">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="border-orange-500 hover:bg-orange-500 hover:text-white-500 text-orange-500 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border bg-white transition-all"
            onClick={sliderRef?.slickNext}
          >
            <div className="h-6 w-6">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffiersSlides;
