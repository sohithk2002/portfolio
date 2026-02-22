"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Keep your existing FA icons for HTML/CSS
import { FaHtml5, FaCss3Alt, FaAws, FaMicrosoft, FaDatabase, FaWindows, FaServer } from "react-icons/fa";

// Keep these Simple-Icons that are known-good in react-icons
import {
  SiOpenai,
  SiGoogle,
  SiAnthropic,
  SiHuggingface,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger
} from "react-icons/si";

// Use Tabler fallbacks for the ones failing in your build

// Lightweight dot placeholder for ".NET" (you can keep this or swap to any icon you like)
import { LiaDotCircle } from "react-icons/lia";

const SkillsGrid = () => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">

    {/* 🤖 AI & Automation */}
    <div className="flex flex-col items-center"><SiOpenai className="text-4xl mb-2" /><span>OpenAI / GPT</span></div>
    <div className="flex flex-col items-center"><SiGoogle className="text-4xl mb-2" /><span>Gemini</span></div>
    <div className="flex flex-col items-center"><SiAnthropic className="text-4xl mb-2" /><span>Claude</span></div>
    <div className="flex flex-col items-center"><SiHuggingface className="text-4xl mb-2" /><span>Hugging Face</span></div>

    {/* 💻 Full-Stack */}
    <div className="flex flex-col items-center"><SiNextdotjs className="text-4xl mb-2" /><span>Next.js</span></div>
    <div className="flex flex-col items-center"><SiReact className="text-4xl mb-2" /><span>React</span></div>
    <div className="flex flex-col items-center"><SiNodedotjs className="text-4xl mb-2" /><span>Node.js</span></div>
    <div className="flex flex-col items-center"><SiPython className="text-4xl mb-2" /><span>Python</span></div>
    <div className="flex flex-col items-center"><SiTypescript className="text-4xl mb-2" /><span>TypeScript</span></div>
    <div className="flex flex-col items-center"><SiJavascript className="text-4xl mb-2" /><span>JavaScript</span></div>

    {/* 🗄️ Databases */}
    <div className="flex flex-col items-center"><SiPostgresql className="text-4xl mb-2" /><span>PostgreSQL</span></div>
    <div className="flex flex-col items-center"><SiMongodb className="text-4xl mb-2" /><span>MongoDB</span></div>
    <div className="flex flex-col items-center"><FaDatabase className="text-4xl mb-2" /><span>SQL</span></div>

    {/* ☁️ Cloud & DevOps */}
    <div className="flex flex-col items-center"><FaAws className="text-4xl mb-2" /><span>AWS</span></div>
    <div className="flex flex-col items-center"><SiGooglecloud className="text-4xl mb-2" /><span>GCP</span></div>
    <div className="flex flex-col items-center"><SiDocker className="text-4xl mb-2" /><span>Docker</span></div>
    <div className="flex flex-col items-center"><SiKubernetes className="text-4xl mb-2" /><span>Kubernetes</span></div>
    <div className="flex flex-col items-center"><SiJenkins className="text-4xl mb-2" /><span>CI/CD</span></div>

    {/* 🏢 Enterprise (Your Job Strength) */}
    <div className="flex flex-col items-center"><FaMicrosoft className="text-4xl mb-2" /><span>Entra ID</span></div>
    <div className="flex flex-col items-center"><FaWindows className="text-4xl mb-2" /><span>Active Directory</span></div>
    <div className="flex flex-col items-center"><FaServer className="text-4xl mb-2" /><span>Intune / SCCM</span></div>

    {/* 🛠️ Tools */}
    <div className="flex flex-col items-center"><SiGit className="text-4xl mb-2" /><span>Git</span></div>
    <div className="flex flex-col items-center"><SiGithub className="text-4xl mb-2" /><span>GitHub</span></div>
    <div className="flex flex-col items-center"><SiPostman className="text-4xl mb-2" /><span>Postman</span></div>
    <div className="flex flex-col items-center"><SiSwagger className="text-4xl mb-2" /><span>Swagger</span></div>

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
    
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "experience",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">
            IT Systems Engineer — Endpoint & Identity Management — 22nd Century Technologies (Dallas County)
          </h3>
          <p className="text-sm opacity-70 mb-1">Jul 2025 – Present</p>
          <ul className="list-disc ml-5 text-sm leading-6">
            <li>
              Provide onsite and remote support across multiple government departments, resolving complex hardware, software, networking, and access issues.
            </li>
            <li>
              Manage identity and access operations using <strong>Microsoft Entra ID (Azure AD)</strong> and on-premises Active Directory, including account provisioning, MFA enforcement, and authentication troubleshooting.
            </li>
            <li>
              Configure and support enterprise endpoints using <strong>Microsoft Intune</strong> and <strong>SCCM</strong>, including imaging, patching, compliance policies, and application deployment.
            </li>
            <li>
              Support secure connectivity solutions including VPN access, domain-joined infrastructure, and enterprise security controls.
            </li>
            <li>
              Monitor and secure distributed assets using endpoint management tools, ensuring compliance with organizational policies.
            </li>
            <li>
              Assist users working with enterprise platforms including SAP ERP, Snowflake, and service management systems (Ivanti Heat).
            </li>
            <li>
              Analyze incident trends and system logs to identify recurring issues and improve service reliability.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Software Engineer Intern — Techecy Consultancy & Solutions
          </h3>
          <p className="text-sm opacity-70 mb-1">Aug 2022 – Jun 2023</p>
          <ul className="list-disc ml-5 text-sm leading-6">
            <li>
              Contributed to full-stack development in an Agile environment, building secure web applications using modern frameworks and databases.
            </li>
            <li>
              Implemented authentication and authorization using OAuth 2.0 and JWT following security best practices.
            </li>
            <li>
              Designed and integrated SQL and NoSQL databases (SQL Server, MySQL, MongoDB) to support application functionality.
            </li>
            <li>
              Supported CI/CD pipelines using Azure DevOps and Jenkins to streamline releases and improve deployment efficiency.
            </li>
            <li>
              Performed automated testing and debugging to improve reliability and reduce production issues.
            </li>
            <li>
              Collaborated with cross-functional teams during sprint planning and development cycles to deliver project milestones.
            </li>
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
  AI & Full-Stack <strong>Product Engineer</strong> specializing in building intelligent automation systems and scalable web applications using <strong>Next.js, React, Node.js, and Python</strong>.
  Known for developing real-world AI solutions including an autonomous browser agent capable of executing complex tasks across websites using natural language.
  Experienced in integrating modern AI models (<strong>GPT, Gemini, Claude</strong>) and delivering secure, cloud-native platforms on <strong>AWS</strong> and modern infrastructure.
  Skilled in <strong>AI agents</strong>, <strong>automation workflows</strong>, <strong>microservices architecture</strong>, and <strong>end-to-end product development</strong> (PostgreSQL, MongoDB, SQL).
  AWS-certified with enterprise experience in identity management, endpoint systems, and secure infrastructure—consistently building solutions that improve efficiency and user experience.
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
