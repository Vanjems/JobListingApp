import React from 'react';

export default function Hero() {
  return (
    <div className='relative px-10 min-h-screen flex flex-col gap-y-10 text-gray-800 pt-[120px]'>
      {/* Blurry Background */}
      <div 
        className='absolute inset-0'
        style={{
          backgroundImage: "url('/hero/background2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) grayscale(100%)',
          opacity: 0.3, 
          zIndex: -1, 
        }} 
      />

      {/* Welcome Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        <div className="container mx-auto text-center py-10 rounded-lg">
          <div className="text-4xl font-bold mb-4 text-yellow-600">Find Your Dream Job Today!</div>
          <p className="text-lg mb-8">Explore thousands of listings tailored to your skills and aspirations, and take the next step towards your career goals.</p>

          <a href='/jobpage' className='bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full hover:bg-yellow-500 transition duration-300'>
            Find Job
          </a>
        </div>


        <div className="flex flex-row justify-center items-center gap-5 mb-5 relative">
          <img className="min-w-[303px] min-h-[275px]" src="/hero/Hand.png" alt="" />
        </div>
    </div>

      {/* Brief Features Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10 mb-5">
        <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Easy to Use</h2>
          <p>Our user-friendly interface ensures a seamless job search experience.</p>
        </div>
        <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Advanced Search</h2>
          <p>Filter job postings by location, industry, and more to find your ideal job.</p>
        </div>
        <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Detailed Job Information</h2>
          <p>Access comprehensive job descriptions, including responsibilities, salary ranges, benefits, and company culture, to find the right fit for you.</p>
        </div>
      </div>
    </div>

  );
}
