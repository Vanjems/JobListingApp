import React from 'react'

export default function Hero() {
  return (
    <div className='px-10 bg-cover min-h-screen flex flex-col gap-y-20' style={{backgroundImage: "url('/hero/background.jpg')" }}>
        {/* Welcome Section */}
        <div className="container mx-auto text-center py-10">
          <div className="text-4xl font-bold mb-4">Welcome to KaveJob</div>
          <p className="text-lg mb-8">Your ultimate solution to finding the perfect job. Search, filter, and apply with ease.</p>
          <button className='bg-purple-200 text-black font-semibold py-2 px-5 rounded-full'>Get Started</button>
          </div>
        
          {/* Brief Features Section */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center bg-gray-100 ">
          <h2 className="text-2xl font-bold mb-4">Easy to Use</h2>
          <p>Our user-friendly interface ensures a seamless job search experience.</p>
        </div>
        <div className="text-center bg-gray-100 ">
          <h2 className="text-2xl font-bold mb-4">Advanced Search</h2>
          <p>Filter job postings by location, industry, and more to find your ideal job.</p>
        </div>
        <div className="text-center bg-gray-100 ">
          <h2 className="text-2xl font-bold mb-4">Job Alerts</h2>
          <p>Get notified about the latest job postings that match your criteria.</p>
        </div>
      </div>
    </div>
  )
}
