"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  FaNodeJs,
  FaReact,
  FaAws,
  FaDocker,
  FaGithub,
  FaDatabase,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJenkins,
  FaLinux,
  FaCloud,
} from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center"><FaNodeJs className="text-4xl mb-2" /><span>Node.js</span></div>
        <div className="flex flex-col items-center"><FaReact className="text-4xl mb-2" /><span>React.js</span></div>
        <div className="flex flex-col items-center"><FaAws className="text-4xl mb-2" /><span>AWS</span></div>
        <div className="flex flex-col items-center"><FaDocker className="text-4xl mb-2" /><span>Docker</span></div>
        <div className="flex flex-col items-center"><FaGithub className="text-4xl mb-2" /><span>GitHub</span></div>
        <div className="flex flex-col items-center"><FaDatabase className="text-4xl mb-2" /><span>PostgreSQL</span></div>
        <div className="flex flex-col items-center"><FaJava className="text-4xl mb-2" /><span>Java</span></div>
        <div className="flex flex-col items-center"><FaPython className="text-4xl mb-2" /><span>Python</span></div>
        <div className="flex flex-col items-center"><FaJenkins className="text-4xl mb-2" /><span>Jenkins</span></div>
        <div className="flex flex-col items-center"><FaLinux className="text-4xl mb-2" /><span>Linux</span></div>
        <div className="flex flex-col items-center"><FaCloud className="text-4xl mb-2" /><span>GCP</span></div>
        <div className="flex flex-col items-center"><FaHtml5 className="text-4xl mb-2" /><span>HTML5</span></div>
        <div className="flex flex-col items-center"><FaCss3Alt className="text-4xl mb-2" /><span>CSS3</span></div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>University of North Texas, Texas, United States</strong><br />
          Master of Science in Computer and Information Sciences (CGPA: 3.88)<br />
          Aug 2023 – May 2025
        </li>
        <li className="mt-2">
          <strong>Visvesvaraya Technological University, India</strong><br />
          Bachelor of Engineering in Electronics and Communication Engineering (CGPA: 3.88)<br />
          June 2019 – March 2023
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Developer Associate</li>
        <li>AWS Data Engineer Associate</li>
        <li>Google Professional Data Analytics</li>
        <li>KCNA – Kubernetes & Cloud Native Associate</li>
        <li>Docker Foundations (LinkedIn Learning)</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "experience",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Software Engineer (Part-Time) – University of North Texas</h3>
          <p className="text-sm text-gray-400 mb-1">Aug 2024 – march 2025</p>
          <ul className="list-disc ml-5 text-sm">
            <li>Integrated AWS, GCP, and Azure AD to reduce latency by 30% and improve scalability.</li>
            <li>Built high-performance APIs using Spring Boot & Node.js with Redis caching.</li>
            <li>Enhanced DB performance on PostgreSQL & DynamoDB, cutting query time by 20%.</li>
            <li>Secured access using MFA and RBAC, reducing incidents by 30%.</li>
            <li>Deployed CI/CD pipelines with Jenkins, Docker, Kubernetes for 0-downtime deployments.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Graduate Teaching Assistant – University of North Texas</h3>
          <p className="text-sm text-gray-400 mb-1">Jan 2024 – Jul 2024</p>
          <ul className="list-disc ml-5 text-sm">
            <li>Conducted workshops on secure payments & OAuth integration for 100+ students.</li>
            <li>Reviewed projects using OWASP, ISO 27001, and NIST frameworks.</li>
            <li>Mentored on secure API development using Stripe and PayPal integrations.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Software Engineer Intern – Persistent Systems</h3>
          <p className="text-sm text-gray-400 mb-1">Aug 2022 – Jun 2023</p>
          <ul className="list-disc ml-5 text-sm">
            <li>Improved Java app speed by 30% using multithreading & caching.</li>
            <li>Developed REST APIs using Spring Boot & Hibernate.</li>
            <li>Automated deployments with Jenkins & Docker, cutting rollback time by 50%.</li>
            <li>Wrote unit tests with JUnit & Mockito – reached 95%+ test coverage.</li>
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
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className={`${theme === "dark" ? "text-white" : "text-black"}`} id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/2.jpeg" alt="About Me Image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className={`text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            About Me
          </h2>
          <p className={`text-base lg:text-lg ${theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"}`}>
            I&apos;m a Full-Stack & Cloud Engineer with deep experience in building scalable web and AI-integrated apps using Next.js, Node.js, Prisma, and cloud platforms like AWS & GCP. I’ve engineered high-performance APIs, AI career tools, financial analytics dashboards, and automated pipelines using Docker, Kubernetes, and Jenkins. Passionate about transforming ideas into impact with cloud-native architectures, real-time systems, and secure, user-friendly solutions.
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
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
