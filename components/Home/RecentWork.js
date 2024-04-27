import React from "react";
import ProjectCard from "../ProjectCard";
import { data } from "autoprefixer";

const projects = [
  {
    title: "E-commerce App",
    content:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    techStack: ["React", "TailwindCSS", "Firebase"],
    imgUrl: "/images/NetflixDev.png",
  },
  {
    title: "E-commerce App",
    content:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    techStack: ["React", "TailwindCSS", "Firebase"],
    imgUrl: "/images/NetflixDev.png",
  },
  {
    title: "E-commerce App",
    content:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    techStack: [
      "React",
      "TailwindCSS",
      "Firebase",
      "Next.js",
      "Vercel",
      "MongoDB",
      "Express",
      "Node.js",
    ],
    imgUrl: "/images/NetflixDev.png",
  },
];

const RecentWork = () => {
  projects.map((project) => {
    console.log(project);
  });
  return (
    <div className="max-w-6xl px-4 mx-auto py-10 md:py-20 lg:mb-20 ">
      <div className="flex flex-col items-center m-auto max-w-3xl lg:px-40">
        <h3 className="relative z-10 text-center text-4xl md:text-5xl lg:text-4xl font-extrabold pb-2 text-slate-800">
          A glimpse of the digital wonders I've woven.
        </h3>
        <p className="font-normal text-base text-slate-700 mb-8">
          Take a peek at a few projects I've passionately crafted.
        </p>
      </div>
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        {projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              content={project.content}
              techStack={project.techStack}
              imgUrl={project.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentWork;
