"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";


const TypewriterText = ({ textArray }) => {
  return (
    <span dir="rtl" className="text-yellow">
      <Typewriter
        words={textArray}
        loop
        delaySpeed={2000}
        cursor
        cursorStyle="|"
        typeSpeed={300}
      />
    </span>
  );
};

export default TypewriterText;
