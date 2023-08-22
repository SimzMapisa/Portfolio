import React from "react";
import Form from "./../Form";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#3900DB] relative py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-12">
        <div className=" font-medium col-span-4 mr-6">
          <h1 className="font-extrabold text-4xl pb-4 text-slate-100">
            Let's get in touch.
          </h1>
          <p className="text-slate-200">
            The purpose of lorem ipsum is to create a natural looking block of
            text that doesn't distract from the layout. A practice not without
            controversy, laying out pages with meaningless filler text can be
            very useful when the focus is meant to be on design, not content.
          </p>
        </div>
        <div className="col-span-4">
          <Image
            src="/paper-plane.svg"
            alt="message sent"
            width="200"
            height="200"
          />
        </div>
        <div className="col-span-4 w-full ">
          <Form classes="absolute right-0 -translate-x-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
