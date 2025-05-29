"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = ({ theme }) => {
  return (
  <section className="lg:py-16 px-4 sm:px-8">
  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="md:col-span-7 text-center md:text-left"
    >
      <h1 className={`mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ${theme === "dark" ? "text-white" : "text-black"}`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
          Hello, I&apos;m{" "}
        </span>
        <br />
        <TypeAnimation
          sequence={[
            "Sohith Kampalli", 1000,
            "AI-Powered", 1000,
            "Cloud-Native", 1000,
            "Full-Stack Developer", 1000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
        />
      </h1>
      <p className={`text-base sm:text-lg mb-6 lg:text-xl ${theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"}`}>
        AI-Driven Full-Stack & Cloud Engineer with experience building scalable, data-rich applications using React.js, Next.js, Node.js, and Prisma. Proficient in integrating OpenAI/Gemini APIs, automating data pipelines with Pandas and PostgreSQL, and deploying systems on AWS, GCP, and Render. Skilled in CI/CD, Docker, Kubernetes, and serverless architectures. Passionate about turning raw data into actionable insights through modern cloud-native engineering.
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
        <Link
          href="/#contact"
          className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-opacity-80 text-white text-center"
        >
          Hire Me
        </Link>
        <Link
  href="/Sohith Kampalli_updated resume.pdf"
  download
  className="px-1 py-1 inline-block w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 transition-all"
>
  <span
    className={`
      block px-6 py-2 rounded-full text-center font-medium
      ${theme === "dark"
        ? "bg-[#121212] text-white hover:bg-transparent hover:text-white"
        : "bg-white text-black hover:bg-transparent hover:text-white"}
      transition-colors duration-300
    `}
  >
    📄 Download CV
  </span>
</Link>

      </div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="md:col-span-5 flex justify-center"
    >
      <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
        <Image
          src="/images/hero-image.avif"
          alt="Sohith Avatar"
          className="object-cover rounded-full"
          fill
        />
      </div>
    </motion.div>
  </div>
</section>

  );
};

export default HeroSection;
