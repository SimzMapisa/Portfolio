import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="mx-auto max-w-6xl px-40 text-center flex flex-col items-center py-40">
      <h2 className="pb-4 font-extrabold text-4xl text-slate-600">
        Under Development
      </h2>
      <p className="pb-8 text-slate-500">
        Please bear with me this section and some parts of this site are still
        under development content will be available as soon as I am done
        developing
      </p>
      <Image
        src="/underDevelopment.svg"
        width="600"
        height="500"
        alt="under construction"
      />
    </div>
  );
};

export default Portfolio;
