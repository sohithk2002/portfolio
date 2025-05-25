"use client";

import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProjectCard = ({ imgUrls = [], title, description, gitUrl, previewUrl, theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewText = description.slice(0, 120); // Show 120 characters initially

  return (
    <div>
      {/* Image carousel */}
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          allowTouchMove={imgUrls.length > 1}
        >
          {imgUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`${title} screenshot ${index + 1}`}
                className="w-full h-52 md:h-72 object-cover rounded-t-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 mt-4 px-4">
        <Link
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-sm px-4 py-2 border rounded-full transition ${
            theme === "dark"
              ? "text-white border-white hover:bg-white hover:text-black"
              : "text-black border-black hover:bg-black hover:text-white"
          }`}
        >
          <CodeBracketIcon className="h-5 w-5" />
          GitHub
        </Link>
        <Link
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-sm px-4 py-2 border rounded-full transition ${
            theme === "dark"
              ? "text-white border-white hover:bg-white hover:text-black"
              : "text-black border-black hover:bg-black hover:text-white"
          }`}
        >
          <EyeIcon className="h-5 w-5" />
          Live Demo
        </Link>
      </div>

      {/* Title + description */}
      <div
        className={`rounded-b-xl mt-3 py-6 px-4 ${
          theme === "dark" ? "bg-[#181818]" : "bg-gray-100"
        }`}
      >
        <h5
          className={`text-xl font-semibold mb-2 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h5>
        <p
          className={`${
            theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"
          } text-sm`}
        >
          {isExpanded ? description : `${previewText}... `}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 underline ml-1 text-sm"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
