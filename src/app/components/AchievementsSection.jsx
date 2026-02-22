"use client";

import React from "react";
import CountUp from "react-countup";

const achievementsList = [
  { metric: "AI & Full-Stack Projects Built", value: "10+" },
  { metric: "Early Users Across AI Products", value: "200+" },
  { metric: "Enterprise Environments Supported", value: "Multiple" },
  { metric: "Years of Coding Experience", value: "4+" },
];

const AchievementsSection = ({ theme }) => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div
        className={`sm:border ${
          theme === "dark" ? "sm:border-[#33353F]" : "sm:border-gray-200"
        } rounded-md py-8 px-8 sm:px-16 flex flex-col sm:flex-row items-center justify-between`}
      >
        {achievementsList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2
              className={`text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {typeof item.value === "number" ? (
                <CountUp end={item.value} duration={2} separator="," />
              ) : (
                <span>{item.value}</span>
              )}
            </h2>
            <p
              className={`text-base mt-1 text-center ${
                theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"
              }`}
            >
              {item.metric}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
