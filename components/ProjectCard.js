import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, content, techStack, imgUrl }) => {
  return (
    <div className=" lg:w-[100%] flex my-4 border-2 rounded-lg overflow-hidden border-violet-700">
      <div className=" overflow-hidden w-[50%]">
        <Image
          src="/images/bg.png"
          width={300}
          height={400}
          className="object-cover scale-150"
          alt={title}
        />
      </div>
      <div className="py-5 px-7 flex max-w-[60%] flex-col justify-center">
        <div>
          <h3 className="text-lg font-semibold pb-4">{title}</h3>
          <p>{content}</p>
        </div>
        <div className="flex flex-wrap  mt-4 py-4 border-t-2 border-slate-200">
          {techStack.map((stack) => {
            return (
              <p className="mr-2 mb-2 flex items-center justify-center font-normal text-sm text-white px-3 py-1 rounded-full bg-violet-700">
                {stack}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
