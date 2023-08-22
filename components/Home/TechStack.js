import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 py-20 flex flex-col items-center relative">
      <div className="relative">
        <h4 className="text-9xl font-extrabold uppercase text-[#f8f8f8] absolute -translate-x-1/2 ml-[50%] ">
          Skills
        </h4>
      </div>
      <div className="relative z-10 text-center mt-8">
        <h5 className="relative z-10 text-4xl font-extrabold normal-case text-slate-800 mb-4">
          Tech Stack
        </h5>
        <Image
          src="/tech.png"
          width="500"
          height="50"
          alt="web technologies MERN stack"
        />
      </div>
    </div>
  );
};

export default TechStack;
