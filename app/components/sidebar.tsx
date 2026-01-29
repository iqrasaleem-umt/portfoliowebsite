import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="hidden sm:flex sm:w-60 sm:h-screen sm:bg-black sm:px-6 sm:flex-col sm:items-center sm:justify-start sm:border-r-8 sm:border-gray-500 fixed top-0 left-0 sm:overflow-y-auto z-20">
      
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-500 mt-6">
        <Image
          src="/portfoliogirl.jpg"
          width={200}
          height={200}
          alt="Profile"
          className="object-cover select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Name */}
      <p className="text-white font-bold mt-6 text-center sm:text-left">
        Iqra Saleem
      </p>

      {/* Portfolio Title */}
      <p className="text-gray-500 hover:text-white font-bold mt-6 text-center">
        Portfolio
      </p>

      {/* Sidebar Links */}
      <div className="flex flex-col mt-4 text-base sm:text-lg w-full px-4">
        
        {/* Home */}
        <div className="flex items-center gap-4 mt-4 cursor-pointer">
          <Image
            src="/home.png"
            width={24}
            height={24}
            alt="Home"
            className="hover:grayscale select-none pointer-events-none"
            draggable={false}
          />
          <Link className="text-gray-500 hover:text-white" href={"/"}>
            Home
          </Link>
        </div>

        {/* About */}
        <div className="flex items-center gap-4 mt-4 cursor-pointer">
          <Image
            src="/personicon.png"
            width={24}
            height={24}
            alt="About"
            className="hover:grayscale select-none pointer-events-none"
            draggable={false}
          />
          <Link className="text-gray-500 hover:text-white" href={"/about"}>
            About
          </Link>
        </div>

        {/* Resume */}
        <div className="flex items-center gap-4 mt-4 cursor-pointer">
          <Image
            src="/resume.png"
            width={24}
            height={24}
            alt="Resume"
            className="hover:grayscale select-none pointer-events-none"
            draggable={false}
          />
          <Link className="text-gray-500 hover:text-white" href={"/resume"}>
            Resume
          </Link>
        </div>

        {/* Projects */}
        <div className="flex items-center gap-4 mt-4 cursor-pointer">
          <Image
            src="/portfolio.png"
            width={24}
            height={24}
            alt="Projects"
            className="hover:grayscale select-none pointer-events-none"
            draggable={false}
          />
          <Link className="text-gray-500 hover:text-white" href={"/projects"}>
            Projects
          </Link>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-4 mt-4 cursor-pointer">
          <Image
            src="/contact.png"
            width={24}
            height={24}
            alt="Contact"
            className="hover:grayscale select-none pointer-events-none"
            draggable={false}
          />
          <Link className="text-gray-500 hover:text-white" href={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
