import React from 'react';

export default function Contact() {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-10">
      
      {/* Contact Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
        Contact
      </h1>
      
      {/* Underline */}
      <div className="bg-green-800 w-12 h-1 mt-2 sm:mt-3"></div>
      
      {/* Emails */}
      <div className="mt-5 flex flex-col gap-4">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
          Email: <span className="text-gray-800 font-bold break-words">fhsaleem8104@gmail.com</span>
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
          Email: <span className="text-gray-800 font-bold break-words">siqra6091@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
