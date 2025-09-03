"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Keep your existing FA icons for HTML/CSS
import { FaHtml5, FaCss3Alt, FaAws, FaMicrosoft, FaDatabase } from "react-icons/fa";

// Keep these Simple-Icons that are known-good in react-icons
import {
  SiAngular,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiGit,
  SiJenkins,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiSwagger,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

// Use Tabler fallbacks for the ones failing in your build
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";

// Lightweight dot placeholder for ".NET" (you can keep this or swap to any icon you like)
import { LiaDotCircle } from "react-icons/lia";

const SkillsGrid = () => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
    {/* Languages / Frameworks */}
    <div className="flex flex-col items-center"><TbBrandCSharp className="text-4xl mb-2" /><span>C#</span></div>
    <div className="flex flex-col items-center"><LiaDotCircle className="text-4xl mb-2" /><span>.NET / Core</span></div>
    <div className="flex flex-col items-center"><SiAngular className="text-4xl mb-2" /><span>Angular</span></div>
    <div className="flex flex-col items-center"><SiReact className="text-4xl mb-2" /><span>React.js</span></div>
    <div className="flex flex-col items-center"><SiJavascript className="text-4xl mb-2" /><span>JavaScript</span></div>
    <div className="flex flex-col items-center"><SiTypescript className="text-4xl mb-2" /><span>TypeScript</span></div>
    <div className="flex flex-col items-center"><FaHtml5 className="text-4xl mb-2" /><span>HTML5</span></div>
    <div className="flex flex-col items-center"><FaCss3Alt className="text-4xl mb-2" /><span>CSS3</span></div>

    {/* Databases */}
    <div className="flex flex-col items-center"><FaDatabase className="text-4xl mb-2" /><span>SQL Server</span></div>
    <div className="flex flex-col items-center"><SiMysql className="text-4xl mb-2" /><span>MySQL</span></div>
    <div className="flex flex-col items-center"><SiMongodb className="text-4xl mb-2" /><span>MongoDB</span></div>
    <div className="flex flex-col items-center"><SiPostgresql className="text-4xl mb-2" /><span>PostgreSQL</span></div>

    {/* Cloud / DevOps */}
    <div className="flex flex-col items-center"><TbBrandAzure className="text-4xl mb-2" /><span>Azure</span></div>
    <div className="flex flex-col items-center"><FaAws className="text-4xl mb-2" /><span>AWS</span></div>
    <div className="flex flex-col items-center"><FaMicrosoft className="text-4xl mb-2" /><span>Azure DevOps</span></div>

    <div className="flex flex-col items-center"><SiDocker className="text-4xl mb-2" /><span>Docker</span></div>
    <div className="flex flex-col items-center"><SiKubernetes className="text-4xl mb-2" /><span>Kubernetes (AKS)</span></div>
    <div className="flex flex-col items-center"><SiJenkins className="text-4xl mb-2" /><span>Jenkins</span></div>

    {/* Tools */}
    <div className="flex flex-col items-center"><SiGit className="text-4xl mb-2" /><span>Git</span></div>
    <div className="flex flex-col items-center"><SiGithub className="text-4xl mb-2" /><span>GitHub</span></div>
    <div className="flex flex-col items-center"><SiPostman className="text-4xl mb-2" /><span>Postman</span></div>
    <div className="flex flex-col items-center"><SiSwagger className="text-4xl mb-2" /><span>Swagger</span></div>
    <div className="flex flex-col items-center"><FaMicrosoft className="text-4xl mb-2" /><span>Visual Studio</span></div>
  </div>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsGrid />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>
          <strong>University of North Texas, Texas, USA</strong><br />
          Master of Science in Computer and Information Sciences<br />
          Aug 2023 – May 2025
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li>Kubernetes and Cloud Native Associate (KCNA)</li>
        <li>AWS Certified Data Engineer – Associate</li>
        <li>AWS Certified Developer – Associate</li>
        <li>Google Data Analytics Professional Certificate (v2)</li>
        <li>Microsoft Certified: Azure Developer Associate (AZ-204)</li>
        <li>Microsoft 365 Developer Associate (MS-600)</li>
        <li>Microsoft Certified: DevOps Engineer Expert (AZ-400)</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "experience",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">Full Stack .NET Developer — Doublene, USA</h3>
          <p className="text-sm opacity-70 mb-1">Oct 2024 – Present</p>
          <ul className="list-disc ml-5 text-sm leading-6">
            <li>Architected and implemented enterprise-grade web applications with ASP.NET Core, C#, Angular, and React, improving user experience and reducing page load times by <strong>30%</strong>.</li>
            <li>Built and optimized RESTful APIs and integrated legacy SOAP services for secure data exchange, improving system communication efficiency by <strong>25%</strong>.</li>
            <li>Deployed and scaled applications on AWS and Azure; leveraged CI/CD (Azure DevOps, Jenkins) to cut release cycles by <strong>40%</strong> and reduce downtime by <strong>25%</strong>.</li>
            <li>Monitored and optimized performance with Azure Application Insights, Azure Monitor, and ELK; proactively detected issues and reduced downtime by <strong>15%</strong>.</li>
            <li>Designed responsive UI/UX with HTML5, CSS3, Bootstrap, boosting cross-platform compatibility and mobile session engagement.</li>
            <li>Implemented microservices with Docker and Kubernetes (AKS), improving scalability and modularity by <strong>20%</strong>.</li>
            <li>Partnered with BAs, QA, and PMs to gather requirements and define scope, achieving a <strong>95% on-time</strong> project completion rate.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">.NET Developer — Techecy, India</h3>
          <p className="text-sm opacity-70 mb-1">Jan 2021 – Jul 2023</p>
          <ul className="list-disc ml-5 text-sm leading-6">
            <li>Led Agile ceremonies (stand-ups, sprint planning) across cross-functional teams; delivered <strong>5</strong> major features ahead of schedule.</li>
            <li>Optimized database performance using Entity Framework and ADO.NET, reducing query latency by <strong>25%</strong> and improving responsiveness.</li>
            <li>Executed unit, integration, and load testing with NUnit and automation; achieved <strong>90%</strong> code coverage and cut production defects by <strong>35%</strong>.</li>
            <li>Designed and integrated SQL Server, MySQL, and MongoDB; improved query response times by <strong>15%</strong>.</li>
            <li>Automated deployments with CI/CD (Azure DevOps, Jenkins), accelerating release cycles by <strong>40%</strong> and reducing manual errors.</li>
            <li>Implemented secure auth with OAuth2.0, JWT, and Identity Server; enforced OWASP Top 10 compliance.</li>
            <li>Managed version control with GitHub and Azure Repos, reducing merge conflicts by <strong>30%</strong>.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = ({ theme }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className={`${theme === "dark" ? "text-white" : "text-black"}`} id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/2.jpeg" alt="About Me Image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className={`text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            About Me
          </h2>

          {/* Professional Summary aligned to your resume */}
          <p className={`text-base lg:text-lg ${theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"}`}>
            Full Stack <strong>.NET Developer (4+ years)</strong> specializing in enterprise-grade web apps using <strong>.NET Core, C#, Angular, and React</strong>.
            Known for improving application performance by <strong>30%</strong>, reducing downtime by <strong>25%</strong>, and delivering secure, cloud-native solutions on <strong>Azure</strong> and <strong>AWS</strong>.
            Skilled in <strong>microservices architecture</strong>, <strong>CI/CD automation</strong>, and <strong>database optimization</strong> (SQL Server, MySQL, MongoDB).
            Microsoft- and AWS-certified with strong <strong>Agile/TDD</strong> expertise—consistently driving faster delivery and better user experience.
          </p>

          <div className="flex flex-row justify-start mt-8 flex-wrap gap-2">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
                theme={theme}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          <div className={`mt-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
