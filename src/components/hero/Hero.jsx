import React from 'react';

export default function Hero() {
  return (
    <div className='relative px-10 min-h-screen flex flex-col gap-y-20 text-gray-800 pt-[120px]'>
      {/* Blurry Background */}
      <div 
        className='absolute inset-0'
        style={{
          backgroundImage: "url('/hero/background2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) grayscale(80%)',
          zIndex: -1, // Place it behind the content
        }} 
      />

      {/* Welcome Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        <div className="container mx-auto text-center py-10 bg-white bg-opacity-70 rounded-lg shadow-md">
          <div className="text-4xl font-bold mb-4 text-yellow-600">Find Your Dream Job Today!</div>
          <p className="text-lg mb-8">Explore thousands of listings tailored to your skills and aspirations, and take the next step towards your career goals.</p>

          <a href='/jobpage' className='bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full hover:bg-yellow-500 transition duration-300'>
            Get Started
          </a>
        </div>
        <div className="flex justify-center items-center">
          <div 
            style={{
              backgroundImage: "url('/hero/Hand.png')",
              backgroundSize: 'contain', // Changed to contain to show the entire image
              backgroundRepeat: 'no-repeat', // Prevent image from repeating
              height: '200%', // Set height to fill the available space
              width: '100%', // Set width to fill the available space
            }} 
          />
        </div>
      </div>
      
      {/* Brief Features Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Easy to Use</h2>
          <p>Our user-friendly interface ensures a seamless job search experience.</p>
        </div>
        <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Advanced Search</h2>
          <p>Filter job postings by location, industry, and more to find your ideal job.</p>
        </div>
        <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Job Alerts</h2>
          <p>Get notified about the latest job postings that match your criteria.</p>
        </div>
      </div>
    </div>
  );
}
