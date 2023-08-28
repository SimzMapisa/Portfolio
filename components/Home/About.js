"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative w-full h-fit">
      <CldImage
        src="https://res.cloudinary.com/dr9t25eua/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1692799641/about-me_ngtfch.svg"
        alt="about sibarashe mapisa"
        width="1378"
        height="1378"
        zoom="0.5"
        className="w-full block h-full"
      />
      <div className="absolute top-0 h-full lg:py-24">
        <div className="">
          {/* <h3 className="text-[150px] uppercase font-extrabold absolute top-[-40px] z-0 text-[#1f172e]">
            Whoami
          </h3> */}
          <h4 className="text-slate-100 font-bold text-4xl relative z-10">
            About Me
          </h4>
          <p className="mt-4 text-slate-300 relative z-10 leading-7">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn&apos;t distract
            from the layout. A practice not without controversy, laying out
            pages with meaningless filler text can be very useful when the focus
            is meant to be on design, not content.
          </p>
          <p className="mt-4 text-slate-300 leading-7">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn&apos;t distract
            from the layout. A practice not without controversy, laying out
            pages with meaningless filler text can be very useful when the focus
            is meant to be on design, not content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
