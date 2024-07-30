import React from 'react';
import { Link } from 'react-router-dom';
import jobData from '../../assets/JobData.json'; // Adjust the path if necessary

export default function Job() {
  return (
    <div>
      {/* the div below divides the structure by half horizontally */}
      <div className="flex flex-col">
        {/* This div will be the Page Title and the search bar and button */}
        <div className="">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Job Listing</h1>
            <p className="text-lg mb-8">Search the Job you want below...</p>
            {/* Search bar and Search Button here */}
            <div className="flex justify-center items-center">
              <input type="text" placeholder="Search for jobs..." className="w-1/2 p-2 border rounded-l-md shadow-sm" />
              <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Search</button>
            </div>
          </div>
        </div>
        
        {/* This div will be the filter and Job Listing View */}
        <div className="container mx-auto flex flex-col md:flex-row gap-10 mt-10">
          <div className="flex flex-col w-full md:w-1/3 h-auto bg-red-200 p-5">
            <h2 className="text-2xl font-bold mb-4 text-center">Filter</h2>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Job Type</h3>
              <div className="grid grid-cols-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">All</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Full-time</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Part-time</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Remote</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <div className="grid grid-cols-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">All</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Mindanao</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Visayas</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Luzon</span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-auto bg-red-200 p-5">
            <h2 className="text-2xl font-bold mb-4 text-center">Job List</h2>
            {/* Job listing items will go here */}
            <div className="space-y-4">
              {jobData.map((job) => (
                <div key={job.id} className="bg-gray-400 p-4 rounded-md shadow-md flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 flex items-center justify-center mb-4">
                      Company Logo or Image Portion
                    </div>
                    <div className="w-full h-24 bg-gray-200 mb-4 flex flex-col justify-center items-center">
                      <div className="font-bold text-lg">{job.jobTitle}</div>
                      <div>{job.monthlySalaryRange}</div>
                      <div>{job.type}</div>
                    </div>
                    <Link className="px-4 py-2 bg-gray-500 text-white rounded-md" to={`/jobdetails/${job.id}`}>More Details</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
