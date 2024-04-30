"use client";

import React, { useEffect, useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import { GetCustomers } from "@/fetching/Home";
// import Stars from "/assets/Icon/stars.svg";
// import ArrowBack from "/assets/Icon/eva_arrow-back-fill.svg";
// import ArrowNext from "/assets/Icon/eva_arrow-next-fill.svg";

const listTestimoni = [
  {
    name: "Ahmed Ali",
    email: "ahmed@gmail.com",
    avatar:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1709840409/p2ij52dcubjeanbmsqci.jpg",
    comment: "حقن انه رائع",
  },
  {
    name: "Nage Ali",
    email: "Nage@gmail.com",
    avatar:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1709840409/p2ij52dcubjeanbmsqci.jpg",
    comment: "حقن انه رائع",
  },
  {
    name: "Mohammed Ali",
    email: "Mohammed@gmail.com",
    avatar:
      "https://res.cloudinary.com/dxrgztsfz/image/upload/v1709840409/p2ij52dcubjeanbmsqci.jpg",
    comment: "حقن انه رائع",
  },
];
const SingleCustomer = ({ cartView }: { cartView: number }) => {
  const [data, setListTestimoni] = useState(listTestimoni);
  useEffect(() => {
    const fetching = async () => {
      setListTestimoni(await GetCustomers());
    };

    fetching();
  }, []);
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
    slidesToScroll: 1,

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
        {data.map(({ name, email, avatar, comment }, index) => (
          <div className="flex items-stretch px-3" key={index}>
            <div className="flex flex-col rounded-[16px] transition-all">
              <div
                style={{
                  boxShadow: "0px 4px 20px #00000017",
                  border: "solid 2px #117C99",
                }}
                className={`relative h-[360px] w-full rounded-[16px] bg-white shadow-xl dark:bg-[#1D2144] sm:h-[500px]`}
              >
                <h1
                  className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-black dark:text-white`}
                >
                  {comment}
                </h1>
                <div
                  className={`absolute bottom-0 flex w-full items-center justify-center gap-2 border-2 border-x-0 border-b-0 border-[#117C99] py-[22px]`}
                >
                  <div
                    className={`flex flex-col items-center justify-center gap-[13px] text-lg font-bold lg:text-2xl `}
                  >
                    <h3>{name}</h3>
                    <h4>{email}</h4>
                  </div>
                  <div>
                    <Image
                      className="h-[64px] w-[64px] rounded-full lg:h-[84px] lg:w-[84px]"
                      src={avatar}
                      width={100}
                      height={100}
                      alt={`ajwaa-${name}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SingleCustomer;
