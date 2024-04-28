"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative w-full py-16 min-h-[400px] bg-gradient-to-tl from-sky-500 via-indigo-500 to-fuchsia-500">
      <div className="flex flex-col px-4 lg:flex-row lg:px-0 max-w-5xl mx-auto items-center">
        <div className="flex-1 order-2 py-8 lg:order-1 lg:py-0 opacity-50">
          <Image
            src="/images/coder.svg"
            width="296"
            height="243"
            className="opacity-75"
          />
        </div>
        <div className="flex-1 order-1 lg:order-2 top-0 h-full lg:py-24 ">
          <div className="">
            <h4 className="text-slate-200 font-bold text-4xl relative z-10">
              About Me
            </h4>
            <p className="mt-4 text-slate-300 relative z-10 leading-7">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn&apos;t distract
              from the layout. A practice not without controversy, laying out
              pages with meaningless filler text can be very useful when the
              focus is meant to be on design, not content.
            </p>
            <p className="mt-4 text-slate-300 leading-7">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn&apos;t distract
              from the layout. A practice not without controversy, laying out
              pages with meaningless filler text can be very useful when the
              focus is meant to be on design, not content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
