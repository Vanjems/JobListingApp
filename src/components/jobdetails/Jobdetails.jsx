import React from 'react';
import jobData from '../../assets/JobData.json'; 

export default function Jobdetails({ id }) {
  const job = jobData.find(job => job.id === parseInt(id));

  if (!job) {
    return <div className="text-center text-red-500 font-bold">Job not found</div>;
  }

  return (
    <div className='w-full bg-gray-100 p-6 pt-[120px]'>
      <div className="flex flex-col">
        {/* Job Details and the Back Button */}
        <div className="flex flex-row justify-between items-center mb-6">
          <div className="container mx-auto text-center relative">
            <h1 className="text-4xl font-bold text-yellow-600">Job Details</h1>
          </div>
          <a className='rounded-full bg-yellow-600 text-white py-2 px-5 hover:bg-yellow-500 transition duration-300' href='/jobpage'>Back to Listing</a>
        </div>
        
        {/* Job Title to Company images */}
        <div className="flex flex-col bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Job title, Location, Company Name, Job Details */}
            <div className="flex flex-col gap-y-5">
              <h2 className="text-2xl font-bold">{job.jobTitle}</h2>
              <div className="text-lg">Monthly Salary Range: <span className="font-semibold">{job.monthlySalaryRange}</span></div>
              <div>Company Name: <span className="font-semibold">{job.companyName}</span></div>
              <div>Location: <span className="font-semibold">{job.location}</span></div>
              <div>Type: <span className="font-semibold">{job.type}</span></div>
              <div>Job Description: <p className="mt-2">{job.jobDescription}</p></div>
            </div>
            {/* The Image Portion */}
            <div className="h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-lg rounded-md">
              I AM AN IMAGE
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Job Requirements:</h3>
            <ul className="list-disc list-inside">
              {job.jobRequirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">How to Apply:</h3>
            <p>{job.howToApply}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Company Information:</h3>
            <p>{job.companyInformation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
