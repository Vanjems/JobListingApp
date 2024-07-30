import React from 'react';
import { Target, BookOpenText, UsersRound, HandCoins } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto px-6 py-8 space-y-8">
      {/* Our Mission */}
      <div className="flex flex-col p-5 border border-gray-200 rounded-lg shadow-lg w-full">
        <div className="flex items-center space-x-3 mb-4">
          <Target size={50} />
          <span className='font-serif font-bold text-lg'>Our Mission</span>
        </div>
        <div className="flex flex-col">
          <span>We aim to connect job seekers with their dream jobs and employers with ideal candidates through an intuitive and efficient platform.</span>
        </div>
      </div>

      {/* Our Story */}
      <div className="flex flex-col p-5 border border-gray-200 rounded-lg shadow-lg w-full">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpenText size={50} />
          <span className="font-serif font-bold text-lg">Our Story</span>
        </div>
        <div className="flex flex-col">
          <span>Founded in 2024, our company was born out of the need for a streamlined and user-friendly job listing platform. We believe in making the job search process easy and accessible for everyone.</span>
        </div>
      </div>

      {/* Our Team */}
      <div className="flex flex-col p-5 border border-gray-200 rounded-lg shadow-lg w-full">
        <div className="flex items-center space-x-3 mb-4">
          <UsersRound size={50} />
          <span className='font-serif font-bold text-xl'>Our Team</span>
        </div>
        <div className="overflow-y-auto h-96 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/about/ivan.jpg"  // Use absolute path
                alt="Team member 1"
              />
              <span className='text-center mt-2'>Ivan James Estores <br />CEO</span>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/about/OJ.jpg"  // Use absolute path
                alt="Team member 2"
              />
              <span className='text-center mt-2'>Olsen John Gabriel Provido<br />CTO</span>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/about/lebron.jpg"  // Use absolute path
                alt="Team member 3"
              />
              <span className='text-center mt-2'>LeBron Raymone James Sr. <br />COO</span>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/about/mark.jpg"  // Use absolute path
                alt="Team member 4"
              />
              <span className='text-center mt-2'>Mark Elliot Zuckerberg <br />CMO</span>
            </div>
          </div>
        </div>
      </div>

      {/* What we Offer */}
      <div className="flex flex-col p-5 border border-gray-200 rounded-lg shadow-lg w-full">
        <div className="flex items-center space-x-3 mb-4">
          <HandCoins size={50} />
          <span className="font-serif font-bold text-lg">What we Offer</span>
        </div>
        <div className="flex flex-col">
          <span>• Comprehensive job listings<br />
            • Advanced search and filter options<br />
            • Detailed job descriptions and company profiles<br />
            • Resources for job seekers (career advice, resume tips, etc.)</span>
        </div>
      </div>
    </div>
  );
}
