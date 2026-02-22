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
          <h1
            className={`mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sohith Kampalli", 1100,
"AI & Full-Stack Product Engineer", 1100,
"Autonomous Agents & Automation", 1100,
"Next.js • React • Python", 1100,
"GPT • Gemini • Claude", 1100,
"AWS • GCP • Cloud Systems", 1100,
"Building Real-World AI Products", 1100,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>

          {/* Professional Summary — aligned to resume */}
          <p
            className={`text-base sm:text-lg mb-6 lg:text-xl ${
              theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"
            }`}
          >
            AI & Full-Stack <strong>Product Engineer</strong> specializing in building intelligent automation systems and scalable web applications using <strong>Next.js, React, Node.js, Python, and cloud-native technologies</strong>. Known for developing real-world AI solutions including an autonomous browser agent capable of executing complex tasks across websites using natural language. Experienced in integrating modern AI models (<strong>GPT, Gemini, Claude</strong>) and delivering secure, production-ready platforms on <strong>AWS</strong>, <strong>GCP</strong>, and modern cloud infrastructure. Skilled in <strong>AI agents</strong>, <strong>automation workflows</strong>, <strong>microservices architecture</strong>, and <strong>end-to-end product development</strong> across full stack systems (PostgreSQL, MongoDB, SQL). Certified in AWS and cloud technologies, with enterprise experience in identity management, endpoint systems, and secure infrastructure, consistently building solutions that improve efficiency, reliability, and user experience.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-opacity-80 text-white text-center"
            >
              Hire Me
            </Link>

            {/* Keep your download button, just make the file name safe and predictable */}
            <Link
              href="/Sohith_Kampalli_Resume.pdf"
              download
              className="px-1 py-1 inline-block w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              <span
                className={`block px-6 py-2 rounded-full text-center font-medium ${
                  theme === "dark"
                    ? "bg-[#121212] text-white hover:bg-transparent hover:text-white"
                    : "bg-white text-black hover:bg-transparent hover:text-white"
                } transition-colors duration-300`}
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
              alt="Sohith Kampalli avatar"
              className="object-cover rounded-full"
              fill
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
