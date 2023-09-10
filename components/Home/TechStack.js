import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <div className="max-w-6xl mx-auto pb-20 flex flex-col items-center relative">
      <div className="relative">
        <h4 className="text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase text-slate-100  absolute -translate-x-1/2 ml-[50%] tracking-tighter">
          Skills
        </h4>
      </div>
      <div className="relative z-10 text-center mt-8">
        <h5 className="relative z-10 text-4xl font-extrabold normal-case text-slate-800 mb-4">
          Tech Stack
        </h5>
        <div className="grid grid-cols-2 gap-8 md:flex md:items-center md:gap-6 md:max-w-5xl grayscale">
          <Image
            src="/express-js.svg"
            width="500"
            height="500"
            alt="express js framework"
            className="w-32 col-span-1"
          />
          <Image
            src="/next-js.svg"
            width="500"
            height="500"
            alt="next js framework"
            className="w-28 col-span-1"
          />
          <Image
            src="/react.svg"
            width="500"
            height="500"
            alt="react framework"
            className="w-16"
          />
          <Image
            src="/python.svg"
            width="500"
            height="500"
            alt="python flask rest api"
            className="w-14"
          />
          <Image
            src="/nodejs.svg"
            width="500"
            height="500"
            alt="node js framework"
            className="w-14"
          />
          <Image
            src="/typescript.svg"
            width="500"
            height="500"
            alt="typescript framework"
            className="w-14"
          />
          <Image
            src="/javascript-js.svg"
            width="500"
            height="500"
            alt="Javascript"
            className="w-14"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
