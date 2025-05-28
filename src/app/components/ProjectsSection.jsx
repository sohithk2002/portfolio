"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
  id: 1,
  title: "AI Career Coach (JobXpert)",
  description:
    "Built a full-stack AI career assistant using Next.js 15, Gemini AI, and OpenAI. Features include resume and cover letter generation, real-time AI chat via WebSockets, Clerk-authenticated user roles, and Stripe-based subscription gating. Background jobs powered by Inngest deliver weekly job market insights. Deployed on Render with Neon for PostgreSQL and optimized AI performance with caching and rate-limiting.",
  imgUrls: [
    "/images/projects/jobxpert/1.png",
    "/images/projects/jobxpert/2.png",
    "/images/projects/jobxpert/3.png",
    "/images/projects/jobxpert/4.png",
    "/images/projects/jobxpert/5.png",
    "/images/projects/jobxpert/6.png",
    "/images/projects/jobxpert/7.png"
  ],
  tag: ["All", "Web", "AI", "Cloud", ],
  techStack: ["Next.js", "Gemini AI", "OpenAI", "Stripe", "Clerk", "WebSockets", "Inngest", "Neon"],
  gitUrl: "https://github.com/sohithk2002/jobXpert.git",
  previewUrl: "https://jobxpert.onrender.com/",
  featured: true,
  slug: "ai-career-coach-jobxpert"
},
  {
    id: 2,
    title: "job-market-insights & skill gap analysis (Salary Predictor)",
    description:
      "Built a full-stack data analytics platform with ML-powered salary prediction and interactive Tableau dashboards. Extracted skills using NLP (SpaCy + TF-IDF), trained a Random Forest model, and deployed the app using Flask, React.js, and Render. Enabled real-time insights into job trends, salaries, and in-demand skills.",
    imgUrls: [
      "/images/projects/salarypredictor/1.png",
      "/images/projects/salarypredictor/2.png",
      "/images/projects/salarypredictor/3.png",
      "/images/projects/salarypredictor/4.png",
      "/images/projects/salarypredictor/5.png"
    ],
    tag: ["All", "Web", "Data",],
    gitUrl: "https://github.com/sohithk2002/salary_predictor.git",
    previewUrl: "https://salary-predictor-mqio.onrender.com/"
  },
  {
    id: 3,
    title: "AI-Powered Splitwise  (SplitHack)",
  description:
    "Built a full-stack Splitwise clone with real-time expense tracking, group settlements, and AI-powered monthly spending insights. Leveraged Next.js, Convex, and Gemini AI for full-stack logic, background jobs, and generative reporting. Included Clerk-based authentication, Inngest cron jobs, and Recharts-based visualizations. Deployed on Render with a seamless UI built using Tailwind and Shadcn UI.",
  imgUrls: [
    "/images/projects/splithack/1.png",
    "/images/projects/splithack/2.png",
    "/images/projects/splithack/3.png",
    "/images/projects/splithack/4.png",
    "/images/projects/splithack/5.png",
    "/images/projects/splithack/6.png",
    "/images/projects/splithack/7.png"
  ],
  tag: ["All", "Web", "AI", "Cloud",],
  gitUrl: "https://github.com/sohithk2002/splithack.git",
  previewUrl: "https://splithack.onrender.com/expenses/new"
  },
  {
    id: 4,
    title: "Sohith kampaalli Portfolio",
    description:
      "Mobile-first food ordering app with menu browsing, cart, and checkout flow. Built using React Native and Firebase for real-time data sync.",
    imgUrls: [
      "/images/projects/portfolio/1.png",
      "/images/projects/portfolio/2.png",
      "/images/projects/portfolio/3.png",
      "/images/projects/portfolio/4.png",
      "/images/projects/portfolio/5.png"
    ],
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sohithk2002/portfolio.git",
    previewUrl: "https://portfolio-dejq.onrender.com"
  },
  {
    id: 5,
title: "FinGenius – AI Finance Tracker",
description: `
FinGenius is an AI-powered finance app that automates budgeting, expense tracking, and financial insights. Built with Next.js 15, React, and Tailwind CSS, it features Clerk-authenticated user flows, receipt scanning with Gemini AI, and interactive dashboards using Recharts. Automation is powered by Inngest (background jobs), with transactional emails via Resend. Backend runs on Prisma with a Neon PostgreSQL database, secured by Arcjet rate limiting and fingerprinting, and deployed on Render.
`,
imgUrls: [
  "/images/projects/fingenius/logo1.png",
  "/images/projects/fingenius/logo2.png",
  "/images/projects/fingenius/logo3.png",
  "/images/projects/fingenius/logo4.png",
  "/images/projects/fingenius/logo5.png",
  "/images/projects/fingenius/logo6.png",
  "/images/projects/fingenius/logo7.png",
  "/images/projects/fingenius/logo8.png",
  "/images/projects/fingenius/logo9.png"
],
tag: ["All", "Web", "AI" ,"Cloud"],
gitUrl: "https://github.com/sohithk2002/financeai",
previewUrl: "https://fingenius.onrender.com"
  },
  {
  id: 6,
  title: "AI Summarizer – Chrome Extension (Gemini API)",
  description: `
A lightweight Chrome extension that summarizes webpage content using Google's Gemini API. Built with HTML, CSS, and JavaScript, it includes a popup interface, content script for DOM interaction, and secure API key storage via chrome.storage. It leverages chrome.runtime messaging and clipboard integration for one-click copy functionality. The project follows Chrome extension best practices and is packaged for the Chrome Web Store with full privacy justifications.
  `,
  imgUrls: [
    "/images/projects/summarizer/1.png",
    "/images/projects/summarizer/2.png",
    "/images/projects/summarizer/3.png",
    "/images/projects/summarizer/4.png",
    "/images/projects/summarizer/5.png"
  ],
  tag: ["All", "Web", "AI", "Chrome"],
  gitUrl: "https://github.com/sohithk2002/ai-summerizer-chrome-extension",
  previewUrl: "https://chrome.google.com/webstore/detail/sohiths-ai-summarizer/<ehnclljgbeapoehcbcaffpfoakajlpoj>"
},
{
  id: 7,
  title: "Full-Stack Journal App – Next.js & Shadcn UI",
  description: `
A modern full-stack journaling application built using Next.js 15 (App Router), Tailwind CSS, and Shadcn UI. It features secure user authentication with Clerk, a NeonDB PostgreSQL database managed via Prisma ORM, and mood analytics visualized with Recharts. Users can create rich-text entries, organize them into collections, and monitor emotional trends over time.

The app includes dynamic routing for entries and collections, rate limiting and bot protection using Arcjet, and draft saving capabilities. Server actions power database queries and third-party API interactions. Built with a scalable folder structure and styled with utility-first principles.
  `,
  imgUrls: [
    "/images/projects/journal/1.png",
    "/images/projects/journal/2.png",
    "/images/projects/journal/3.png",
    "/images/projects/journal/4.png",
    "/images/projects/journal/5.png",
    "/images/projects/journal/6.png"
  ],
  tag: ["All", "Web", "Full-Stack", "AI", "Next.js"],
  gitUrl: "https://github.com/sohithk2002/Tracktide",
  previewUrl: "https://tracktide.onrender.com"
}
];

const ProjectsSection = ({ theme }) => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2
        className={`text-center text-4xl font-bold ${
          theme === "dark" ? "text-white" : "text-black"
        } mt-4 mb-8 md:mb-12`}
      >
        My Projects
      </h2>
      <div
  className={`${
    theme === "dark" ? "text-white" : "text-black"
  } flex flex-row sm:flex-wrap justify-start sm:justify-center items-center gap-2 px-4 py-6 overflow-x-auto whitespace-nowrap`}
>

        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
          theme={theme}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
          theme={theme}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
          theme={theme}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
          theme={theme}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cloud"
          isSelected={tag === "Cloud"}
          theme={theme}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
          theme={theme}
        />
      </div>
      <ul
  ref={ref}
  className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4"
>
  {filteredProjects.map((project, index) => (
    <motion.li
      key={index}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.3, delay: index * 0.4 }}
    >
      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        imgUrls={project.imgUrls}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        theme={theme}
      />
    </motion.li>
  ))}
</ul>

    </section>
  );
};

export default ProjectsSection;
