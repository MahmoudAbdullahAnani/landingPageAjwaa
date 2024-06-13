"use client";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import { AdvantagesData } from ".";
import Image from "next/image";

let itemIndex = 0;
export default function ItemsAdvantages({ data }: any) {
  // const { title, paragraph, timeView, image } = data;
  const [viewParagraph, setViewParagraph] = useState(
    itemIndex === 0 ? true : false
  );

  // const [itemIndex, setItemIndex] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);
  // console.log('====================================');

  // console.log('====================================');
  useEffect(() => {
    const timer1 = setInterval(() => {
      if (viewParagraph) {
        setProgress1((oldProgress) => {
          if (itemIndex !== 0) {
            return 0;
          }
          if (oldProgress === 100) {
            itemIndex =
              AdvantagesData.length > itemIndex + 1 ? itemIndex + 1 : 0;
            return 0;
          }
          const diff = Math.random() * 10;

          return Math.min(oldProgress + diff, 100);
        });
      }
    }, 500);
    const timer2 = setInterval(() => {
      if (viewParagraph) {
        setProgress2((oldProgress) => {
          if (itemIndex !== 1) {
            return 0;
          }
          if (oldProgress === 100) {
            itemIndex =
              AdvantagesData.length > itemIndex + 1 ? itemIndex + 1 : 0;
            return 0;
          }
          const diff = Math.random() * 10;

          return Math.min(oldProgress + diff, 100);
        });
      }
    }, 500);
    const timer3 = setInterval(() => {
      if (viewParagraph) {
        setProgress3((oldProgress) => {
          if (itemIndex !== 2) {
            return 0;
          }
          if (oldProgress === 100) {
            itemIndex =
              AdvantagesData.length > itemIndex + 1 ? itemIndex + 1 : 0;
            return 0;
          }
          const diff = Math.random() * 10;

          return Math.min(oldProgress + diff, 100);
        });
      }
    }, 500);
    const timer4 = setInterval(() => {
      if (viewParagraph) {
        setProgress4((oldProgress) => {
          if (itemIndex !== 3) {
            return 0;
          }
          if (oldProgress === 100) {
            itemIndex =
              AdvantagesData.length > itemIndex + 1 ? itemIndex + 1 : 0;
            return 0;
          }
          const diff = Math.random() * 10;

          return Math.min(oldProgress + diff, 100);
        });
      }
    }, 500);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, []);

  return (
    <>
      <div>
        <li
          // key={key}
          className="mt-[24px] flex max-w-lg flex-col items-start"
          dir="rtl"
        >
          <div className={`flex items-center gap-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <circle
                cx="7"
                cy="7.5"
                r="7"
                fill={progress1 !== 0 ? "#005A6C" : "#959595"}
              />
            </svg>
            <button
              onClick={() => (itemIndex = 0)}
              className={`cursor-pointer text-xl font-bold ${
                progress1 === 0
                  ? "text-[#959595]"
                  : "text-primary dark:text-white"
              } sm:text-2xl lg:text-xl xl:text-2xl`}
            >
              {AdvantagesData[0].title}
            </button>
          </div>
          {progress1 !== 0 && (
            <>
              <div
                className={`my-4 w-[60%] rotate-180 bg-transparent text-primary`}
              >
                <LinearProgress
                  variant="buffer"
                  valueBuffer={progress1}
                  value={progress1}
                  color="inherit"
                  sx={{ background: "transparent" }}
                />
              </div>
              <p className="text-start text-xl font-medium leading-relaxed text-primary dark:text-white sm:text-lg lg:text-xl xl:text-xl">
                {AdvantagesData[0].paragraph}
              </p>
            </>
          )}
        </li>
        <li
          // key={key}
          className="mt-[24px] flex max-w-lg flex-col items-start"
          dir="rtl"
        >
          <div className={`flex items-center gap-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <circle
                cx="7"
                cy="7.5"
                r="7"
                fill={progress2 !== 0 ? "#005A6C" : "#959595"}
              />
            </svg>
            <button
              onClick={() => (itemIndex = 1)}
              className={`cursor-pointer text-xl font-bold ${
                progress2 == 0
                  ? "text-[#959595]"
                  : "text-primary dark:text-white"
              } sm:text-2xl lg:text-xl xl:text-2xl`}
            >
              {AdvantagesData[1].title}
            </button>
          </div>
          {progress2 !== 0 && (
            <>
              <div
                className={`my-4 w-[60%] rotate-180 bg-transparent text-primary`}
              >
                <LinearProgress
                  variant="buffer"
                  valueBuffer={progress2}
                  value={progress2}
                  color="inherit"
                  sx={{ background: "transparent" }}
                />
              </div>
              <p className="text-start text-xl font-medium leading-relaxed text-primary dark:text-white sm:text-lg lg:text-xl xl:text-xl">
                {AdvantagesData[1].paragraph}
              </p>
            </>
          )}
        </li>
        <li
          // key={key}
          className="mt-[24px] flex max-w-lg flex-col items-start"
          dir="rtl"
        >
          <div className={`flex items-center gap-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <circle
                cx="7"
                cy="7.5"
                r="7"
                fill={progress3 !== 0 ? "#005A6C" : "#959595"}
              />
            </svg>
            <button
              onClick={() => (itemIndex = 2)}
              className={`cursor-pointer text-xl font-bold ${
                progress3 == 0
                  ? "text-[#959595]"
                  : "text-primary dark:text-white"
              } sm:text-2xl lg:text-xl xl:text-2xl`}
            >
              {AdvantagesData[2].title}
            </button>
          </div>
          {progress3 !== 0 && (
            <>
              <div
                className={`my-4 w-[60%] rotate-180 bg-transparent text-primary`}
              >
                <LinearProgress
                  variant="buffer"
                  valueBuffer={progress3}
                  value={progress3}
                  color="inherit"
                  sx={{ background: "transparent" }}
                />
              </div>
              <p className="text-start text-xl font-medium leading-relaxed text-primary dark:text-white sm:text-lg lg:text-xl xl:text-xl">
                {AdvantagesData[2].paragraph}
              </p>
            </>
          )}
        </li>
        <li
          // key={key}
          className="mt-[24px] flex max-w-lg flex-col items-start"
          dir="rtl"
        >
          <div className={`flex items-center gap-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <circle
                cx="7"
                cy="7.5"
                r="7"
                fill={progress4 !== 0 ? "#005A6C" : "#959595"}
              />
            </svg>
            <button
              onClick={() => (itemIndex = 3)}
              className={`cursor-pointer text-xl font-bold ${
                progress4 == 0
                  ? "text-[#959595]"
                  : "text-primary dark:text-white"
              } sm:text-2xl lg:text-xl xl:text-2xl`}
            >
              {AdvantagesData[3].title}
            </button>
          </div>
          {progress4 !== 0 && (
            <>
              <div
                className={`my-4 w-[60%] rotate-180 bg-transparent text-primary`}
              >
                <LinearProgress
                  variant="buffer"
                  valueBuffer={progress4}
                  value={progress4}
                  color="inherit"
                  sx={{ background: "transparent" }}
                />
              </div>
              <p className="text-start text-xl font-medium leading-relaxed text-primary dark:text-white sm:text-lg lg:text-xl xl:text-xl">
                {AdvantagesData[3].paragraph}
              </p>
            </>
          )}
        </li>
      </div>
      <div className={`mt-[20px] w-full lg:mt-[200px] lg:w-auto`}>
        <Image
          className={`h-full max-h-[300px] w-full max-w-[816px] md:max-h-[600px]`}
          src={AdvantagesData[itemIndex].image}
          width={400}
          height={400}
          alt={AdvantagesData[itemIndex].title}
        />
      </div>
    </>
  );
}
