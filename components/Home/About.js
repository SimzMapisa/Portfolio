"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative w-full py-16 min-h-[400px] bg-blue-950">
      <div className="flex max-w-5xl mx-auto items-center">
        <div className="flex-1 opacity-50">
          <Image src="/code.svg" width="296" height="243" />
        </div>
        <div className="flex-1 top-0 h-full lg:py-24 ">
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
