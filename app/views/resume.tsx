"use client";
import React from "react";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

export default function Resume() {
  return (
    <div className="px-4 sm:px-6 md:px-10 mt-10">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold">Resume</h1>
      <div className="bg-green-800 w-12 h-1 mt-3 mb-6"></div>

      {/* Description */}
      <p className="text-gray-700 text-sm sm:text-base md:text-lg">
        Checkout my CV, GitHub, and Vercel projects links below. You can download my resume or explore my code and live projects.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
        {/* Download CV Button */}
        <a
          href="/Minimalist CV Resume.pdf"
          download
          className="group flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 font-medium rounded-md border border-green-800 shadow-sm transition-transform transform hover:scale-105 focus:scale-105 active:scale-100"
        >
          Download CV
          <HiDownload className="text-lg sm:text-xl opacity-70 group-hover:translate-y-1 transition-transform duration-200" />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/iqrasaleem-umt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green-100 text-gray-700 font-medium rounded-md border border-green-800 shadow-sm hover:text-white hover:bg-green-700 transition-colors transform hover:scale-105 focus:scale-105 active:scale-100"
        >
          <FaGithubSquare className="text-xl sm:text-2xl" />
          GitHub
        </a>

        {/* Vercel Button */}
        <a
          href="https://vercel.com/iqrasaleems-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green-100 text-gray-700 font-medium rounded-md border border-green-800 shadow-sm hover:text-white hover:bg-green-700 transition-colors transform hover:scale-105 focus:scale-105 active:scale-100"
        >
          Vercel Projects
          <SiVercel className="text-xl sm:text-2xl" />
        </a>
      </div>
    </div>
  );
}
