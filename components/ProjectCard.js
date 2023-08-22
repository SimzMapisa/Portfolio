import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, techStack, type, imgUrl, margin }) => {
  console.log(title, techStack);
  return (
    <div className={margin}>
      <div className="bg-white shadow-lg shadow-slate-100 min-h-full pb-4 rounded-lg">
        <div className="mb-4">
          <Image src={imgUrl} width="400" height="300" alt={title + "image"} />
        </div>
        <div className="pl-4">
          <h2 className="font-bold text-blue-900">{title}</h2>
          <h4 className="text-slate-700 font-medium">{type}</h4>
          <p className="text-xs pt-4 text-slate-600">{techStack}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
