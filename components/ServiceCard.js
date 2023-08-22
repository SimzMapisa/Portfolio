import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, serviceDescription, iconUrl, margin }) => {
  return (
    <div className={margin}>
      <div className="hover:bg-slate-white hover:shadow-2xl hover:shadow-slate-300 rounded-lg p-6">
        {/* Icon */}
        <Image
          src={iconUrl}
          width="32"
          height="32"
          alt={title}
          className="mb-2"
        />
        {/* heading */}
        <h4 className="font-extrabold text-base text-slate-800 pb-2">
          {title}
        </h4>
        {/* Paragraph */}
        <p className="leading-6 text-sm font-medium text-slate-500 mt-1 mb-8">
          {serviceDescription}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
