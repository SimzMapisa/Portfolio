import React from "react";
import Portfolio from "./../../app/portfolio/page";
import Link from "next/link";
import ProjectCard from "../ProjectCard";
import Image from "next/image";

const RecentWork = () => {
  return (
    <div className="max-w-6xl px-4 mx-auto py-10 md:py-20 lg:mb-20 flex flex-col lg:flex-row">
      <div className="mb-20 md:mb-10 lg:mb-0">
        <div className="absolute lg:translate-y-0 md:-translate-y-1/4 ml-4">
          <h2 className="text-7xl md:text-8xl lg:text-9xl uppercase font-extrabold lg:leading-[120px] text-slate-100 flex flex-col tracking-tighter">
            Port <span>folio</span>
          </h2>
          <Image
            className="absolute right-[-80px] bottom-[-180px] hidden lg:block"
            src="/arrow1.png"
            height="200"
            width="200"
            alt="arrow pointing to project card"
          />
        </div>
        <div className="h-full flex flex-col justify-start pt-4 lg:pr-40">
          <h3 className="relative z-10 text-4xl md:text-5xl lg:text-4xl font-bold pb-4 text-slate-800">
            Some of my work
          </h3>
          <p className="leading-7 relative z-10 tracking-tight font-medium text-slate-500 mt-1 mb-4">
            Here are a few projects I have worked on and crafted with love to
            see more, visit my{" "}
            <Link
              href="/portfolio"
              className="font-bold text-blue-800 underline"
            >
              portfolio page.
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:mt-8">
        <div className="flex flex-col  sm:flex-row">
          <ProjectCard
            margin="mb-6 sm:mr-4 sm:mb-0"
            title="Airbnb UI Clone"
            type="UX/UI Design Project"
            techStack="Figma, After Effects"
            imgUrl="/airbnb-ui.png"
          />

          <ProjectCard
            title="Netflix Clone"
            type="Development"
            techStack="Nodejs, firebase, ReactJs, IMDB API"
            imgUrl="/NetflixDev.png"
          />
        </div>
        <div className="mt-4">
          <Link
            href="/portfolio"
            className="flex items-center text-lg text-blue-800 font-bold"
          >
            View more <span className="text-5xl pl-4">&#10230;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
