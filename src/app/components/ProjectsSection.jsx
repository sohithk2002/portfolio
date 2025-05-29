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
    tag: ["All", "Web", "AI", "Cloud"],
    techStack: ["Next.js", "Gemini AI", "OpenAI", "Stripe", "Clerk", "WebSockets", "Inngest", "Neon"],
    gitUrl: "https://github.com/sohithk2002/jobXpert.git",
    previewUrl: "https://jobxpert.onrender.com/",
    featured: true,
    slug: "ai-career-coach-jobxpert"
  },
  {
    id: 2,
    title: "Job Market Insights & Salary Prediction",
    description:
      "Developed a full-stack job market analytics tool blending NLP-based skill extraction (SpaCy, TF-IDF), ML-driven salary prediction (Random Forest), and dynamic Tableau dashboards. Backend built with Flask; frontend with React.js. Real-time insights into job trends and demand-skill gaps deployed via Render.",
    imgUrls: [
      "/images/projects/salarypredictor/1.png",
      "/images/projects/salarypredictor/2.png",
      "/images/projects/salarypredictor/3.png",
      "/images/projects/salarypredictor/4.png",
      "/images/projects/salarypredictor/5.png"
    ],
    tag: ["All", "Web", "Data"],
    gitUrl: "https://github.com/sohithk2002/salary_predictor.git",
    previewUrl: "https://salary-predictor-mqio.onrender.com/"
  },
  {
    id: 3,
    title: "AI-Powered Splitwise (SplitHack)",
    description:
      "Created a real-time expense management platform with group settlements and AI-powered spending summaries. Built with Next.js, Convex, Gemini AI, and Recharts. Used Clerk for auth, Inngest for background jobs, and deployed on Render with full-stack AI integration and cloud scalability.",
    imgUrls: [
      "/images/projects/splithack/1.png",
      "/images/projects/splithack/2.png",
      "/images/projects/splithack/3.png",
      "/images/projects/splithack/4.png",
      "/images/projects/splithack/5.png",
      "/images/projects/splithack/6.png",
      "/images/projects/splithack/7.png"
    ],
    tag: ["All", "Web", "AI", "Cloud"],
    gitUrl: "https://github.com/sohithk2002/splithack.git",
    previewUrl: "https://splithack.onrender.com/expenses/new"
  },
  {
    id: 4,
    title: "Personal Portfolio Website with AI Chatbot",
    description:
      "Crafted a mobile-responsive developer portfolio using React.js, Tailwind CSS, and deployed on Render. Integrated a custom AI chatbot using Vector AI and Gemini API to interactively answer questions about my background, skills, and projects. Fully responsive and recruiter-focused design with dark/light theme toggle.",
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
    description:
      "FinGenius automates personal finance with AI-based receipt scanning, budget tracking, and visual reports. Built using Next.js, React, Prisma, Recharts, and Inngest with Clerk-based auth. Cloud-native deployment on Render, and rate-limited backend via Arcjet and NeonDB. Tailored for scalability and insights.",
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
    tag: ["All", "Web", "AI", "Cloud"],
    gitUrl: "https://github.com/sohithk2002/financeai",
    previewUrl: "https://fingenius.onrender.com"
  },
  {
    id: 6,
    title: "AI Summarizer – Chrome Extension (Gemini API)",
    description:
      "Developed a Chrome extension that uses Gemini API to summarize webpage content on-the-fly. Built with vanilla JS, Chrome APIs, and secure storage. One-click copy to clipboard, responsive popup UI, and optimized for Chrome Web Store publishing with minimal permissions.",
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
    description:
      "Modern journaling app built with full-stack Next.js 15 (App Router), Prisma + NeonDB, Clerk auth, and mood analytics using Recharts. Features include draft saving, emotional trend tracking, Arcjet rate-limiting, and modular architecture designed for future extensibility.",
    imgUrls: [
      "/images/projects/journal/1.png",
      "/images/projects/journal/2.png",
      "/images/projects/journal/3.png",
      "/images/projects/journal/4.png",
      "/images/projects/journal/5.png",
      "/images/projects/journal/6.png"
    ],
    tag: ["All", "Web"],
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
