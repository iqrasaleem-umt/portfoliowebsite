import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen sm:h-[560px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/portfoliogirl.jpg"
        alt="Portfolio Background"
        fill
        className="object-cover select-none pointer-events-none"
        draggable={false}
      />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center sm:justify-start px-6 sm:px-10 z-10 mt-[150px] sm:mt-32">
        
        {/* Name */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center sm:text-left">
          IQRA SALEEM
        </h1>
        
        {/* Subtitle */}
        <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-2 text-center sm:text-left">
          I am a Web Developer
        </p>

      </div>
    </div>
  );
}
