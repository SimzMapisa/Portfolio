import Image from "next/image";
import React from "react";
// import Button from "../Button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="justify-center flex pt-12">
        <Image
          className="absolute mt-36 z-0"
          src="/Elements.svg"
          width="1200"
          height="1200"
          alt="background design elements"
        />
        <div className="relative px-4 z-10 py-20 lg:py-40 md:grid md:grid-cols-12 max-w-6xl mx-auto">
          <div className=" lg:order-1 md:order-2 md:col-span-12 lg:col-span-6 mb-6 lg:pr-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-800 font-extrabold pb-4">
              Crafting stunning websites and apps that simply work.
            </h1>
            <p className=" font-normal text-base text-slate-700 mt-1 mb-8">
              From streamlining e-commerce checkouts to enhancing user
              experiences, we specialize in crafting stunning websites and apps
              that not only captivate but seamlessly function. My focus?
              Ensuring your digital presence not only dazzles but delivers
              results.
            </p>
            {/* <Button
							classes='bg-blue-900 text-white text-lg mt-5 px-8 py-3 rounded-md'
							title='My Work'
						/> */}

            <Link
              className="px-5 py-3 rounded-lg bg-violet-700 text-white"
              href="/portfolio"
              role="button"
            >
              <span>Projects</span>
              <span className="pl-3 text-2xl">&#8594;</span>
            </Link>
          </div>
          <div className="flex  lg:order-2 md:order-1 justify-center md:col-span-12 lg:col-span-6">
            <Image
              src="/simbarashe-mapisa-hero-img.svg"
              alt="code describing simbas skills"
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
