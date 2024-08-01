import React from 'react';
import { Target, BookOpenText, UsersRound, HandCoins } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8 space-y-8 pt-[120px]">
      {/* Our Mission & Our Story */}
      <div className="flex flex-row justify-between space-x-4">
        {/* Our Mission */}
        <div className="flex flex-col items-center p-5 border border-gray-200 rounded-lg shadow-lg w-1/2">
          <div className="flex items-center space-x-3 mb-4 justify-center">
            <Target size={50} />
            <span className="font-serif font-bold text-lg">Our Mission</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span>We aim to connect job seekers with their dream jobs and employers with ideal candidates through an intuitive and efficient platform.</span>
          </div>
        </div>

        {/* Our Story */}
        <div className="flex flex-col items-center p-5 border border-gray-200 rounded-lg shadow-lg w-1/2">
          <div className="flex items-center space-x-3 mb-4 justify-center">
            <BookOpenText size={50} />
            <span className="font-serif font-bold text-lg">Our Story</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span>Founded in 2024, our company was born out of the need for a streamlined and user-friendly job listing platform. We believe in making the job search process easy and accessible for everyone.</span>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="flex flex-col items-center p-5 border border-gray-200 rounded-lg shadow-lg w-full">
        <div className="flex items-center space-x-3 mb-4 justify-center">
          <UsersRound size={50} />
          <span className="font-serif font-bold text-lg">Our Team</span>
        </div>
        <div className="px-5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/about/ivan.jpg"
                alt="Team member 1"
              />
              <span className="text-center mt-2">Ivan James Estores <br />CEO</span>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/about/OJ.jpg"
                alt="Team member 2"
              />
              <span className="text-center mt-2">Olsen John Gabriel Provido<br />CTO</span>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/about/lebron.jpg"
                alt="Team member 3"
              />
              <span className="text-center mt-2">LeBron Raymone James Sr. <br />COO</span>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/about/mark.jpg"
                alt="Team member 4"
              />
              <span className="text-center mt-2">Mark Elliot Zuckerberg <br />CMO</span>
            </div>
          </div>
        </div>
      </div>

      {/* What we Offer */}
      <div className="flex flex-col p-5 border border-gray-200 rounded-lg shadow-lg w-full">
        <div className="flex items-center space-x-3 mb-4 justify-center">
          <HandCoins size={50} />
          <span className="font-serif font-bold text-lg">What we Offer</span>
        </div>
        <div className="space-y-8">
          {/* Comprehensive job listings */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 p-4 flex justify-center">
              <img className="w-full h-80 object-cover max-w-full rounded-lg" src="/about/Comprehensive.JPEG" alt="Comprehensive job listings" />
            </div>
            <div className="md:w-1/2 p-4 text-center md:text-right flex items-center justify-center text-xl">
              <span>Comprehensive job listings</span>
            </div>
          </div>
          {/* Advanced search and filter options */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4 flex justify-center">
              <img className="w-full h-80 object-cover max-w-full rounded-lg" src="/about/Search.JPEG" alt="Advanced search and filter options" />
            </div>
            <div className="md:w-1/2 p-4 text-center md:text-right flex items-center justify-center text-xl">
              <span>Advanced search and filter options</span>
            </div>
          </div>
          {/* Detailed job descriptions and company profiles */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 p-4 flex justify-center">
              <img className="w-full h-80 object-cover max-w-full rounded-lg" src="/about/Detailed.JPEG" alt="Detailed job descriptions and company profiles" />
            </div>
            <div className="md:w-1/2 p-4 text-center md:text-right flex items-center justify-center text-xl">
              <span>Detailed job descriptions and company profiles</span>
            </div>
          </div>
          {/* Resources for job seekers */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4 flex justify-center">
              <img className="w-full h-80 object-cover max-w-full rounded-lg" src="/about/Resources.jpg" alt="Resources for job seekers" />
            </div>
            <div className="md:w-1/2 p-4 text-center md:text-right flex items-center justify-center text-xl">
              <span>Resources for job seekers (career advice, resume tips, etc.)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
