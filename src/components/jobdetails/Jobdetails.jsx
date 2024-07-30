import React from 'react';
import { useParams } from 'react-router-dom';
import jobData from '../../assets/JobData.json'; // Adjust the path if necessary

export default function Jobdetails() {
  const { id } = useParams();
  const job = jobData.find(job => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className='w-full '>
      <div className="flex flex-col">
        {/* Job Details and the Back Button */}
        <div className="flex flex-row">
          <div className="container mx-auto text-center relative">
            <h1 className="text-4xl font-bold mb-4">Job Details</h1>
          </div>
          <a className='rounded-full bg-yellow-500 py-2 px-5 absolute right-[200px]' href='/'>Back to Listing</a>
        </div>
        {/* Job Title to Company images */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* The Job title, Location, Company Name, Job Details */}
            <div className="flex flex-col gap-y-5">
              <h1>Job Title: {job.jobTitle}</h1>
              <div>Monthly Salary Range: {job.monthlySalaryRange}</div>
              <div className="">Company Name: {job.companyName}</div>
              <div className="">Location: {job.location}</div>
              <div className="">Type: {job.type}</div>
              <div className="">Job Description: {job.jobDescription}</div>
            </div>
            {/* The Image Portion */}
            <div className="h-[100px] w-[50px] bg-red-100"> I AM AN IMAGE</div>
          </div>
          <div className="">Job Requirements: 
            <ul>
              {job.jobRequirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div className="">
            How to Apply: {job.howToApply}
          </div>
          <div className="">
            Company Information: {job.companyInformation}
          </div>
        </div>
      </div>
    </div>
  );
}
