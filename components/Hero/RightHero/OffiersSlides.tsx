"use client";

import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
// import Stars from "/assets/Icon/stars.svg";
// import ArrowBack from "/assets/Icon/eva_arrow-back-fill.svg";
// import ArrowNext from "/assets/Icon/eva_arrow-next-fill.svg";

const listTestimoni = [
  {
    name: "شرم الشيخ",
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712662767/wiuk0p8a8tv6qpwfvcgc.jpg",
    itemLink: "/",
    countRating: "200",
    rating: "4.5",
  },
  {
    name: "المسجد الحرام",
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712662797/dohmxzucvikkydwkgrk2.jpg",
    itemLink: "/",
    countRating: "200",
    rating: "4.5",
  },
  {
    name: "شرم الشيخ",
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712662972/hdpx1mynzl2qxjmtapsc.jpg",
    itemLink: "/",
    countRating: "200",
    rating: "4.5",
  },
  {
    name: "شرم الشيخ",
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712663033/q8eksogrqjsnreszcs6d.jpg",
    itemLink: "/",
    countRating: "200",
    rating: "4.5",
  },
  {
    name: "شرم الشيخ",
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712662797/dohmxzucvikkydwkgrk2.jpg",
    itemLink: "/",
    countRating: "200",
    rating: "4.5",
  },
  {
    name: "شرم الشيخ",
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712662767/wiuk0p8a8tv6qpwfvcgc.jpg",
    itemLink: "/",
    countRating: "200",
    rating: "4.5",
  },
  {
    name: "شرم الشيخ",
    image:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1712662797/dohmxzucvikkydwkgrk2.jpg",
    itemLink: "/",
    countRating: "200",
    rating: "4.5",
  },
];
const OffiersSlides = ({ cartView }: { cartView: number }) => {
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
    speed: 600,
    slidesToShow: cartView,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 180,
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
        {listTestimoni.map(
          ({ name, itemLink, rating, countRating, image }, index) => (
            <div className="flex items-stretch px-3" key={index}>
              <div className="flex flex-col rounded-[16px] transition-all">
                <Link
                  href={itemLink}
                  // style={{ boxShadow: "0 4px 20px #000000" }}
                  className="flex h-[243px] flex-col items-stretch rounded-[16px] lg:w-[424px]"
                  key={index}
                >
                  <div className={`relative `}>
                    <div
                      dir="rtl"
                      className={`absolute top-5 left-0 flex gap-3 px-[29px] text-end text-lg font-semibold text-white `}
                    >
                      <h3>
                        <span
                          className={`rounded-[5px] bg-[#117C99] p-1 text-center`}
                        >
                          {rating}
                        </span>
                        {` `}
                        {+rating > 5 ? "ممتاز" : "جيد"}
                      </h3>
                      <h3>
                        {countRating}
                        {` `}
                        <span>تقييم </span>
                      </h3>
                    </div>
                    <img
                      className={` h-[calc(243px-56px)] w-[424px] rounded-t-[16px] object-fill`}
                      src={image}
                      height={100}
                      width={100}
                      alt={name}
                    />
                  </div>

                  <h4
                    className={`flex h-[56px] items-center justify-center rounded-b-[16px] bg-[#ffffff52] text-center text-xl font-extrabold text-black backdrop-blur-[10px] dark:bg-[#ffffff52] dark:text-white`}
                  >
                    {name}
                  </h4>
                </Link>
              </div>
            </div>
          )
        )}
      </Slider>
      <div dir={`ltr`} className=" flex w-full items-center justify-center">
        <div className="mt-14 flex w-auto flex-none justify-between gap-5">
          <div
            className={`rotate-180 cursor-pointer`}
            onClick={sliderRef?.slickPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
            >
              <g filter="url(#filter0_b_2901_2454)">
                <rect
                  width="48"
                  height="48"
                  rx="24"
                  transform="matrix(-1 0 0 1 48.6387 0)"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  d="M22.1041 29.0698L27.1738 24L22.1041 18.9302"
                  stroke="#F7AE1D"
                  strokeWidth="1.68992"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_2901_2454"
                  x="-7.81094"
                  y="-8.44961"
                  width="64.8992"
                  height="64.8992"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="4.22481"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2901_2454"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2901_2454"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={`cursor-pointer`} onClick={sliderRef?.slickNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
            >
              <g filter="url(#filter0_b_2901_2454)">
                <rect
                  width="48"
                  height="48"
                  rx="24"
                  transform="matrix(-1 0 0 1 48.6387 0)"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  d="M22.1041 29.0698L27.1738 24L22.1041 18.9302"
                  stroke="#F7AE1D"
                  strokeWidth="1.68992"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_2901_2454"
                  x="-7.81094"
                  y="-8.44961"
                  width="64.8992"
                  height="64.8992"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="4.22481"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2901_2454"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2901_2454"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffiersSlides;
