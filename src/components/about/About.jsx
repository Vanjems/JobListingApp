import React from 'react';
import { Target, BookOpenText, UsersRound, HandCoins } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full mx-auto px-4 py-8 space-y-8 bg-gray-50 sm:px-8 lg:px-[120px] lg:py-12 lg:space-y-12">
      {/* About Us Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-manrope font-bold text-yellow-600">About Us</h1>
      </div>

      {/* Our Mission & Our Story */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-8">
        {/* Our Mission */}
        <div className="flex flex-col items-center p-5 border border-gray-200 rounded-lg shadow-lg w-full sm:w-1/2">
          <div className="flex items-center space-x-3 mb-4 justify-center">
            <Target size={50} />
            <span className="font-manrope font-bold text-lg sm:text-xl">Our Mission</span>
          </div>
          <div className="text-center">
            <span className="text-base sm:text-lg">We aim to connect job seekers with their dream jobs and employers with ideal candidates through an intuitive and efficient platform.</span>
          </div>
        </div>

        {/* Our Story */}
        <div className="flex flex-col items-center p-5 border border-gray-200 rounded-lg shadow-lg w-full sm:w-1/2">
          <div className="flex items-center space-x-3 mb-4 justify-center">
            <BookOpenText size={50} />
            <span className="font-manrope font-bold text-lg sm:text-xl">Our Story</span>
          </div>
          <div className="text-center">
            <span className='font-manrope text-base sm:text-lg'>Founded in 2024, our company was born out of the need for a streamlined and user-friendly job listing platform. We believe in making the job search process easy and accessible for everyone.</span>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="flex flex-col items-center p-5 border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center space-x-3 mb-4 justify-center">
          <UsersRound size={50} />
          <span className="font-manrope font-bold text-lg sm:text-xl">Our Team</span>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
                src="/about/ivan.jpg"
                alt="Team member 1"
              />
              <span className="text-center mt-2 font-manrope text-sm sm:text-base">Ivan James Estores <br />Chief Executive Officer & Founder</span>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
                src="/about/OJ.jpg"
                alt="Team member 2"
              />
              <span className="text-center mt-2 font-manrope text-sm sm:text-base">Olsen John Gabriel Provido<br />Chief Operating Officer & Co-Founder</span>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
                src="/about/lebron.jpg"
                alt="Team member 3"
              />
              <span className="text-center mt-2 font-manrope text-sm sm:text-base">LeBron Raymone James Sr. <br />Chief Marketing Officer</span>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
                src="/about/mark.jpg"
                alt="Team member 4"
              />
              <span className="text-center mt-2 font-manrope text-sm sm:text-base">Mark Elliot Zuckerberg <br />Chief Technology Officer</span>
            </div>
          </div>
        </div>
      </div>

      {/* What we Offer */}
      <div className="flex flex-col p-5 border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center space-x-3 mb-4 justify-center">
          <HandCoins size={50} />
          <span className="font-manrope font-bold text-lg sm:text-xl">What we Offer</span>
        </div>
        <div className="space-y-8">
          {/* Comprehensive job listings */}
          <div className="flex flex-col sm:flex-row-reverse items-center p-5 border border-gray-200 rounded-lg shadow-lg">
            <div className="sm:w-1/2 p-4 flex justify-center">
              <img className="w-full h-60 sm:h-80 object-cover rounded-lg" src="/about/Comprehensive.JPEG" alt="Comprehensive job listings" />
            </div>
            <div className="sm:w-1/2 p-4 flex flex-col items-center justify-center text-center sm:text-left">
              <span className="font-manrope font-bold text-lg sm:text-xl mb-2">Comprehensive Job Listings</span>
              <span className="text-base sm:text-lg">Explore a wide range of job opportunities tailored to various industries and experience levels.</span>
            </div>
          </div>
          {/* Advanced search and filter options */}
          <div className="flex flex-col sm:flex-row items-center p-5 border border-gray-200 rounded-lg shadow-lg">
            <div className="sm:w-1/2 p-4 flex justify-center">
              <img className="w-full h-60 sm:h-80 object-cover rounded-lg" src="/about/Search.JPEG" alt="Advanced search and filter options" />
            </div>
            <div className="sm:w-1/2 p-4 flex flex-col items-center justify-center text-center sm:text-left">
              <span className="font-manrope font-bold text-lg sm:text-xl mb-2">Advanced Search and Filter Options</span>
              <span className="text-base sm:text-lg">Easily find the perfect job with our intuitive search and filtering features.</span>
            </div>
          </div>
          {/* Detailed job descriptions and company profiles */}
          <div className="flex flex-col sm:flex-row-reverse items-center p-5 border border-gray-200 rounded-lg shadow-lg">
            <div className="sm:w-1/2 p-4 flex justify-center">
              <img className="w-full h-60 sm:h-80 object-cover rounded-lg" src="/about/Detailed.JPEG" alt="Detailed job descriptions and company profiles" />
            </div>
            <div className="sm:w-1/2 p-4 flex flex-col items-center justify-center text-center sm:text-left">
              <span className="font-manrope font-bold text-lg sm:text-xl mb-2">Detailed Job Descriptions and Company Profiles</span>
              <span className="text-base sm:text-lg">Gain insight into potential roles and employers with in-depth information.</span>
            </div>
          </div>
          {/* Resources for job seekers */}
          <div className="flex flex-col sm:flex-row items-center p-5 border border-gray-200 rounded-lg shadow-lg">
            <div className="sm:w-1/2 p-4 flex justify-center">
              <img className="w-full h-60 sm:h-80 object-cover rounded-lg" src="/about/Resources.jpg" alt="Resources for job seekers" />
            </div>
            <div className="sm:w-1/2 p-4 flex flex-col items-center justify-center text-center sm:text-left">
              <span className="font-manrope font-bold text-lg sm:text-xl mb-2">Resources for Job Seekers</span>
              <span className="text-base sm:text-lg">Access valuable resources like career advice and resume tips to enhance your job search journey.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
