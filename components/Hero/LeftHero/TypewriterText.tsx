"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterText = ({ textArray }:{textArray:string[]}) => {
  return (
    <span dir="rtl" className="text-yellow">
      <Typewriter
        words={textArray}
        loop
        delaySpeed={2000}
        cursor
        cursorStyle="|"
        typeSpeed={300}
        deleteSpeed={400}
      />
    </span>
  );
};

export default TypewriterText;
